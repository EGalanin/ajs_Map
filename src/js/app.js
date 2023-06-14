export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'first error'],
      [2, 'second error'],
      [3, 'third error'],
      [4, 'fourth error'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error');
    } else {
      return this.errors.get(code);
    }
  }
}
