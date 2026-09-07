import { color } from '../utils/color.js';
import { KEYWORD_MAP, THEME_MAP } from './highlighter.config.js';
import type {
  CodeHighlightOptions,
  CodeHighlightSource,
  CodeLanguage,
  CodeThemeDetail,
} from './highlighter.type.js';

export class Highlighter {
  static isLanguageSupported(language: string): language is CodeLanguage {
    return language in KEYWORD_MAP;
  }

  static isColorSupported(): boolean {
    return Boolean(process.stdout.isTTY && !process.env['NO_COLOR']);
  }

  private static escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  static highlight(payload: CodeHighlightSource, options?: CodeHighlightOptions): string {
    const { content = '', language = 'ts' } = payload;
    const { utilityNames = [], theme = 'vs-code-dark-modern', output = 'terminal' } = options ?? {};

    if (theme === 'none') {
      return content;
    }

    if (!content.trim().length) {
      return content.trim();
    }

    const names = utilityNames.length ? utilityNames.map(this.escapeRegExp).join('|') : '(?!)';
    const colors: CodeThemeDetail = typeof theme === 'string' ? THEME_MAP[theme] : theme;

    if (language === 'html' && output === 'html') {
      return this.highlightHtml(content, colors);
    }

    const languageConfig = KEYWORD_MAP[language];
    const comments = languageConfig.comments.join('|');
    const keywords = languageConfig.keywords.map(this.escapeRegExp).join('|');
    const builtInTypes = languageConfig.types.map(this.escapeRegExp).join('|') || '(?!)';
    const commands = languageConfig.commands?.map(this.escapeRegExp).join('|') || '(?!)';
    const bashOption =
      language === 'bash' ? '(?:--[A-Za-z][\\w-]*|-[A-Za-z])(?![A-Za-z0-9_-])' : '(?!)';
    const tokenPattern = new RegExp(
      `(${comments}|"(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*'|\\x60(?:\\\\.|[^\\x60\\\\])*\\x60)|\\b(${names})\\b|\\b(${keywords})\\b|\\b(${commands})\\b|(${bashOption})|\\b(\\d+(?:\\.\\d+)?)\\b|\\b(${builtInTypes})\\b|\\b([A-Z][A-Za-z0-9_$]*)\\b|(=>)|\\b([A-Za-z_$][\\w$]*)(?=\\s*\\()|\\b([A-Za-z_$][\\w$]*)\\b`,
      'g',
    );

    return content.replace(
      tokenPattern,
      (
        token: string,
        stringLiteral?: string,
        utilityName?: string,
        keyword?: string,
        command?: string,
        option?: string,
        numberLiteral?: string,
        typeName?: string,
        namedType?: string,
        arrow?: string,
        identifier?: string,
        variable?: string,
      ) => {
        if (stringLiteral) {
          if (new RegExp(`^(?:${comments})$`).test(token)) {
            return this.renderToken('comment', colors.comment, token, output);
          }
          return this.renderToken('string', colors.string, token, output);
        }

        if (utilityName) {
          return this.renderToken('utility', colors.utility, token, output);
        }

        if (keyword) {
          return this.renderToken('keyword', colors.keyword, token, output);
        }

        if (command) {
          return this.renderToken('method', colors.method, token, output);
        }

        if (option) {
          return this.renderToken('operator', colors.operator, token, output);
        }

        if (numberLiteral) {
          return this.renderToken('number', colors.number, token, output);
        }

        if (typeName) {
          return this.renderToken('type', colors.type, token, output);
        }

        if (namedType) {
          return this.renderToken('type', colors.type, token, output);
        }

        if (arrow) {
          return this.renderToken('operator', colors.operator, token, output);
        }

        if (identifier) {
          return this.renderToken('method', colors.method, token, output);
        }

        if (variable) {
          return this.renderToken('variable', colors.variable, token, output);
        }

        return token;
      },
    );
  }

  private static highlightHtml(content: string, colors: CodeThemeDetail): string {
    const htmlTokenPattern = /<!--[\s\S]*?-->|<[^>]*>/g;
    let result = '';
    let lastIndex = 0;

    for (const match of content.matchAll(htmlTokenPattern)) {
      result += this.escapeHtml(content.slice(lastIndex, match.index));
      const token = match[0];

      if (token.startsWith('<!--')) {
        result += this.renderToken('comment', colors.comment, token, 'html');
      } else {
        result += this.highlightHtmlTag(token, colors);
      }

      lastIndex = (match.index ?? 0) + token.length;
    }

    return result + this.escapeHtml(content.slice(lastIndex));
  }

  private static highlightHtmlTag(tag: string, colors: CodeThemeDetail): string {
    const tagPattern = /^(<\/?)([A-Za-z][\w:-]*)([\s\S]*?)(\/?>)$/;
    const match = tag.match(tagPattern);

    if (!match) {
      return this.escapeHtml(tag);
    }

    const [, prefix, tagName, attributes, suffix] = match;
    let highlightedAttributes = '';
    let lastIndex = 0;
    const attributePattern = /([:\w-]+)(\s*=\s*)("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g;

    for (const attribute of attributes.matchAll(attributePattern)) {
      highlightedAttributes += this.escapeHtml(attributes.slice(lastIndex, attribute.index));
      highlightedAttributes += this.renderToken('method', colors.method, attribute[1], 'html');
      highlightedAttributes += this.escapeHtml(attribute[2]);
      highlightedAttributes += this.renderToken('string', colors.string, attribute[3], 'html');
      lastIndex = (attribute.index ?? 0) + attribute[0].length;
    }

    highlightedAttributes += this.escapeHtml(attributes.slice(lastIndex));

    return `${this.escapeHtml(prefix)}${this.renderToken('keyword', colors.keyword, tagName, 'html')}${highlightedAttributes}${this.escapeHtml(suffix)}`;
  }

  private static renderToken(
    tokenType: keyof CodeThemeDetail,
    tokenColor: CodeThemeDetail[keyof CodeThemeDetail],
    token: string,
    output: 'terminal' | 'html',
  ): string {
    if (output === 'terminal') {
      return color(tokenColor, token);
    }

    return `<span class="token-${tokenType}">${this.escapeHtml(token)}</span>`;
  }

  private static escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}
