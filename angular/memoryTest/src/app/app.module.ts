import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaComponent } from './projecte/components/carta/carta.component';
import { BarallaComponent } from './projecte/components/baralla/baralla.component';
import { JugadorComponent } from './projecte/components/jugador/jugador.component';
import { TaulaComponent } from './projecte/components/taula/taula.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    BarallaComponent,
    JugadorComponent,
    TaulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
