import FieldValidator from 'src/form/validators/FieldValidator';

export interface IField {
  value: string | boolean;
  validator: typeof FieldValidator;
}

export function isIField (object: string | boolean | IField): object is IField {
  return typeof object === 'object' && object !== null && object.hasOwnProperty('validator');
}

export default IField;
