import {Vue} from 'vue-class-component';
import IAlert from 'src/form/IAlerts';
import IField, {isIField} from 'src/form/IField';
import IFields from 'src/form/IFields';
import FieldValidator from 'src/form/validators/FieldValidator';
import ISerializedFields from 'src/form/ISerializedFields';

export abstract class Form extends Vue {
  alerts: IAlert[] = []

  private async validateField (key: string, field: IField) {
    const validator: FieldValidator = new field.validator(key, field.value);
    const report: IAlert | null = await validator.validate();

    if (report !== null)
      this.alerts.push(report);
  }

  async validateForm (fields: IFields): Promise<void> {
    for (const key in fields) {
      if (!fields.hasOwnProperty(key))
        continue;

      const field: string | boolean | IField = fields[key];

      if (isIField(field))
        await this.validateField(key, field);
    }
  }

  serializeFields (fields: IFields): ISerializedFields {
    const serializedFields: ISerializedFields = {};

    for (const key in fields) {
      if (!fields.hasOwnProperty(key))
        continue;

      const field: string | boolean | IField = fields[key];

      if (isIField(field))
        serializedFields[key] = field.value;
      else
        serializedFields[key] = field;
    }

    return serializedFields;
  }

  async submit (fields: IFields): Promise<void> {
    this.alerts.splice(0, this.alerts.length);
    await this.validateForm(fields);

    if (this.alerts.length === 0) {
      const serializedFields = this.serializeFields(fields);
      this.$emit('form-submit', serializedFields);
    }
  }
}

export default Form;
