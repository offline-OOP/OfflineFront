import IField from 'src/form/IField';

export interface IFields {
  [key: string]: string | boolean | IField
}

export default IFields;
