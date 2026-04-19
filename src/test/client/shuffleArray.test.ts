import { shuffleArray } from '../../utils/shuffleArray';
import { describe, expect, it } from 'vitest';

describe('#FooterTypewriter', () => {
  it('shuffles the array', () => {
    const originalArray = ['one', 'two', 'three', 'four', 'five'];
    const shuffledArray = shuffleArray(originalArray);

    expect(shuffledArray).toHaveLength(originalArray.length);
    expect(shuffledArray).not.toBe(originalArray);
    expect(originalArray).toEqual(['one', 'two', 'three', 'four', 'five']);
    expect([...shuffledArray].sort()).toEqual([...originalArray].sort());
  });
});
 