const colors = {
  blue600: '#3E81F6',
  gray900: '#202124',
};

export const defaultPalette = {
  main: colors.blue600,
  text: colors.gray900,
} as const;

export type Palette = typeof defaultPalette;

export default colors;

