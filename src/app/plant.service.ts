import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from './models/plant';

@Injectable()
export class PlantService {
  api = '/api/plants';
  constructor(private http: HttpClient) { }

  getPlants() {
    return this.http.get<Plant[]>(`${this.api}`);
  }

  deletePlant(plant: Plant) {
    return this.http.delete<Plant>(`${this.api}/${plant.id}`);
  }

  addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(`${this.api}`, plant)
      .pipe(
        tap((p: Plant) => console.log('adding plant ' + p.name),
          catchError((err: Error) => {
            console.log(err);
            return Observable.throw(err)
          })
        ));
  }

  updatePlant(plant: Plant) {
    return this.http.put<Plant>(`${this.api}`, plant);
  }

}
