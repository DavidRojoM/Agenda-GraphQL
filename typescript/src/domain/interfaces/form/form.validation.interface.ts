import { FormFieldsEnum } from "./form.fields.enum";

export interface FormValidation {
  [FormFieldsEnum.name]: boolean;
  [FormFieldsEnum.surname]: boolean;
  [FormFieldsEnum.address]: boolean;
  [FormFieldsEnum.dni]: boolean;
  [FormFieldsEnum.phone]: boolean;
}
