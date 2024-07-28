import * as THREE from "three";
import { useMemo } from "react";

type Fn = () => unknown;

// draw THREE.js without r3f
function createRenderer() {
  const aspect = window.innerWidth / window.innerHeight;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  camera.position.z = 5;

  renderer.setSize(window.innerWidth, window.innerHeight);

  let queue: Fn[] = [];
  let current = queue;

  const flush = () => {
    if (!current.length) return;

    queue = [] as Fn[];

    current.forEach((fn) => {
      if (fn()) queue.push(fn);
    });

    current = queue;
  };

  let requestId: number;

  const tick = () => {
    flush();
    renderer.render(scene, camera);
    requestId = requestAnimationFrame(tick);
  };

  const mount = (el: Element) => {
    tick();
    el.appendChild(renderer.domElement);
  };

  const clean = () => {
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
  };
}

function useRenderer() {
  return useMemo(() => createRenderer(), []);
}

function createShader(parameters?: THREE.ShaderMaterialParameters) {
  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.ShaderMaterial(parameters);
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function useShader(paramaters?: THREE.ShaderMaterialParameters) {
  return useMemo(() => createShader(paramaters), []);
}

const uniforms = {};

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = vec3(uv, 1).xy;
  vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = vec4(position * 2.0, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
void main() {
  gl_FragColor = vec4(vUv, 0.0, 1.0);
}
`;

export default function App() {
  const { ref, scene } = useRenderer();
  const shader = useShader({ uniforms, vertexShader, fragmentShader });

  useMemo(() => {
    scene.add(shader);
  }, []);

  return null
  return (
    <div
      ref={ref}
    />
  );
}
