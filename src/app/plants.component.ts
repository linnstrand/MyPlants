import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Plant } from './models/plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html'
})
export class PlantsComponent implements OnInit {
  addingPlant = false;
  plants: Plant[];
  selectedPlant: Plant;
  editingMode = false;

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.getPlants();
  }

  cancel() {
    this.addingPlant = false;
    this.selectedPlant = null;
    this.editingMode = false;
  }

  getPlants() {
    this.plantService.getPlants().subscribe((plants: Plant[]) => {
      this.plants = plants;
    });;
  }

  deletePlant(plant: Plant) {
    this.plants = this.plants.filter(p => p !== plant);
    this.plantService.deletePlant(plant).subscribe(() => {
      this.selectedPlant = null;
    });
  }

  enableAddMode() {
    this.addingPlant = true;
    this.editingMode = true;
    this.selectedPlant = new Plant();
  }

  onSelect(plant: Plant) {
    this.addingPlant = false;
    this.editingMode = false;
    this.selectedPlant = plant;
  }

  setEditMode(): void {
    this.editingMode = true;
  }

  save() {
    if (this.addingPlant) {
      this.plantService.addPlant(this.selectedPlant).subscribe((plant: Plant) => {
        this.addingPlant = false
        this.selectedPlant = null;
        this.plants.push(plant);
      });
    } else {
      this.plantService.updatePlant(this.selectedPlant).subscribe((plant: Plant) => {
        this.addingPlant = false;
        this.selectedPlant = null;
      });
    }
  }

}
