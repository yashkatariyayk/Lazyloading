import { SuratComponent } from './surat/surat.component';
import { GandhinagarComponent } from './gandhinagar/gandhinagar.component';
import { AhmedabadComponent } from './ahmedabad/ahmedabad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
    {path:'ahmedabad',component:AhmedabadComponent},
    {path:'gandhinagar',component:GandhinagarComponent},
    {path:'surat',component:SuratComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
