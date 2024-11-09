import { AppConfig } from './AppConfig';
import { getI18nPath } from './Helpers';

describe('Helpers', () => {
  describe('getI18nPath function', () => {
    it('should not change the path for default language', () => {
      const url = '/random-url';
      const locale = AppConfig.defaultLocale;

      expect(getI18nPath(url, locale)).toBe(url);
    });

    it('should prepend the locale to the path for non-default language (en)', () => {
      const url = '/random-url';
      const locale = 'en';

      expect(getI18nPath(url, locale)).toMatch(/^\/en/);
    });

    it('should prepend the locale to the path for non-default language (pt-br)', () => {
      const url = '/random-url';
      const locale = 'pt-br';

      expect(getI18nPath(url, locale)).toMatch(/^\//);
    });
  });
});
