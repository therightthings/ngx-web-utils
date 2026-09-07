import type { CodeTheme, CodeThemeDetail } from '../highlighter/highlighter.type.js';

export type DocGeneratorConfig = {
  readmePath: string;
  outputPath: string;
  packageJsonPath?: string;
  title?: string;
  codeTheme?: CodeTheme | CodeThemeDetail | 'none';
};
