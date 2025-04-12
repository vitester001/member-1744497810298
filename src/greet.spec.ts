import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name when no greeting provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name when greeting provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should work with empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should work with empty string greeting', () => {
    expect(greet('John', '')).toBe('Hello, John!');
  });

  it('should handle special characters in name', () => {
    expect(greet('John & Jane')).toBe('Hello, John & Jane!');
  });

  it('should handle special characters in greeting', () => {
    expect(greet('John', 'Howdy!')).toBe('Howdy!, John!');
  });

  it('should handle unicode characters', () => {
    expect(greet('世界', '你好')).toBe('你好, 世界!');
  });
});
