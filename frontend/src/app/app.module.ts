import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { UpdateComponent } from './pages/update/update.component';
import { DetailsComponent } from './pages/details/details.component';
import { ContactListComponent } from './pages/home/contact-list/contact-list.component';
import { FormComponent } from './shared/components/form/form.component';
import { MaterialModule } from './modules/material/material.module';
import { TableComponent } from './pages/home/contact-list/table/table.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './state/effects/contacts.effects';
import { HttpClientModule } from '@angular/common/http';
import { ROOT_REDUCERS } from './state/app.state';
import { ReactiveFormsModule } from '@angular/forms';
import { AppState } from './state/interfaces/app-state.interface';
import { actions } from './state/actions/contacts.actions';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent,
    DetailsComponent,
    ContactListComponent,
    FormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FontAwesomeModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
    EffectsModule.forRoot([ContactsEffects]),
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<AppState>) => {
        return () => {
          store.dispatch(actions.loadContactsRequest());
        };
      },
      multi: true,
      deps: [Store],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
