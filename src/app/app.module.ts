import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { EditpassComponent } from './editpass/editpass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewuserComponent,
    ForgetComponent,
    SignupComponent,
    UpdateComponent,
    EditpassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
