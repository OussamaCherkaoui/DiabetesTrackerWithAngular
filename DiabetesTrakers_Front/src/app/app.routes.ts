import { Routes } from '@angular/router';
import {AddGlycemieComponent} from "./add-glycemie/add-glycemie.component";
import {GlycemiesComponent} from "./glycemies/glycemies.component";

export const routes: Routes = [
  { path: 'nouvelleGlycemie', component: AddGlycemieComponent },
  { path: '', component: GlycemiesComponent }
];
