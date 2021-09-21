import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { LoginComponent } from './login/login.component';
import { ServicesCompComponent } from './services-comp/services-comp.component';
import { SinupCompComponent } from './sinup-comp/signup-comp.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'home', component: HomeCompComponent },
  {path:'services', component: ServicesCompComponent },
  {path:'aboutus', component: AboutCompComponent},
  {path:'signup', component: SinupCompComponent},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
