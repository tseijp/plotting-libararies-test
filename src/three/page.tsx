import * as THREE from "three";
import { useMemo, useRef } from "react";
import dataset from "../dataset.json";
import { COLORS } from "../utils";

type Fn = () => unknown;

// draw THREE.js without r3f
function createRenderer() {
  const aspect = window.innerWidth / window.innerHeight;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  camera.position.z = 1;

  renderer.setSize(window.innerWidth, window.innerHeight);

  let queue = new Set<Fn>();
  let current = queue;

  const flush = () => {
    if (!current.size) return;

    queue = new Set();


    current.forEach((fn) => {
      if (fn()) queue.add(fn);
    });

    current = queue;
  };

  let requestId: number;

  const invalidate = () => {
    requestId = requestAnimationFrame(tick);
  }

  const tick = () => {
    flush();
    renderer.render(scene, camera);
    requestId = requestAnimationFrame(tick);
  };

  const observer = new ResizeObserver((entries) => {
    const { width, height } = entries[0].contentRect;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  const mount = (el: Element) => {
    observer.observe(el);
    el.appendChild(renderer.domElement);
    tick();
  };

  const clean = () => {
    observer.disconnect();
    cancelAnimationFrame(requestId);
    renderer.domElement.remove();
  };

  const ref = (el: Element | null) => {
    if (el) mount(el);
    else clean();
  };

  return {
    scene,
    camera,
    queue,
    flush,
    mount,
    clean,
    tick,
    ref,
    invalidate,
  };
}

function useRenderer() {
  return useMemo(() => createRenderer(), []);
}

function useFrame(fn: () => unknown, queue: Set<Fn>) {
  const ref = useRef({ current: fn, cache: () => ref.current() }).current;
  ref.current = fn;

  queue.add(ref.cache);
}

function createCurve() {
  const curve = new THREE.SplineCurve(
    Object.values(dataset).map(
      (value, i, { length }) => new THREE.Vector2(i / length, value / 1000)
    )
  );

  const points = curve.getPoints(curve.getLength());
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.MeshBasicMaterial({ color: COLORS.sooty });
  const mesh = new THREE.Line(geometry, material);

  mesh.position.x = -0.5;
  mesh.position.y = -10;

  const group = new THREE.Group();

  group.add(mesh);

  group.scale.x = 1.6;
  group.scale.y = 0.02;

  return {
    group,
    curve,
    points,
    geometry,
    material,
    mesh,
  };
}

export default function App() {
  const { ref, queue, scene } = useRenderer();

  useFrame(() => {
    const curve = createCurve();
    scene.add(curve.group);
  }, queue);

  return <div className="size-full" ref={ref} />;
}
