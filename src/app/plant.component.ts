import { Component, OnInit, Input } from '@angular/core';
import { Plant } from './models/plant';
import { Water, Light } from './models/constants';
@Component({
  selector: 'app-plant',
  templateUrl: `./plant.component.html`
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;
  water: any[];
  light: any[];
  constructor() { }

  ngOnInit() {
    if (this.plant.water > 0) this.water = Array(this.plant.water).fill(Water[this.plant.water]);
    if (this.plant.light > 0) this.light = Array(this.plant.light).fill(Light[this.plant.light]);

  }

}
