import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { GetphotoService } from './services/getphoto.service';
import { RouterModule, Routes } from '@angular/router';
import { GetpostsService } from './services/getposts.service';
import { HomeworkComponent } from './components/homework/homework.component';

const appRoutes:Routes = [
  {path:"", component:UserComponent},
  {path:"about", component:AboutusComponent},
  {path:"homework", component:HomeworkComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    HomeworkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ GetphotoService, GetpostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
