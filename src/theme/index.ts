import colors, { defaultPalette } from './colors';
import typography from './typography';

const theme = {
  typography,
  color: defaultPalette,
  shadow: {
    short: `2px 0 4px ${colors.gray500}`,
    medium: `4px 0 4px ${colors.gray500}`,
    long: `8px 0 6px ${colors.gray500}`,
  }
};

export type Theme = typeof theme;
export default theme;