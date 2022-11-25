import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginGoogleService {

  constructor(private auth:AngularFireAuth, private cookie: CookieService) { }

  async loginWithGoogle(){
    let referenceProvider = new firebase.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(referenceProvider)
    .then(sesion=>sesion.user?.getIdToken().then(token=>this.cookie.set("idToken",token)));
  }

  getUser(){
    this.auth.authState.subscribe(
      async user=>{
        let token = await user?.getIdToken()
        console.log(token)
      }
    )
  }

  logOut(){
    this.auth.signOut().then(
      ()=>{
        this.cookie.delete("idToken");
      }
    )
  }

  getToken(){
    return this.cookie.get('idToken')
  }
}
