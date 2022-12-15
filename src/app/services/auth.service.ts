import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { error } from 'console';
import { Estudiante } from '../models/models';
import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authfirebase: AngularFireAuth,
              public ngFireAuth: AngularFireAuth,
              private interaction:InteractionService,
              private router:Router) { }

  login(correo: string, password: string){
    return  this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  logout(){
    this.authfirebase.signOut();
    this.interaction.presentToast('sesion finalizada')
  }

  registarUser(datos: Estudiante) {
    return  this.authfirebase.createUserWithEmailAndPassword(datos.email, datos.password);
  }
  stateUser() {

    return this.authfirebase.authState
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.authfirebase.currentUser).sendEmailVerification();
  }

  async getUid(){
    const user = await this.authfirebase.currentUser;
    if(user){
      return user.uid;
    }else{
      return null;
    }
  }


  PasswordRecover(passwordResetEmail: any){
    return this.ngFireAuth
    .sendPasswordResetEmail(passwordResetEmail)
    .then(() =>{
      window.alert(
        'Tu contraseña ha sido enviada, revisa tu correo.'
      );
    })
    .catch((error) => {
      window.alert(error);
    });
  }

  // forgotpassword(email:string){
  //   this.authfirebase.sendPasswordResetEmail(email).then(()=>{
  //     this.router.navigate(['/login']); 
  //   },error =>{
  //     alert(error.message)
  //   })
  // }
}
