import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../app/home/home.component';
import { EditUfoComponent } from "../app/pages/edit-ufo/edit-ufo.component";
import { RouterModule, Routes } from '@angular/router';
import { RegisterUfoComponent } from '../app/pages/register-ufo/register-ufo.component';
import { CommentsComponent } from 'src/app/pages/comments/comments.component'
import { LoginAndRegister } from './pages/loginAndRegister/logAndReg'
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'editUfo/:id', component: EditUfoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'regUfo', component: RegisterUfoComponent },
    { path: 'comment/:id', component: CommentsComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'login', component: LoginAndRegister }
];

@NgModule({
  declarations: [],
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})

export class AppRoutingModule { }
