import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html'
})
export class PlantsComponent implements OnInit {
  public addingPlant = false;
  plants: Plant[] = [];
  public selectedPlant: Plant;

  Water = Object.freeze({
    1: 'Very Low',
    2: 'Low',
    3: 'Medium',
    4: 'High',
  });

  Light = Object.freeze({
    1: 'Dark',
    2: 'Low',
    3: 'Medium',
    4: 'High',
    5: 'Very Bright'
  });

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.getPlants();
  }

  cancel() {
    this.addingPlant = false;
    this.selectedPlant = null;
  }

  getPlants() {
    return this.plantService.getPlants().subscribe(plants => {
      console.log(plants);
      this.plants = plants;
    });
  }

  deletePlant(plant: Plant) {
    this.plants = this.plants.filter(p => p !== plant);
    return this.plantService.deletePlant(plant).subscribe(plants => {
    });
  }

  enableAddMode() {
    this.addingPlant = true;
    this.selectedPlant = new Plant();
  }

  onSelect(plant: Plant) {
    this.addingPlant = false;
    this.selectedPlant = plant;
  }

  save() {
    if (this.addingPlant) {
      this.plantService.addPlant(this.selectedPlant).subscribe(plant => {
        this.addingPlant = false;
        this.selectedPlant = null;
        this.plants.push(plant);
      });
    } else {
      this.plantService.updatePlant(this.selectedPlant).subscribe(plant => {
        this.addingPlant = false;
        this.selectedPlant = null;
      });
    }
  }

}
