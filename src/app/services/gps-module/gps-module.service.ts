import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GpsModule } from '../../models/gps-module/gps-module';
import { AppSettings } from '../../settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class GpsModuleService {

  private host = AppSettings.APP_URL + "gps_modules";

  constructor(private http:HttpClient) { }

    saveGPSModule(gpsModule:GpsModule) {
      return this.http.post(`${this.host}/register`, gpsModule);
    }
    
    getGPSModuleById(id:number) {
      return this.http.get(`${this.host}/${id}`);
    }
    
    getAllGPSModules() {
      return this.http.get(this.host);
    }
    
    deleteGPSModuleById(id:number) {
      return this.http.delete(`${this.host}/${id}`);
    }
    
    updateGPSModule(id:number, gpsModule:GpsModule) {
      return this.http.put(`${this.host}/${id}`, gpsModule);
    }
}
