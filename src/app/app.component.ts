import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { InteractionService } from './services/interaction.service';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  login: boolean = false;

  constructor(private menu:MenuController,
              private auth:AuthService,
              private router:Router,
              private interaction: InteractionService,
              private database: FirestoreService) {

                this.auth.stateUser().subscribe(res => {
                  if (res){
                    console.log(' esta logeado');
                    this.login = true;
                  }else{
                    console.log('no esta logeado');
                    this.login = false;
                  }
                })
              }

  ngOnInit(): void {
  }

  cerrarMenu()
  {
    this.menu.close('first');
  }

  logout(){
    this.auth.logout();
    this.interaction.presentToast('secion finalizada');
    this.router.navigate(['/login']);
  }

}
