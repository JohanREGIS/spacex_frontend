import { Component, OnInit } from '@angular/core';
import { FlightControllerService } from '../../../services/flight-controller/flight-controller.service';
import { GpsModuleService } from '../../../services/gps-module/gps-module.service';
import { Router } from '@angular/router';
import { forkJoin, map, of, switchMap } from 'rxjs';
import { CameraService } from '../../../services/camera/camera.service';

@Component({
  selector: 'app-flight-controller',
  standalone: false,
  templateUrl: './flight-controller.component.html',
  styleUrl: './flight-controller.component.css'
})
export class FlightControllerComponent implements OnInit {

  flightControllers:any;

  constructor(private flightControllerService:FlightControllerService, private gpsModuleService:GpsModuleService, private cameraService:CameraService, private router:Router) {}
  
  ngOnInit(): void {
    this.getFlightControllers();
  }

  // getFlightControllers() {
  //   this.flightControllerService.getAllFlightControllers().subscribe({  
  //     next:(data) => {
  //       this.flightControllers = data;
  //       console.log("Contrôleurs : " + this.flightControllers);
  //     },
  //     error: (err) => console.error('Erreur de chargement des contrôleurs', err)
  //   });
  // }


  getFlightControllers() {
    this.flightControllerService.getAllFlightControllers().subscribe({
      next: (flightControllers) => {
        const enrichedControllers = [];

        // Pour chaque flight controller, on enrichit les modules GPS
        const controllerObservables = (flightControllers as any[]).map((controller: { gpsModules: any; }) => {
          const gpsModuleIds = controller.gpsModules.map((mod: { idDrone: number; }) => mod.idDrone);

          // Appels pour tous les idDrone
          const gpsObservables = gpsModuleIds.map((id: number) =>
            this.gpsModuleService.getGPSModuleById(id)
          );

          return forkJoin(gpsObservables).pipe(
            map((gpsModules) => {
              controller.gpsModules = gpsModules;
              return controller;
            })
          );
        });

        forkJoin(controllerObservables).subscribe({
          next: (controllersWithGPS) => {
            this.flightControllers = controllersWithGPS;
            console.log("Contrôleurs enrichis :", this.flightControllers);
          },
          error: (err) => console.error('Erreur lors du chargement des GPSModules', err)
        });
      },
      error: (err) => console.error('Erreur de chargement des FlightControllers', err)
    });
  }

  choisirController(id: number): void {
    this.router.navigate(['/controls'], { queryParams: { idFlightController: id } });
  }

}
