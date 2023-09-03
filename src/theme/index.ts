import { defaultPalette } from "./colors";
import typography from "./typography";

const theme = {
  typography,
  color: defaultPalette,
  shadow: {
    short: `0 2px 4px rgba(0, 0, 0, 0.25)`,
    medium: `0 4px 4px rgba(0, 0, 0, 0.25)`,
    long: `0 8px 6px rgba(0, 0, 0, 0.25)`,
  },
};

export type Theme = typeof theme;
export default theme;
