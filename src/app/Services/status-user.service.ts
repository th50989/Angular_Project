import { Injectable } from '@angular/core';
		import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class StatusUserService {

  

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private sts : UserService ) {
    this.sts.getCurrentUser().then(user =>{
      if(user)
      {
        this.isUserLoggedIn.next(true)
      }
      else{
        this.isUserLoggedIn.next(false)
      }
    })
  } 
}
