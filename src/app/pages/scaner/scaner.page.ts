import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { clases } from 'src/app/models/models';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  qrCodeString = 'QR Mensaje';
  scannedResult: any;
  content_visibility = '';
  code: any;
  clases: any[] = [];


  constructor(
    private router:Router,
    private menu:MenuController,
    private db: FirestoreService
    ) { }

  ngOnInit() {
  }

  verMenu(){
    this.menu.open('first');
  }

  async startScan() {
    /*this.barcodeScanner.scan().then(barcodeData => {
    });*/
      this.code = '12345';
      this.db.getCollection<clases>('Clases').subscribe(res => {
        this.clases = res;  
      });
      for(let i = 0; i < this.clases.length; i++) {
        if (this.clases[i].asignatura === this.code) {
          // order to add a new date to the array of dates and add 1 to the attendance
          let fechas = this.clases[i].fechas;
          let asistencia = this.clases[i].asistencia;
          this.db.updateDoc({
            asignatura: this.code,
            fechas: fechas.concat(new Date().toLocaleDateString()),
            asistencia: asistencia + 1,
          }, 'Clases', this.code);
          console.log('Class exists, adding attendance');
          break;
        } else if (i === this.clases.length - 1){
          this.db.createDoc({
            asignatura: this.code,
            fechas: [new Date().toLocaleDateString()],
            asistencia: 1,
          }, 'Clases', this.code);
          console.log('Class created');
          break;
        }
      }
    }   
  }







