import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactComponent } from './projecte/components/fact/fact.component';
import { UserComponent } from './projecte/components/user/user.component';

const routes: Routes = [
  { path: 'fact', component: FactComponent},
  { path: 'user', component: UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
