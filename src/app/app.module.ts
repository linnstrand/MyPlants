import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { PlantsComponent } from './plants.component';
import { PlantService } from './plant.service';
import { AppRoutingModule } from './/app-routing.module';
import { PlantComponent } from './plant.component';
import { PlantDetailComponent } from './plant-detail.component';
import { InMemoryDataService } from './in-memory-data.service';
import { PlantFormComponent } from './plant-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    PlantComponent,
    PlantDetailComponent,
    PlantFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    // HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true } )
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
