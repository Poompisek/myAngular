import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { GetphotoService } from './services/getphoto.service';
import { GetpostsService } from './services/getposts.service';
import { LoginService } from './services/login.service';
import { UserManagementService } from './services/user-management.service';

import {AuthguardGuard} from './authguard.guard';
import { UserManagementComponent } from './components/user-management/user-management.component';

const appRoutes:Routes = [
  {path:"", component:LoginComponent},
  {path:"home", canActivate: [AuthguardGuard],component: HomeComponent},
  {path:"user", component:UserComponent},
  {path:"aboutus", component:AboutusComponent},
  {path:"homework", component:HomeworkComponent},
  {path: 'user-management',canActivate: [AuthguardGuard],component: UserManagementComponent},
  {path: '**',canActivate: [AuthguardGuard],component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    HomeworkComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    GetphotoService, 
    GetpostsService,
    LoginService,
    AuthguardGuard,
    UserManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
