import ValidationError from 'src/form/errors/ValidationError';

export class FieldTypeValidationError extends ValidationError {
  type: string | null = null;

  constructor(type: string) {
    super(`Поле должно иметь тип: ${type}`);
    this.name = 'FieldTypeValidationError';
    this.type = type;
  }
}

export default FieldTypeValidationError;
