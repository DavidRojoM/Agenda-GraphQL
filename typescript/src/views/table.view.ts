import { Contact } from "../domain/interfaces/contact.interface";
import { createElement, getElement } from "./common/utils/dom-functions";
import { domElements } from "./dom-elements";
import { Handlers } from "../domain/interfaces/handlers.interface";
import { Actions } from "../domain/interfaces/actions/actions.enum";

export class TableView {
  public renderTable(contacts: Contact[], handlers: Handlers) {
    this.renderTableHeader();
    this.renderContacts(contacts, handlers);
    getElement("addButton").addEventListener("click", () => {
      handlers.add();
    });
  }

  public renderContacts(contacts: Contact[], handlers: Handlers) {
    getElement("tableBody").innerHTML = "";
    for (const contact of contacts) {
      getElement("tableBody").appendChild(
        this.renderContact(contact, handlers)
      );
    }
  }

  private renderContact(
    contact: Contact,
    handlers: Handlers
  ): HTMLTableRowElement {
    const actions = [Actions.details, Actions.edit, Actions.remove];
    const iconForAction = {
      [Actions.details]: ["fas", "fa-eye"],
      [Actions.edit]: ["fas", "fa-edit"],
      [Actions.remove]: ["fas", "fa-trash-alt"],
    };

    const row = createElement("tr", "table-row") as HTMLTableRowElement;
    for (const key of Object.keys(contact)) {
      if (key === "id") {
        row.id = contact[key] as string;
      } else {
        row.appendChild(
          createElement("td", "table-cell", contact[key as keyof Contact])
        );
      }
    }

    const actionsTableCell = createElement("td", "table-cell");
    for (const action of actions) {
      const button = createElement("button", `action-button`);
      button.addEventListener("click", (event) => {
        const id = (event.currentTarget as any).parentNode.parentNode.id;
        handlers[action](id);
      });
      const icon = createElement("i");
      icon.classList.add(...iconForAction[action]);
      button.appendChild(icon);
      actionsTableCell.appendChild(button);
    }
    row.appendChild(actionsTableCell);
    return row;
  }

  private renderTableHeader() {
    domElements.$main.innerHTML =
      "<button class='add-button' id='addButton'>Add</button>" +
      '    <table class="contacts-table">' +
      "        <thead>" +
      "            <tr>" +
      "                <th>" +
      "                    Name" +
      "                </th>" +
      "                <th>" +
      "                   Surname" +
      "                </th>" +
      "                <th>" +
      "                   Address" +
      "                </th>" +
      "                <th>" +
      "                   Dni" +
      "                </th>" +
      "                <th>" +
      "                   Phone" +
      "                </th>" +
      "                <th>" +
      "                   Actions" +
      "                </th>" +
      "           </tr>" +
      "        </thead>" +
      '        <tbody id="tableBody">' +
      "        </tbody>" +
      "     </table>";
  }
}
