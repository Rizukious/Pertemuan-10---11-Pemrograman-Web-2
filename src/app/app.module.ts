import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contactComponent } from './contact/contact.component';
import { DashboardComponent } from './contact/dashboard/dashboard.component';
import { ContactDetailComponent } from './contact/detail/contact-detail.component';
import { ContactListComponent } from './contact/list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    contactComponent,
    DashboardComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
