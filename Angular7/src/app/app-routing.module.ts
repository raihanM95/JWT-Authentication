import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  // site with layout routes
  { 
    path: '', 
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate:[AuthGuard]},
      { path: 'contact', component: ContactComponent, pathMatch: 'full', canActivate:[AuthGuard]},
      { path: 'about', component: AboutComponent, pathMatch: 'full', canActivate:[AuthGuard]},
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
