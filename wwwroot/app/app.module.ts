import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { LoginComponent } from './Login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AuthService } from "./shared/auth.service";

import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing, 
        MaterialModule
    ],
    providers: [AuthService],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        SecretComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
