declare module 'typography' {
  interface BaseLine {
    fontSize: string;
    lineHeight: string;
  }

  export interface VerticalRhythm {
    rhythm: (value: number) => string;
    scale: (value: number) => BaseLine;
    adjustFontSizeTo: (value?: number | string) => object;
    linesForFontSize: (fontSize: number) => number;
    establishBaseline: () => BaseLine;
  }

  export interface GoogleFont {
    name: string;
    styles: string[];
  }

  export interface TypographyOptions {
    baseFontSize?: string;
    baseLineHeight?: number;
    scaleRatio?: number;
    googleFonts?: GoogleFont[];
    headerFontFamily?: string[];
    bodyFontFamily?: string[];
    headerColor?: string;
    bodyColor?: string;
    headerWeight?: number | string;
    bodyWeight?: number | string;
    boldWeight?: number | string;
    blockMarginBottom?: number;
    includeNormalize?: boolean;
    overrideStyles?: (
      VerticalRhythm: VerticalRhythm,
      options: TypographyOptions,
      styles: any
    ) => object;
    overrideThemeStyles?: (
      VerticalRhythm: VerticalRhythm,
      options: TypographyOptions,
      styles: any
    ) => object;
    plugins?: any[];
  }

  class Typography {
    constructor(opts: TypographyOptions);
    options: TypographyOptions;
    createStyles(): string;
    toJSON(): object;
    injectStyles(): void;
    rhythm: VerticalRhythm['rhythm'];
    scale: VerticalRhythm['scale'];
    adjustFontSizeTo: VerticalRhythm['adjustFontSizeTo'];
    linesForFontSize: VerticalRhythm['linesForFontSize'];
    establishBaseline: VerticalRhythm['establishBaseline'];
  }

  export default Typography;
}
