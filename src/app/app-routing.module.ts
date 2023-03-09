import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodycontentComponent } from './bodycontent/bodycontent.component';
import { ChangtonodeComponent } from './changtonode/changtonode.component';
import { FormemailComponent } from './formemail/formemail.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SevicescomponentComponent } from './sevicescomponent/sevicescomponent.component';
import { TablepageComponent } from './tablepage/tablepage.component';

const routes: Routes = [
 
  {path:'',component:MainLayoutComponent,
  canActivate:[AuthGuard],  
  children:[
  {path:'node',component:SevicescomponentComponent},
  {path:'table',component:TablepageComponent},
  {path:'home',component:BodycontentComponent},
  {path:'product',component:ChangtonodeComponent},
  {path:'mail',component:FormemailComponent},
]},
  {path:'login',component:LoginLayoutComponent},
  {path:'',component:LoginLayoutComponent},
  {path:'**',component:LoginLayoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
