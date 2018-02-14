import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from './models/plant';
//import { Water, Light } from './models/constants';

@Component({
  selector: 'app-plant-detail',
  templateUrl: `./plant-detail.component.html`
})
export class PlantDetailComponent implements OnInit {

  @Input() plant: Plant;
  @Output() editPlant = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  edit(): void {
    this.editPlant.next();
  }

}
