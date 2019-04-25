import { InsertBookComponent } from './insert-book/insert-book.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowBookComponent } from './show-book/show-book.component';

const routes: Routes = [{path: '', component: DashboardComponent},
                        {path: 'dashboard', component: DashboardComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'insertBook', component: InsertBookComponent},
                        {path: 'showbook', component: ShowBookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
