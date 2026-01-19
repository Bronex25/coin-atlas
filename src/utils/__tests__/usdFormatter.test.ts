import { describe, it, expect } from 'vitest';
import { formatToUsd } from '../usdFormatter';

describe('formatToUsd', () => {
  it('formats number to USD', () => {
    expect(formatToUsd('1000')).toBe('$1,000.00');
  });

  it('handles zero', () => {
    expect(formatToUsd('0')).toBe('$0');
  });
});
