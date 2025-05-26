import { Camera } from "../camera/camera";

export class Drone {
    idDrone?:number;
    modele:string;
    poids:number;
    porteeMax:number;
    capaciteBatterie:number;
    longueur:number;
    largeur:number;
    hauteur:number;
    camera?:Camera;

    constructor(modele:string,poids:number, porteeMax:number,capaciteBatterie:number,longueur:number,
        largeur:number,hauteur:number,idDrone?:number,camera?:Camera
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
    }
}
