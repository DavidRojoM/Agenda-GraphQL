import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectContactById } from '../../../state/selectors/contacts.selector';
import { Contact } from '../../domain/models/contact';
import { MyErrorStateMatcher } from '../utils/ErrorStateMatcher';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public contact!: Contact;
  @Input() public action: any;
  @Input() public editable: boolean = true;
  matcher!: MyErrorStateMatcher;

  public form = this.fb.group({
    name: new FormControl('', [
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ',\.\-]+$/),
      Validators.minLength(3),
      Validators.maxLength(255),
      Validators.required,
    ]),
    surname: new FormControl('', [
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ',\.\-]+$/),
      Validators.minLength(3),
      Validators.maxLength(255),
      Validators.required,
    ]),
    dni: new FormControl('', [
      Validators.pattern(/^[0-9]{8}\w$/),
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.pattern(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ/ ',\.\-]+$/),
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255),
    ]),
    phone: new FormControl('', [
      Validators.pattern(/^(0034|\+34)?[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/),
      Validators.required,
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.select(selectContactById(id)).subscribe((contact) => {
        this.contact = contact as Contact;
        this.fillForm(contact as Contact);
      });
    }
  }

  private fillForm({ name, surname, dni, address, phone }: Contact) {
    this.form.get('name')?.setValue(name);
    this.form.get('surname')?.setValue(surname);
    this.form.get('dni')?.setValue(dni);
    this.form.get('address')?.setValue(address);
    this.form.get('phone')?.setValue(phone);
  }

  sendAction() {
    this.action(this.form.value as Contact);
  }
}
