import IAlert from 'src/form/IAlerts';
import FieldValidator from 'src/form/validators/FieldValidator';
import validator from 'src/form/validators/validator';
import ValueRequiredValidationError from 'src/form/errors/ValueRequiredValidationError';
import FieldTypeValidationError from 'src/form/errors/FieldTypeValidationError';

// TODO: Add to i18n
export const alphanumbericNickname = 'alphanumbericNickname';
export const longNickname = 'longNickname';

export class NicknameFieldValidator extends FieldValidator {

  async validate(): Promise<IAlert | null> {
    if (!this.hasValue)
      throw new ValueRequiredValidationError();

    if (typeof this.value !== 'string')
      throw new FieldTypeValidationError('string');

    if (!validator.isAlphanumeric(this.value))
      this.addMessage(alphanumbericNickname);

    if (!validator.isLength(this.value, 2, 256))
      this.addMessage(longNickname);

    return await super.validate();
  }
}

export default NicknameFieldValidator;
