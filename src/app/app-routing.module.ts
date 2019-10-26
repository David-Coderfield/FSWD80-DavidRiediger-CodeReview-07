import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
{path: "",component:HomeComponent},
{path: "trips",component:TripsComponent},
{path: "admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
