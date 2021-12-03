import IAlert from 'src/form/IAlerts';
import FieldValidator from 'src/form/validators/FieldValidator';
import validator from 'src/form/validators/validator';
import ValueRequiredValidationError from 'src/form/errors/ValueRequiredValidationError';
import FieldTypeValidationError from 'src/form/errors/FieldTypeValidationError';

// TODO: Add to I18n
export const notEmail = 'notEmail';

export class EmailFieldValidator extends FieldValidator {

  async validate(): Promise<IAlert | null> {
    if (!this.hasValue)
      throw new ValueRequiredValidationError();

    if (typeof this.value !== 'string')
      throw new FieldTypeValidationError('string');

    if (!validator.isEmail(this.value, {}))
      this.addMessage(notEmail);

    return await super.validate();
  }
}

export default EmailFieldValidator;
