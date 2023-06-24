import { DefaultTheme, css } from 'styled-components';
import { default as typoDefinitions } from '../theme/typography';
import colors from '../theme/colors';

type TypographyType = keyof DefaultTheme['typography'];
export const typography = (name: TypographyType) => css`${serializedTypo[name]}`;

const serializedTypo = Object.keys(typoDefinitions)
  .reduce((result, name) => {
    const aTypoDefinition = typoDefinitions[name as TypographyType];
    result[name as TypographyType] = Object.keys(aTypoDefinition)
      .reduce(
        (serialized, key) => {
          let value = aTypoDefinition[key as keyof typeof aTypoDefinition];
          if (key === 'fontSize') value += 'px'
          const csskey = key.replace(/[A-Z]/, (upper) => '-' + upper.toLowerCase());
          return serialized + `${csskey}: ${value};`
        },
        ''
      );
    return result;
  }, {} as Record<TypographyType, string>);

export const typo = (name: TypographyType) => css`${serializedTypo[name]}`;

export type Color = keyof typeof colors;
export const color = (name: Color) => colors[name];
export const themeColor = (name: keyof DefaultTheme['color']) => (theme: DefaultTheme) => theme.color[name];
