import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrashComponent } from './add-trash/add-trash.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RapportComponent } from './rapport/rapport.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { ReceiversComponent } from './receivers/receivers.component';
import { TrashListComponent } from './trash-list/trash-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent , },
  { path: 'register', component: RegisterComponent ,  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'trash', component: TrashComponent, canActivate: [AuthGuardService] },
  { path: 'trash/all', component: TrashListComponent, canActivate: [AuthGuardService] },
  { path: 'comments', component: CommentsComponent, canActivate: [AuthGuardService] },
  { path: 'rapports', component: RapportComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'receiver', component: ReceiversComponent, canActivate: [AuthGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  //default route
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
