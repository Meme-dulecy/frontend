const typography = {
  heading1: {
    fontSize: 48,
    fontWeight: "bold",
    lineHeight: 1.7,
    fontStyle: "normal",
  },
  heading2: {
    fontSize: 36,
    fontWeight: "bold",
    lineHeight: 1.7,
    fontStyle: "normal",
  },
  heading3: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 1.7,
    fontStyle: "normal",
  },
  heading4: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 1.7,
    fontStyle: "normal",
  },
  body: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 1.6,
    fontStyle: "normal",
  },
  detail1: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 1.6,
    fontStyle: "normal",
  },
  detail2: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 1.6,
    fontStyle: "normal",
  },
  detail3: {
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 1.6,
    fontStyle: "normal",
  },
} as const;

export type Typography = typeof typography;

export default typography;
