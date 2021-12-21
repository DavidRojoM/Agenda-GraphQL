import { Contact } from "../domain/interfaces/contact.interface";
import { FormOptions } from "../domain/interfaces/form/form.options.interface";
import { domElements } from "./dom-elements";
import { createElement, getElement } from "./common/utils/dom-functions";
import { FormValidation } from "../domain/interfaces/form/form.validation.interface";
import { validationErrors } from "../services/validation/validationErrors";
import { FormFieldsEnum } from "../domain/interfaces/form/form.fields.enum";

export class FormView {
  //TODO: REFACTOR
  public renderForm(
    contact: Contact,
    options: FormOptions = {
      editable: true,
    },
    navigateBackHandler: Function,
    handler?: Function
  ) {
    domElements.$main.innerHTML = "";

    const backButton = createElement("button", "", "Back");
    backButton.addEventListener("click", () => {
      navigateBackHandler();
    });
    domElements.$main.appendChild(backButton);

    const form = createElement("form", "");
    if (options.editable && handler) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        handler({
          id: contact.id,
          name: nameInput.value,
          surname: surnameInput.value,
          address: addressInput.value,
          dni: dniInput.value,
          phone: phoneInput.value,
        });
      });
    }
    const nameInput = createElement("input") as HTMLInputElement;
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    form.appendChild(nameInput);

    const nameError = createElement("span", "validation-error", "");
    nameError.id = "name";
    form.appendChild(nameError);

    const surnameInput = createElement("input") as HTMLInputElement;
    surnameInput.type = "text";
    surnameInput.placeholder = "Surname";
    form.appendChild(surnameInput);

    const surnameError = createElement("span", "validation-error", "");
    surnameError.id = "surname";
    form.appendChild(surnameError);

    const addressInput = createElement("input") as HTMLInputElement;
    addressInput.type = "text";
    addressInput.placeholder = "Address";
    form.appendChild(addressInput);

    const addressError = createElement("span", "validation-error", "");
    addressError.id = "address";
    form.appendChild(addressError);

    const dniInput = createElement("input") as HTMLInputElement;
    dniInput.type = "text";
    dniInput.placeholder = "Dni";
    form.appendChild(dniInput);

    const dniError = createElement("span", "validation-error", "");
    dniError.id = "dni";
    form.appendChild(dniError);

    const phoneInput = createElement("input") as HTMLInputElement;
    phoneInput.type = "text";
    phoneInput.placeholder = "Phone";
    form.appendChild(phoneInput);

    const phoneError = createElement("span", "validation-error", "");
    phoneError.id = "phone";
    form.appendChild(phoneError);

    if (options.editable) {
      const sendButton = createElement(
        "button",
        "",
        "Send"
      ) as HTMLButtonElement;
      sendButton.type = "submit";
      form.appendChild(sendButton);
      const clearButton = createElement(
        "button",
        "",
        "Clear"
      ) as HTMLButtonElement;
      clearButton.type = "reset";
      form.appendChild(clearButton);
    }

    if (!options.editable) {
      nameInput.disabled = true;
      surnameInput.disabled = true;
      addressInput.disabled = true;
      dniInput.disabled = true;
      phoneInput.disabled = true;
    }

    nameInput.value = contact.name;
    surnameInput.value = contact.surname;
    addressInput.value = contact.address;
    dniInput.value = contact.dni;
    phoneInput.value = contact.phone;

    domElements.$main.appendChild(form);
  }

  renderErrors(validation: FormValidation) {
    this.clearErrors();
    for (const [field, isValid] of Object.entries(validation)) {
      if (!isValid) {
        const errorMessage = getElement(field);
        errorMessage.innerText =
          validationErrors[field as keyof typeof FormFieldsEnum];
      }
    }
  }

  private clearErrors() {
    getElement("name").innerText = "";
    getElement("surname").innerText = "";
    getElement("address").innerText = "";
    getElement("dni").innerText = "";
    getElement("phone").innerText = "";
  }
}
