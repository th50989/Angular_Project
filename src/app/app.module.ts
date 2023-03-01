import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutModelComponent } from './logout-model/logout-model.component';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BodycontentComponent } from './bodycontent/bodycontent.component';
import { TablepageComponent } from './tablepage/tablepage.component';


import { HttpClientModule } from '@angular/common/http';
import { SevicescomponentComponent } from './sevicescomponent/sevicescomponent.component';

import { NgxPaginationModule } from 'ngx-pagination';

import {ReactiveFormsModule} from "@angular/forms";
import { ChangtonodeComponent } from './changtonode/changtonode.component';
import { FormemailComponent } from './formemail/formemail.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutModelComponent,
    BodycontentComponent,
    TablepageComponent,
    SevicescomponentComponent,
    ChangtonodeComponent,
    FormemailComponent,
    LoginpageComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
  ],
  imports: [
    HttpClientModule,//nơi cần bổ sung,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
