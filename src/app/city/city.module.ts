import {CityRoutingModule} from './city-routing.module';
import { AhmedabadComponent } from './ahmedabad/ahmedabad.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GandhinagarComponent } from './gandhinagar/gandhinagar.component';
import { SuratComponent } from './surat/surat.component';

@NgModule({
  imports: [
    CommonModule,CityRoutingModule
    
  ],
  declarations: [AhmedabadComponent, GandhinagarComponent, SuratComponent]
})
export class CityModule { }




