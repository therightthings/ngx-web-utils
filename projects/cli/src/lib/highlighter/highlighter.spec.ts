import { describe, expect, it } from 'vitest';

import { Highlighter } from './highlighter.js';

describe('Highlighter', () => {
  it('checks supported languages', () => {
    expect(Highlighter.isLanguageSupported('ts')).toBe(true);
    expect(Highlighter.isLanguageSupported('bash')).toBe(true);
    expect(Highlighter.isLanguageSupported('python')).toBe(false);
  });

  it('highlights TypeScript and Bash source as HTML', () => {
    const typescript = Highlighter.highlight(
      { content: 'BrowserCamera.turnOn();', language: 'ts' },
      { output: 'html', utilityNames: ['BrowserCamera'] },
    );
    const bash = Highlighter.highlight(
      { content: 'npm install @trt-web/browser --save', language: 'bash' },
      { output: 'html' },
    );

    expect(typescript).toContain('token-utility');
    expect(typescript).toContain('token-method');
    expect(bash).toContain('token-method');
    expect(bash).toContain('token-operator');
    expect(bash).not.toContain('token-operator">-web');
  });

  it('highlights comments according to each language configuration', () => {
    const bash = Highlighter.highlight(
      { content: '# install the package\nnpm test', language: 'bash' },
      { output: 'html' },
    );
    const typescript = Highlighter.highlight(
      { content: '// note\nconst value = 1;', language: 'ts' },
      { output: 'html' },
    );
    const html = Highlighter.highlight(
      { content: '<!-- note -->\n<div></div>', language: 'html' },
      { output: 'html' },
    );

    expect(bash).toContain('<span class="token-comment"># install the package</span>');
    expect(typescript).toContain('<span class="token-comment">// note</span>');
    expect(html).toContain('<span class="token-comment">&lt;!-- note --&gt;</span>');
  });
});
