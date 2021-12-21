import { ContactsDto } from "../../domain/dto/contacts.dto.interface";

export class ContactsRepository {
  public loadAll = (): Promise<ContactsDto> => {
    return fetch("./mock/mock.json")
      .then((data) => data.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  };
}
