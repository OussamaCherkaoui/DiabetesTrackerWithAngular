import { Routes } from '@angular/router';
import {AddGlycemieComponent} from "./add-glycemie/add-glycemie.component";
import {GlycemiesComponent} from "./glycemies/glycemies.component";
import {UpdateGlycemieComponent} from "./update-glycemie/update-glycemie.component";

export const routes: Routes = [
  { path: 'nouvelleGlycemie', component: AddGlycemieComponent },
  { path: 'modifierGlycemie/:id', component: UpdateGlycemieComponent },
  { path: '', component: GlycemiesComponent }
];
