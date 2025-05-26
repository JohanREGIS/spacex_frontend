import { GpsModule } from "../gps-module/gps-module";

export class FlightController {
        idFlightController?:number;
        vitesse:number;
        altitudeCible:number;
        latitudeCible:number;
        longitudeCible:number;
        gpsModules?:GpsModule[];
    
        constructor(vitesse:number,altitudeCible:number,latitudeCible:number,longitudeCible:number,
            idFlightController?:number,gpsModules?:GpsModule[]
        ) {
            this.idFlightController=idFlightController;
            this.vitesse=vitesse;
            this.altitudeCible=altitudeCible;
            this.latitudeCible=latitudeCible;
            this.longitudeCible=longitudeCible;
            this.gpsModules=gpsModules;
        }
}
