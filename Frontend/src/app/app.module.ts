import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './utils/sidebar/sidebar.component';
import { ChartDataComponent } from './utils/chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Chart2Component } from './utils/chart2/chart2.component';
import { TrashComponent } from './add-trash/add-trash.component';
import { CommentsComponent } from './comments/comments.component';
import { RapportComponent } from './rapport/rapport.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { ReceiversComponent } from './receivers/receivers.component';
import { TrashListComponent } from './trash-list/trash-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    ChartDataComponent,
    Chart2Component,
    TrashComponent,
    CommentsComponent,
    RapportComponent,
    LogoutComponent,
    ProfileComponent,
    ReceiversComponent,
    TrashListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
