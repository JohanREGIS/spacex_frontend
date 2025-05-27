import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightControllerComponent } from './components/flight-controller/list-flight-controller/flight-controller.component';
import { ControlsComponent } from './components/flight-controller/controls/controls.component';

const routes: Routes = [
  {
    path:'', component : FlightControllerComponent
  },
  {
    path:'controls', component : ControlsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
