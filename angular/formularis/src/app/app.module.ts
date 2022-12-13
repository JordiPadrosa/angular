import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidenciaComponent } from './projecte/components/incidencia/TemplateDriven/incidencia.component';
import { IncidenciaComponent as IncidenciaComponentRS } from './projecte/components/incidencia/ReactiveForms/incidencia.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidenciaComponent,
    IncidenciaComponentRS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
