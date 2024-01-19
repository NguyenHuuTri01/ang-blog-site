import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthClassGuard } from './services/auth-class.guard';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthClassGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthClassGuard] },
  { path: 'posts', component: AllPostComponent, canActivate: [AuthClassGuard] },
  { path: 'posts/new', component: NewPostComponent, canActivate: [AuthClassGuard] },
  { path: 'subscribers', component: SubscribersComponent, canActivate: [AuthClassGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
