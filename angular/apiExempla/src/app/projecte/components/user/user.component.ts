import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subscription, take, throwError } from 'rxjs';
import { User } from '../../model/entitats/user';
import { userApi } from '../../serveis/api/userApi';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy{
  users!:Array<{id:number, name:string, email:string, gender:string, status:string}>;
  user: User = new User();
  error!: string;
  subscriptions!: Array<Subscription>;
  
  constructor(private httpClient:userApi) {
    this.user = new User();
    this.getAllUsers();
    this.subscriptions = new Array<Subscription>();
  }
  ngOnDestroy(): void {
    this.logSubscriptions();
    this.subscriptions.forEach((s, index) => {
      s.unsubscribe();
    })
    this.logSubscriptions();
  }

  guardar() {
    this.httpClient.create(this.user).
    pipe(take(1),catchError((err:any) => {
      console.log(err);
      return throwError(() => new Error("Error en crear l'usuari"));
    }))
    .subscribe({
      next: () => {  },
      error: (err: any) => {
      console.log(err.message);
      this.error = err.error;
      },
      
      complete: () => { this.getAllUsers }
    });
  }

  getAllUsers() {
    this.subscriptions.push(	
    this.httpClient.getUsers().subscribe( users => {
      this.users = users;
    }));    
  }
  private logSubscriptions() {
    this.subscriptions.forEach((s, index) => {
      console.log(index + " - " + s.closed);
    })
  }

}
