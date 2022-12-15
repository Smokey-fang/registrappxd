import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit { 
    usuario = {
    email: '',
    password: ''
  } 

  constructor(private auth:AuthService,
              private interaction: InteractionService,
              private router:Router) { }

  ngOnInit() {
  }

   
  async login(){
    await this.interaction.presentLoading('ingresando...')
    console.log('usuario -> ', this.usuario);
    const res = await this.auth.login(this.usuario.email, this.usuario.password).catch(error => {
      console.log('error');
        this.interaction.closeLoading();
        this.interaction.presentToast('Usuario o contraseña invalido')
    })
    if (res){
      console.log('res ->',res);
      this.interaction.closeLoading();
      this.interaction.presentToast('ingresado con exito');
      this.router.navigate(['/home']);
    }
  }
   
}
