import { defaultPalette } from './colors';
import typography from './typography';

interface Theme {
  typography: typeof typography;
  color: Record<string, string>;
}

const theme: Theme = {
  typography,
  color: defaultPalette,
};

export default theme;