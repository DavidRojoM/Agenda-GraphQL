import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
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
import { AppState } from './state/interfaces/app-state.interface';
import { actions } from './state/actions/contacts.actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FontAwesomeModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
    EffectsModule.forRoot([ContactsEffects]),
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
