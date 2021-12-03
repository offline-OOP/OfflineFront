import IAlert from 'src/form/IAlerts';
import FieldValidator from 'src/form/validators/FieldValidator';
import validator from 'src/form/validators/validator';
import ValueRequiredValidationError from 'src/form/errors/ValueRequiredValidationError';
import FieldTypeValidationError from 'src/form/errors/FieldTypeValidationError';

// TODO: Add to i18n
export const lengthName = 'lengthName';
export const wordCountName = 'wordCountName';

export class NameFieldValidator extends FieldValidator {

  async validate(): Promise<IAlert | null> {
    if (!this.hasValue)
      throw new ValueRequiredValidationError();

    if (typeof this.value !== 'string')
      throw new FieldTypeValidationError('string');

    if (!validator.isLength(this.value, 2, 256))
      this.addMessage(lengthName);

    if (this.value.split(' ').length <= 1)
      this.addMessage(wordCountName);

    return await super.validate();
  }
}

export default NameFieldValidator;
