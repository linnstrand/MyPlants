import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PlantsComponent } from './plants.component';
import { PlantService } from './plant.service';


@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
