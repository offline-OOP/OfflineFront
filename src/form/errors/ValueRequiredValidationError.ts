import ValidationError from 'src/form/errors/ValidationError';

export class ValueRequiredValidationError extends ValidationError {
  constructor() {
    super('Значение поля не установлено');
    this.name = 'ValueRequiredValidationError';
  }
}

export default ValueRequiredValidationError;
