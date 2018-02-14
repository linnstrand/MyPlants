import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from './models/plant';
import { Observable } from 'rxjs/Observable';

import { tap, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

const api = '/api';

@Injectable()
export class PlantService {

  constructor(private http: HttpClient) { }

  getPlants() {
    return this.http.get<Plant[]>(`${api}/plants`);
  }

  deletePlant(plant: Plant) {
    return this.http.delete<Plant>(`${api}/plant/${plant}`);
  }

  addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(`${api}/plant/`, plant)
      .pipe(
        tap((p: Plant) => console.log('adding plant ' + p.name),
          catchError((err: Error) => {
            console.log(err);
            return Observable.throw(err)
          })
        ));
  }

  updatePlant(plant: Plant) {
    return this.http.put<Plant>(`${api}/plant/${plant.id}`, plant);
  }

}
