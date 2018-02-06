import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from './plant';


const api = '/api';

@Injectable()
export class PlantService {

  constructor(private http: HttpClient) { }

  getPlants() {
    return this.http.get<any>(`${api}/plants`);
  }

  deletePlant(plant: Plant) {
    return this.http.delete(`${api}/plant/${plant.id}`);
  }

  addPlant(plant: Plant) {
    return this.http.post<Plant>(`${api}/plant/`, plant);
  }

  updatePlant(plant: Plant) {
    return this.http.put<Plant>(`${api}/plant/${plant.id}`, plant);
  }

}
