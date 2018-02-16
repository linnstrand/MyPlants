import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from './models/plant';
import { Water, Light } from './models/constants';

@Component({
  selector: 'app-plant-form',
  templateUrl: `./plant-form.component.html`
})
export class PlantFormComponent implements OnInit {
  @Input() plant: Plant;
  @Output() savePlant = new EventEmitter();
  water = Water;

  constructor() { }

  save(): void {
    this.savePlant.next();
  }

  ngOnInit() {
  }

}
