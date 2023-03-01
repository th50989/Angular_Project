import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { StatusUserService } from './status-user.service';

@Injectable({
  providedIn: 'root'
})

export class EmailsService {

  constructor(private fauth: AngularFireAuth, private router: Router, private status:StatusUserService) { }
  //signup normally
  signup(Email: any, Password: any) {
    // console.log('1337');
    return new Promise<any>((resolve, reject) => {
      this.fauth.createUserWithEmailAndPassword(Email, Password)
        .then(res => {
          resolve(res + " Some thing wrong occure");
        }, err => reject(err))
    })
  }



  //signup with gg
  async gglogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    return await this.fauth.signInWithPopup(provider).then(user =>{this.status.isUserLoggedIn.next(true)})
  }

  signinFirebase(email: any, password:any){
    return new Promise<any>((resolve, reject) => {
      this.fauth.signInWithEmailAndPassword(email, password)
      .then(user => {       
        console.log('ss');
        {this.status.isUserLoggedIn.next(true)}
        
      resolve(user);
      //this.sharingService.isUserLoggedIn.next(true);
      }, err => reject(err))
    })}



    logout()
    {
      return new Promise<any>((resolve,reject)=>{
			 // if (this.fauth.currentUser){
			  //if (this.fauth.auth.currentUser){
				this.fauth.signOut();
        this.status.isUserLoggedIn.next(false);
				resolve("log out");
			  // }else{
				// reject();
			  // }
	  
			})
    }
}
