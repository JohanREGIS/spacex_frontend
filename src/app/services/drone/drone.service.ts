import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drone } from '../../models/drone/drone';
import { AppSettings } from '../../settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class DroneService {

    private host = AppSettings.APP_URL + "drones";

  constructor(private http:HttpClient) { }

    saveDrone(drone:Drone) {
      return this.http.post(`${this.host}/register`, drone);
    }
    
    getDroneById(id:number) {
      return this.http.get(`${this.host}/${id}`);
    }
    
    getAllDrones() {
      return this.http.get(this.host);
    }
    
    deleteDroneById(id:number) {
      return this.http.delete(`${this.host}/${id}`);
    }
    
    updateDrone(id:number, drone:Drone) {
      return this.http.put(`${this.host}/${id}`, drone);
    }
}
