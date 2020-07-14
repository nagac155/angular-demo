import { Injectable } from '@angular/core';
import { carsList, ICars } from '../_mock-data/cars-data';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class CarsService {

    getCars(): Observable<Array<ICars>> {
        return  of(carsList);
    }
}
