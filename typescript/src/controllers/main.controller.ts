import { FormService } from "../services/form.service";
import { TableService } from "../services/table.service";
import { FormView } from "../views/form.view";
import { TableView } from "../views/table.view";
import { ContactsService } from "../services/contacts.service";
import { Handlers } from "../domain/interfaces/handlers.interface";
import { Contact } from "../domain/interfaces/contact.interface";
import { FormFieldsEnum } from "../domain/interfaces/form/form.fields.enum";

export class MainController {
  private readonly mainHandlers!: Handlers;
  constructor(
    private readonly contactsService: ContactsService,
    private readonly formService: FormService,
    private readonly tableService: TableService,
    private readonly formView: FormView,
    private readonly tableView: TableView
  ) {
    this.mainHandlers = {
      add: this.onAddHandler,
      details: this.onDetailsHandler,
      edit: this.onEditHandler,
      remove: this.onRemoveHandler,
      navigateBack: this.onNavigateBackHandler,
    };
    this.init();
  }

  private init() {
    this.contactsService.loadAll().then(({ contacts }) => {
      this.contactsService.contacts = contacts;
      this.tableView.renderTable(contacts, this.mainHandlers);
    });
  }
  ///////////////////////////////////////////////////////// MAIN HANDLERS
  onAddHandler = () => {
    const newContact = this.contactsService.generateNewContact();
    this.formView.renderForm(
      newContact,
      { editable: true },
      this.mainHandlers.navigateBack,
      this.onAddFormHandler
    );
  };
  onDetailsHandler = (id: string) => {
    const contact = this.contactsService.findOneById(id) as Contact;
    this.formView.renderForm(
      contact,
      {
        editable: false,
      },
      this.mainHandlers.navigateBack
    );
  };
  onEditHandler = (id: string) => {
    const contact = this.contactsService.findOneById(id) as Contact;
    this.formView.renderForm(
      contact,
      { editable: true },
      this.mainHandlers.navigateBack,
      this.onEditFormHandler
    );
  };
  onRemoveHandler = (id: string) => {
    const newContacts = this.contactsService.removeOneById(id);
    this.tableView.renderContacts(newContacts, this.mainHandlers);
  };
  onNavigateBackHandler = () => {
    const contacts = this.contactsService.findAll();
    this.tableView.renderTable(contacts, this.mainHandlers);
  };
  ////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////FORM HANDLERS

  onAddFormHandler = (contact: Contact) => {
    const validation = this.formService.isFormValid({
      [FormFieldsEnum.name]: contact.name,
      [FormFieldsEnum.surname]: contact.surname,
      [FormFieldsEnum.address]: contact.address,
      [FormFieldsEnum.dni]: contact.dni,
      [FormFieldsEnum.phone]: contact.phone,
    });
    if (!Object.values(validation).includes(false)) {
      const newContacts = this.contactsService.addOne(contact);
      this.tableView.renderTable(newContacts, this.mainHandlers);
    } else {
      this.formView.renderErrors(validation);
    }
  };
  onEditFormHandler = (contact: Contact) => {
    const validation = this.formService.isFormValid({
      [FormFieldsEnum.name]: contact.name,
      [FormFieldsEnum.surname]: contact.surname,
      [FormFieldsEnum.address]: contact.address,
      [FormFieldsEnum.dni]: contact.dni,
      [FormFieldsEnum.phone]: contact.phone,
    });
    if (!Object.values(validation).includes(false)) {
      const newContacts = this.contactsService.editOne(contact);
      this.tableView.renderTable(newContacts, this.mainHandlers);
    } else {
      this.formView.renderErrors(validation);
    }
  };

  ////////////////////////////////////////////////////////////
}
