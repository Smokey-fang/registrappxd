import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Estudiante } from '../../models/models';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data: Estudiante = {
    nombre: '',
    email: '',
    password: '',
    id: '',
  }

  constructor(private database: FirestoreService,
              private auth: AuthService,
              private interaction: InteractionService,
              private router: Router) { }

  ngOnInit() {
  }

  async crearNuevoEstudiante() {
    this.interaction.presentLoading('registrando');
    const res = await this.auth.registarUser(this.data).catch(error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('error')
      console.log('error');
    })
    if (res) {
      console.log('exito al crear ususario');
      const path = 'Estudiantes';
      const id = res.user.uid
      this.data.id = id;
      this.database.createDoc(this.data, path, id).then(() => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Guardado con éxito');
      this.router.navigate(['/email-verificacion']);
      })
    }
  }

}
