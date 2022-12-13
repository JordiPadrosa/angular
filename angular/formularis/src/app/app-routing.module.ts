import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciaComponent as incidenciaTD} from './projecte/components/incidencia/TemplateDriven/incidencia.component';
import { IncidenciaComponent as incidenciaRF} from './projecte/components/incidencia/ReactiveForms/incidencia.component';


const routes: Routes = [
  {path: 'incidencia', component: incidenciaTD},
  {path: 'incidenciaRF', component: incidenciaRF}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }