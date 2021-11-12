import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {Subhome1Component} from './subhome1/subhome1.component';
import {Subhome2Component} from './subhome2/subhome2.component';
import{AboutComponent} from'./about/about.component';
import{PhotoComponent} from './photo/photo.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import { PostComponent } from './post/post.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { DetailsComponent } from './details/details.component';
import { ApiDetailComponent } from './api-detail/api-detail.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
 { path: 'home', component: HomeComponent}, {path:'',component:HomeComponent}
     ,{ path: 'about', component: AboutComponent },{ path: 'photos', component: PhotoComponent },{ path: 'api-detail/:_id', component:ApiDetailComponent},
     { path: 'login', component:LoginComponent}, { path: 'register', component:RegisterComponent},{ path: 'forgotpassword', component: ForgotpasswordComponent},{path:'placeOrder',component:PlaceOrderComponent},
     { path: 'logout', component:LogoutComponent},{path:'placeOrder',component:PlaceOrderComponent},{path:'placeOrder',component:PlaceOrderComponent},
     { path: 'user', component:UserComponent,canActivate: [AuthGuard], data:
     {permission: {only: ["user", "admin"]}}}, 
     { path: 'admin', component:AdminComponent,children:[{path:'subhome2',component:Subhome2Component},{path:'subhome2/:_id',component:Subhome2Component}],
      canActivate: [AuthGuard], data:
     {permission: {only: ["admin"]}}},{path: 'post', component: PostComponent},
// redirect to home page on load
 { path: '', component: HomeComponent, pathMatch: 'full'},{ path: 'details/:_id', component: DetailsComponent}];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { };
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);