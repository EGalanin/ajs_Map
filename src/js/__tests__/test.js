import ErrorRepository from '../app';

const testError = new ErrorRepository();

test('возвращает ошибку', () => {
  expect(() => testError.translate(11)).toThrow('Unknown error');
});

test.each([
  [1, 'first error'],
  [2, 'second error'],
  [3, 'third error'],
  [4, 'fourth error'],
])('получить текст ошибки', (code, expected) => {
  expect(testError.translate(code)).toEqual(expected);
});
