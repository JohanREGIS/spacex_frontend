import { Camera } from "../camera/camera";
import { FlightController } from "../flight-controller/flight-controller";

export class GpsModule {
        idDrone?:number;
        modele:string;
        poids:number;
        porteeMax:number;
        capaciteBatterie:number;
        longueur:number;
        largeur:number;
        hauteur:number;
        camera?:Camera;
        latitude:number;
        longitude:number;
        altitude:number;
        flightController:FlightController;
    
        constructor(modele:string,poids:number, porteeMax:number,capaciteBatterie:number,longueur:number,
            largeur:number,hauteur:number,latitude:number,longitude:number,altitude:number,flightController:FlightController,
            idDrone?:number,camera?:Camera
        ) {
            this.idDrone = idDrone;
            this.modele = modele;
            this.poids = poids;
            this.porteeMax = porteeMax;
            this.capaciteBatterie=capaciteBatterie;
            this.longueur=longueur;
            this.largeur=largeur;
            this.hauteur=hauteur;
            this.camera=camera;
            this.altitude=altitude;
            this.latitude=latitude;
            this.longitude=longitude;
            this.flightController=flightController;
        }
}
