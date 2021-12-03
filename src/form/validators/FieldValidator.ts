import IAlert from 'src/form/IAlerts';
import {KeyRequiredValidationError} from 'src/form/errors/KeyRequiredValidationError';

export class FieldValidator {
  readonly key: string | null = null
  readonly value: string | boolean | null = null
  private messages: string[] = []

  constructor(key: string | null, value: string | boolean) {
    this.key = key;
    this.value = value;
  }

  get hasValue (): boolean {
    return this.value !== null;
  }

  addMessage (message: string) {
    this.messages.push(message);
  }

  private report (): Promise<IAlert | null> {

    if (this.messages.length === 0)
      return new Promise((resolve) => {
        resolve(null);
      });


    if (this.key !== null) {
      const report = {
        key: this.key,
        messages: this.messages
      };

      return new Promise((resolve) => {
        resolve(report);
      });
    }
    throw new KeyRequiredValidationError();
  }

  async validate (): Promise<IAlert | null> {
    return await this.report();
  }
}

export default FieldValidator;
