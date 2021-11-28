import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListRowComponent } from './contact-list-row.component';

describe('ContactListRowComponent', () => {
  let component: ContactListRowComponent;
  let fixture: ComponentFixture<ContactListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
