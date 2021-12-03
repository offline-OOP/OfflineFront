import ValidationError from 'src/form/errors/ValidationError';

export class KeyRequiredValidationError extends ValidationError {
  constructor() {
    super('Ключ не установлен');
    this.name = 'KeyRequiredValidationError';
  }
}

export default KeyRequiredValidationError;
