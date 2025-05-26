import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera } from '../../models/camera/camera';
import { AppSettings } from '../../settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

    private host = AppSettings.APP_URL + "cameras";

  constructor(private http:HttpClient) { }

  saveCamera(camera:Camera) {
    return this.http.post(`${this.host}/register`, camera);
  }
  
  getCameraById(id:number) {
    return this.http.get(`${this.host}/${id}`);
  }
  
  getAllCameras() {
    return this.http.get(this.host);
  }
  
  deleteCameraById(id:number) {
    return this.http.delete(`${this.host}/${id}`);
  }
  
  updateCamera(id:number, camera:Camera) {
    return this.http.put(`${this.host}/${id}`, camera);
  }
}
