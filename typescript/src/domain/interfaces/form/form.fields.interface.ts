import { FormFieldsEnum } from "./form.fields.enum";

export interface FormFields {
  [FormFieldsEnum.name]: string;
  [FormFieldsEnum.surname]: string;
  [FormFieldsEnum.address]: string;
  [FormFieldsEnum.dni]: string;
  [FormFieldsEnum.phone]: string;
}
