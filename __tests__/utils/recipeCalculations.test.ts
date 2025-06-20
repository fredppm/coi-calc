import {
  getNormalizedAmount,
  getDisplayTime,
  roundForDisplay,
  clampMultiplier,
  getNormalizedAmountForBalance,
} from '../../utils/recipeCalculations';

describe('recipeCalculations', () => {
  describe('roundForDisplay', () => {
    it('should round numbers to 1 decimal place', () => {
      expect(roundForDisplay(1.234)).toBe(1.2);
      expect(roundForDisplay(1.567)).toBe(1.6);
      expect(roundForDisplay(1.0)).toBe(1);
      expect(roundForDisplay(0)).toBe(0);
    });

    it('should handle edge cases', () => {
      expect(roundForDisplay(0.05)).toBe(0.1);
      expect(roundForDisplay(0.04)).toBe(0);
      expect(roundForDisplay(-1.25)).toBe(-1.2);
    });
  });

  describe('clampMultiplier', () => {
    it('should clamp values between 1 and 50', () => {
      expect(clampMultiplier(0.5)).toBe(1);
      expect(clampMultiplier(25)).toBe(25);
      expect(clampMultiplier(100)).toBe(50);
      expect(clampMultiplier(-5)).toBe(1);
    });

    it('should handle edge values', () => {
      expect(clampMultiplier(1)).toBe(1);
      expect(clampMultiplier(50)).toBe(50);
    });
  });

  describe('getDisplayTime', () => {
    it('should show normalized time when enabled', () => {
      expect(getDisplayTime(30, true)).toBe('60s (normalized)');
      expect(getDisplayTime(15, true)).toBe('60s (normalized)');
      expect(getDisplayTime(60, true)).toBe('60s (normalized)');
    });

    it('should show original time when disabled', () => {
      expect(getDisplayTime(30, false)).toBe('30s');
      expect(getDisplayTime(15, false)).toBe('15s');
      expect(getDisplayTime(60, false)).toBe('60s');
    });
  });

  describe('getNormalizedAmount', () => {
    it('should normalize amounts when enabled', () => {
      expect(getNormalizedAmount(10, 30, true, 1)).toBe(20); // 10 * (60/30) * 1
      expect(getNormalizedAmount(5, 15, true, 2)).toBe(40); // 5 * (60/15) * 2
      expect(getNormalizedAmount(12, 60, true, 1)).toBe(12); // 12 * (60/60) * 1
    });

    it('should not normalize when disabled', () => {
      expect(getNormalizedAmount(10, 30, false, 1)).toBe(10);
      expect(getNormalizedAmount(5, 15, false, 2)).toBe(10); // 5 * 2
      expect(getNormalizedAmount(12, 60, false, 3)).toBe(36); // 12 * 3
    });

    it('should apply multiplier correctly', () => {
      expect(getNormalizedAmount(10, 30, true, 2)).toBe(40); // 10 * (60/30) * 2
      expect(getNormalizedAmount(10, 30, false, 0.5)).toBe(5); // 10 * 0.5
    });
  });

  describe('getNormalizedAmountForBalance', () => {
    it('should always normalize for balance calculations', () => {
      expect(getNormalizedAmountForBalance(10, 30, 1)).toBe(20); // 10 * (60/30) * 1
      expect(getNormalizedAmountForBalance(5, 15, 2)).toBe(40); // 5 * (60/15) * 2
      expect(getNormalizedAmountForBalance(12, 60, 1)).toBe(12); // 12 * (60/60) * 1
    });

    it('should handle edge cases', () => {
      expect(getNormalizedAmountForBalance(0, 30, 1)).toBe(0);
      expect(getNormalizedAmountForBalance(10, 0, 1)).toBe(Infinity); // Division by zero
      expect(getNormalizedAmountForBalance(10, 30, 0)).toBe(0);
    });
  });
}); 