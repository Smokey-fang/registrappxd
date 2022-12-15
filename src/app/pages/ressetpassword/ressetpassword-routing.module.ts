import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RessetpasswordPage } from './ressetpassword.page';

const routes: Routes = [
  {
    path: '',
    component: RessetpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RessetpasswordPageRoutingModule {}
