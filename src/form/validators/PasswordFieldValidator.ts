import IAlert from 'src/form/IAlerts';
import FieldValidator from 'src/form/validators/FieldValidator';
import ValueRequiredValidationError from 'src/form/errors/ValueRequiredValidationError';
import FieldTypeValidationError from 'src/form/errors/FieldTypeValidationError';

const passwordRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;

// TODO: Add to i18n
export const restrictionsPassword = 'restrictionsPassword';

export class PasswordFieldValidator extends FieldValidator {

  async validate(): Promise<IAlert | null> {
    if (!this.hasValue)
      throw new ValueRequiredValidationError();

    if (typeof this.value !== 'string')
      throw new FieldTypeValidationError('string');

    passwordRegExp.lastIndex = 0;

    if (!passwordRegExp.test(this.value))
      this.addMessage(restrictionsPassword);

    return await super.validate();
  }
}

export default PasswordFieldValidator;
