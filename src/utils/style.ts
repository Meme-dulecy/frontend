import { css } from 'styled-components';
import { default as typoDefinitions } from '../theme/typography';
import colors from '../theme/colors';

export type Typography = keyof typeof typoDefinitions;
export const typography = (name: Typography) => css`${serializedTypo[name]}`;

const serializedTypo = Object.keys(typoDefinitions)
  .reduce((result, name) => {
    const aTypoDefinition = typoDefinitions[name as Typography];
    result[name as Typography] = Object.keys(aTypoDefinition)
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
  }, {} as Record<Typography, string>);

export const typo = (name: Typography) => css`${serializedTypo[name]}`;

export type Color = keyof typeof colors;
