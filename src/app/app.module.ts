import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { ServicesCompComponent } from './services-comp/services-comp.component';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { SinupCompComponent } from './sinup-comp/signup-comp.component';
import { FormsModule } from '@angular/forms'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './sinup-comp/child/child.component';
import { UserComponent } from './user/user.component';
import { UserTableComponent } from './user/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCompComponent,
    ServicesCompComponent,
    AboutCompComponent,
    SinupCompComponent,
    SidenavComponent,
    LoginComponent,
    ProfileComponent,
    ChildComponent,
    UserComponent,
    UserTableComponent
    
    
  ],
  imports: [                                 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
