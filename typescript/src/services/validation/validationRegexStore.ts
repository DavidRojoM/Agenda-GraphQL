import { FormFieldsEnum } from "../../domain/interfaces/form/form.fields.enum";

export const validationRegexStore = {
  [FormFieldsEnum.name]: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ',\.\-]+$/,
  [FormFieldsEnum.surname]: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ',\.\-]+$/,
  [FormFieldsEnum.address]: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ/ ',\.\-]+$/,
  [FormFieldsEnum.dni]: /^[0-9]{8}\w$/,
  [FormFieldsEnum.phone]: /^(0034|\+34)?[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/,
};
