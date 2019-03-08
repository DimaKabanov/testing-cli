import square from '../src';

describe('Math', () => {
  test('Correct square', () => {
    expect(square(2)).toBe(4);
  });
});
