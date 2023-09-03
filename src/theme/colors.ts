const colors = {
  paleYellowGreen: "#f3ffbd",
  gray900: "#202124",
};

export const defaultPalette = {
  background: colors.paleYellowGreen,
  text: colors.gray900,
} as const;

export type Palette = typeof defaultPalette;

export default colors;
