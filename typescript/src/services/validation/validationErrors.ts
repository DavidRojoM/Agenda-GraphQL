import { FormFieldsEnum } from "../../domain/interfaces/form/form.fields.enum";

export const validationErrors = {
  [FormFieldsEnum.name]: "Invalid name",
  [FormFieldsEnum.surname]: "Invalid surname",
  [FormFieldsEnum.address]: "Invalid address",
  [FormFieldsEnum.dni]: "Invalid dni",
  [FormFieldsEnum.phone]: "Invalid phone",
};
