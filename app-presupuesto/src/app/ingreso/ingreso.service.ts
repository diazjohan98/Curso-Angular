import { Injectable } from "@angular/core";
import { IngresoModel } from "./ingreso.model";


@Injectable({  providedIn: "root" })
export class IngresoService {
    ingresos: IngresoModel[] = [
        new IngresoModel("Salario", 4122200),
        new IngresoModel("Venta coche", 40000500)
    ];

    eliminar(ingreso: IngresoModel) {
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}