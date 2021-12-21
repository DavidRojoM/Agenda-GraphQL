import { validationRegexStore } from "./validation/validationRegexStore";
import { FormFields } from "../domain/interfaces/form/form.fields.interface";
import { FormFieldsEnum } from "../domain/interfaces/form/form.fields.enum";
import { FormValidation } from "../domain/interfaces/form/form.validation.interface";

export class FormService {
  constructor() {}

  public isFormValid = (fields: FormFields): FormValidation => ({
    [FormFieldsEnum.name]: this.isFieldValid(
      FormFieldsEnum.name,
      fields[FormFieldsEnum.name]
    ),
    [FormFieldsEnum.surname]: this.isFieldValid(
      FormFieldsEnum.surname,
      fields[FormFieldsEnum.surname]
    ),
    [FormFieldsEnum.address]: this.isFieldValid(
      FormFieldsEnum.address,
      fields[FormFieldsEnum.address]
    ),
    [FormFieldsEnum.dni]: this.isFieldValid(
      FormFieldsEnum.dni,
      fields[FormFieldsEnum.dni]
    ),
    [FormFieldsEnum.phone]: this.isFieldValid(
      FormFieldsEnum.phone,
      fields[FormFieldsEnum.phone]
    ),
  });

  private isFieldValid = (field: FormFieldsEnum, value: string): boolean =>
    validationRegexStore[field].test(value);
}
