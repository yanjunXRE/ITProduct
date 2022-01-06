import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { Subhome1Component } from './subhome1/subhome1.component';
import { Subhome2Component } from './subhome2/subhome2.component';
import { ItserviceService } from './itservice.service';
import { UserserviceService } from './userservice.service';
import { LoginComponent } from './login/login.component';
import { PostsService } from './posts.service';
import { PostComponent } from './post/post.component';
import { DetailsComponent } from './details/details.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { AgmCoreModule } from '@agm/core';
import { ApiDetailComponent } from './api-detail/api-detail.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SafePipe } from './safe';
@NgModule({
  declarations: [ 
    SafePipe,
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PhotoComponent,
    Subhome1Component,
    Subhome2Component,
    LoginComponent,
    PostComponent,
    DetailsComponent,
    LogoutComponent,
    UserComponent,
    AdminComponent,
    RegisterComponent,
    PlaceOrderComponent,
    ApiDetailComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAO5aBvTXgiCg-TgXWlinaB8l_6GK6Yxro'
    })
  ],
  providers: [ItserviceService,UserserviceService,PostsService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
