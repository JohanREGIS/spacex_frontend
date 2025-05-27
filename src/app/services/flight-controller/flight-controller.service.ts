import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightController } from '../../models/flight-controller/flight-controller';
import { AppSettings } from '../../settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class FlightControllerService {

    private host = AppSettings.APP_URL + "flight_controllers";

  constructor(private http:HttpClient) { }

    saveFlightController(flightController:FlightController) {
      return this.http.post(`${this.host}/register`, flightController);
    }
    
    getFlightControllerById(id:number) {
      return this.http.get(`${this.host}/${id}`);
    }
    
    getAllFlightControllers() {
      return this.http.get(this.host);
    }
    
    deleteFlightControllerById(id:number) {
      return this.http.delete(`${this.host}/${id}`);
    }
    
    updateFlightController(id:number, flightController:FlightController) {
      return this.http.put(`${this.host}/${id}`, flightController);
    }
}
