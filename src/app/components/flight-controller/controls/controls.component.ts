import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: false,
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent implements OnInit {

  vitesse:number = 0;
  altitude:number = 0;
  latitude:number = 0;
  longitude:number = 0;

  constructor() {}

  ngOnInit(): void {
    
  }

  changeVitesse(nombre:number) {
    
  }

  changeAltitude(nombre:number) {
    
  }

  changeLatitude(nombre:number) {
    
  }

  changeLongitude(nombre:number) {
    
  }

}
