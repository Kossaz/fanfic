import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {FanficsListComponent} from "./components/fanfics-list/fanfics-list.component";
import {FanficDetailsComponent} from "./components/fanfic-details/fanfic-details.component";
import {AddFanficComponent} from "./components/add-fanfic/add-fanfic.component";
import {HomeComponent} from "./home/home.component";
import {ContentComponent} from "./components/content/content.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fanfics', component: FanficsListComponent },
  { path: 'fanfics/:id/edit', component: FanficDetailsComponent },
  { path: 'add', component: AddFanficComponent },
  { path: 'fanfics/:id', component: ContentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
