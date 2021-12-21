import { MainController } from "./controllers/main.controller";
import { ContactsService } from "./services/contacts.service";
import { ContactsRepository } from "./services/repository/contacts.repository";
import { FormService } from "./services/form.service";
import { TableService } from "./services/table.service";
import { FormView } from "./views/form.view";
import { TableView } from "./views/table.view";

new MainController(
  new ContactsService(new ContactsRepository()),
  new FormService(),
  new TableService(),
  new FormView(),
  new TableView()
);
