import { DefaultTheme } from 'styled-components';
import { defaultPalette } from './colors';
import typography from './typography';

const theme: DefaultTheme = {
  typography,
  color: defaultPalette,
};

export default theme;