export const zIndex = {
  default: 1000,
  bottomSheet: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  toast: 1400,
  tooltip: 1500,
  carousel: 500,
  rating: 600,
} as const;

export type ZIndex = typeof zIndex;
