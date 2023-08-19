import styled, { DefaultTheme } from "styled-components";
import { typo, themeColor } from "../../utils/style";

export interface TextStyleProps {
  size: keyof DefaultTheme["typography"];
  type?: keyof typeof typeMap;
  color?: keyof DefaultTheme["color"];
}

export default styled.span<TextStyleProps>`
  ${({ size }) => typo(size)};

  display: ${({ type, size }) => {
    if (type !== undefined) return typeMap[type];
    switch (size) {
      case "body":
      case "detail1":
      case "detail2":
      case "detail3":
        return typeMap.inline;
      case "heading1":
      case "heading2":
      case "heading3":
      case "heading4":
        return typeMap.block;
    }
  }};

  color: ${({ color, theme }) => themeColor(color ?? "text")({ theme })};
`;

const typeMap = {
  inline: "inline-block",
  block: "block",
} as const;
