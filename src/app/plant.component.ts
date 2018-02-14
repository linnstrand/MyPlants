import { Component, OnInit, Input } from '@angular/core';
import { Plant } from './models/plant';

@Component({
  selector: 'app-plant',
  templateUrl: `./plant.component.html`
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;
  constructor() { }

  ngOnInit() {
  }

}
