import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { UpdateComponent } from './pages/update/update.component';
import { DetailsComponent } from './pages/details/details.component';
import { ContactListComponent } from './shared/components/contact-list/contact-list.component';
import { ContactListRowComponent } from './shared/components/contact-list/contact-list-row/contact-list-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent,
    DetailsComponent,
    ContactListComponent,
    ContactListRowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
