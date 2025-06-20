import { processImagePath } from '../../utils/imageUtils';

describe('imageUtils', () => {
  describe('processImagePath', () => {
    it('should return a string path for any input', () => {
      const result1 = processImagePath('/images/resources/steel.png');
      const result2 = processImagePath('images/buildings/factory.png');
      
      expect(typeof result1).toBe('string');
      expect(typeof result2).toBe('string');
      expect(result1).toContain('images/resources/steel.png');
      expect(result2).toContain('images/buildings/factory.png');
    });

    it('should handle empty strings', () => {
      const result = processImagePath('');
      expect(typeof result).toBe('string');
    });

    it('should preserve the filename and path structure', () => {
      const input = '/images/resources/steel.png';
      const result = processImagePath(input);
      
      expect(result).toContain('steel.png');
      expect(result).toContain('images/resources');
    });
  });
}); 