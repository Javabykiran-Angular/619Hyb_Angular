import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationuserComponent } from './operationuser/operationuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

const routes: Routes = [
    {
      path:"",component:OperationuserComponent
    },
    {
      path:"adduser",component:AdduserComponent
    },
    {
      path:"updateuser",component:UpdateuserComponent
    },
    {
      path:"deleteuser",component:DeleteuserComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
