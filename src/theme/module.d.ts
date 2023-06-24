import { type Palette } from './colors';
import { type Typography } from './typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: Typography;
    color: Palette;
  }
}