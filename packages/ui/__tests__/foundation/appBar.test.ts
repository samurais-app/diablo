import { padding } from '@ui/foundation';
import theme from '@ui/components/Theme/defaultTheme';

describe('appBar foundation', () => {
  test('padding', () => {
    const data = padding({ theme: theme.light });
    expect(data).toBe('0.86rem 2.57rem');
  });
});