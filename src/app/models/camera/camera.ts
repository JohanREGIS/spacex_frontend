import { Drone } from "../drone/drone";

export class Camera {
    idCamera?:number;
    resolution:string;
    zoom:number;
    drones?:Drone[];

    constructor(resolution:string,zoom:number, idCamera?:number,drones?:Drone[]) {
        this.idCamera = idCamera;
        this.resolution = resolution;
        this.zoom = zoom;
        this.drones = drones;
    }

}
