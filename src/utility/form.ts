import {Vue} from 'vue-class-component';

export interface IAlert {
  id: string
  messages: string[]
}
export interface IField {
  value: string | boolean;
  validator(): string[] | null;
}

function isIField (object: string | boolean | IField): object is IField {
  return typeof object === 'object' && object !== null && object.hasOwnProperty('validator');
}

export interface IFields {
  [key: string]: string | boolean | IField
}


export abstract class Form extends Vue {
  alerts: IAlert[] = []

  validate (fields: IFields): void {
    this.alerts = [];

    for (const key in fields) {
      if (fields.hasOwnProperty(key) && isIField(fields[key])) {
        const messages = fields[key].validator(); 

        if (messages)
          this.alerts.push({
            id: key,
            messages
          });
      }
    }
  }

  submit (fields: IFields): void {
    this.validate(fields);

    if (this.alerts.length === 0)
      this.$emit('submit', fields);
  }
}
