import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightControllerComponent } from './components/flight-controller/list-flight-controller/flight-controller.component';
import { provideHttpClient } from '@angular/common/http';
import { ControlsComponent } from './components/flight-controller/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightControllerComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
