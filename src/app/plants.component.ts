import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html'
})
export class PlantsComponent implements OnInit {
  public addingPlant = false;
  public plants: any = [];
  public selectedPlant: Plant;

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
    return this.plantService.deletePlant(plant).subscribe(plants => {
      this.plants = plants || [];
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
