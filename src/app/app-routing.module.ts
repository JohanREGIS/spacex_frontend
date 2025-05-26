import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightControllerComponent } from './components/flight-controller/flight-controller.component';

const routes: Routes = [
  {
    path:'accueil', component : FlightControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
