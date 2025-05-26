import { Component, OnInit } from '@angular/core';
import { FlightControllerService } from '../../services/flight-controller/flight-controller.service';
import { FlightController } from '../../models/flight-controller/flight-controller';

@Component({
  selector: 'app-flight-controller',
  standalone: false,
  templateUrl: './flight-controller.component.html',
  styleUrl: './flight-controller.component.css'
})
export class FlightControllerComponent implements OnInit {

  flightControllers:FlightController[] = [];
  vitesse:number = 0;
  altitude:number = 0;
  latitude:number = 0;
  longitude:number = 0;

  constructor(private flightControllerService:FlightControllerService) {}
  
  ngOnInit(): void {
    this.getFlightControllers();
  }

  getFlightControllers() {
    this.flightControllerService.getAllFlightControllers().subscribe({  
      next:(data) => {
        this.flightControllers = data as FlightController[];
      },
      error: (err) => console.error('Erreur de chargement des techniciens', err)
    });
  }

  changeVitesse(controller:FlightController) {
    
  }

  changeAltitude(direction: string) {
    
  }

  changeLatitude(direction: string) {
    
  }

  changeLongitude(direction: string) {
    
  }
}
