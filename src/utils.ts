export const COLORS = {
  sooty: "#141414",
  carbon: "#373853",
  smoke: "#F5F5F5",
};

export const LABELS = {
  DATASET_LABEL: "Daily Walking Distance (km)",
};

export function dateToMonth(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
