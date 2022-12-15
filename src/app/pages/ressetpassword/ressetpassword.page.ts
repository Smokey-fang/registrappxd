import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { Estudiante } from 'src/app/models/models';

@Component({
  selector: 'app-ressetpassword',
  templateUrl: '',
  styleUrls: ['./ressetpassword.page.scss'],
  providers:[ AuthService ]

})
export class RessetpasswordPage implements OnInit {

  constructor(public AuthService: AuthService) { }

  ngOnInit() {  
  }

  // sendLink(){
  //   this.AuthService.forgotpassword(this.email);
  //   this.email='';
  // }

  onReset(email: null){
    this.AuthService.PasswordRecover(email);
  }
}
