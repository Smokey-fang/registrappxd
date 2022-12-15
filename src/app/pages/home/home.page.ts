import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firestore:FirestoreService,
              private menu:MenuController) {}

              getEstudiantes(){
                this.firestore.getCollection();
              }
              verMenu(){
                this.menu.open('first');
              }
            
}
