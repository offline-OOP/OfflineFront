import IAlert from 'src/form/IAlerts';
import FieldValidator from 'src/form/validators/FieldValidator';
import validator from 'src/form/validators/validator';
import ValueRequiredValidationError from 'src/form/errors/ValueRequiredValidationError';
import FieldTypeValidationError from 'src/form/errors/FieldTypeValidationError';
import { date } from 'quasar';

// TODO: Add to I18n
export const tooYoung = 'tooYoung';

export class BirthdayFieldValidator extends FieldValidator {

  async validate(): Promise<IAlert | null> {
    if (!this.hasValue)
      throw new ValueRequiredValidationError();

    if (typeof this.value !== 'string')
      throw new FieldTypeValidationError('string');

    const birthday: Date = new Date(this.value);
    const afterDate: Date = date.subtractFromDate(new Date(), {years: 14});

    if (!validator.isAfter(birthday, afterDate))
      this.addMessage(tooYoung);

    return await super.validate();
  }
}

export default BirthdayFieldValidator;
