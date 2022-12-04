import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EditUfoComponent } from '../app/pages/edit-ufo/edit-ufo.component'
import { RegisterUfoComponent } from './pages/register-ufo/register-ufo.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton, MatButtonModule, MatIconModule } from '@angular/material';
import { LoginForm } from './pages/loginform/login'
import { RegisterForm } from './pages/registerform/register'
import { LoginAndRegister } from './pages/loginAndRegister/logAndReg'
import { GoogleChartsModule } from 'angular-google-charts';
import { MapComponent } from './pages/map/map.component';
import { version } from 'process';
import { LinechartComponent } from './pages/linechart/linechart.component';
import { SafeHtml } from './pipe';
import { SafePipe } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { OverviewComponent } from './pages/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EditUfoComponent,
    RegisterUfoComponent,
    CommentsComponent,
    LoginAndRegister,
    LinechartComponent,
    LoginForm,
    MapComponent,
    RegisterForm,
    LinechartComponent,
    RegisterForm,
    SafeHtml, SafePipe, OverviewComponent,
    ],
   
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
      FormsModule,
      NgxPaginationModule,
      Ng2SearchPipeModule,
      NgbModule,
      MatIconModule,
      GoogleChartsModule.forRoot('','current'),
      MatButtonModule,
      ReactiveFormsModule,
      MatCardModule,
        GooglePlaceModule,

    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' }

    ]),
      BrowserAnimationsModule, 
      ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
