import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { NavComponent } from './nav/nav.component';

import { AdminService } from "./shared/admin.service";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TripsComponent } from './trips/trips.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AdminFormComponent,
    AdminListComponent,
    NavComponent,
    TripsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
    AngularFireDatabaseModule, // we will import the classes here too
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
