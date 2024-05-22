// This file is the entry point for the application
// It tells Angular how to assemble the application
// It imports browser modules, Angular modules, and modules from the Angular Material library
// It also imports the components that belong to this module and declares them in the @NgModule decorator
// The decorator also imports the services that this module contributes to the global collection of services
// and specifies the main application view, called the root component, that hosts all other app views.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

// Define the routes for the application
const appRoutes: Routes = [
   { path: 'welcome', component: WelcomePageComponent },
   { path: 'movies', component: MovieCardComponent },
   { path: 'profile', component: UserProfileComponent },
   { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

// The NgModule decorator identifies AppModule as an Angular module class
@NgModule({
   declarations: [  // Components, directives, and pipes that belong to this module
      AppComponent,
      UserRegistrationFormComponent,
      UserLoginFormComponent,
      MovieCardComponent,
      WelcomePageComponent,
      UserProfileComponent,
      NavBarComponent
   ],
   imports: [         // Modules that are imported by this module
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      MatDialogModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatSnackBarModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      MatIconModule
   ],
   providers: [          // Providers of services that this module contributes to the global collection of services
      provideAnimationsAsync()
   ],
   bootstrap: [AppComponent]      // The main application view, called the root component, that hosts all other app views
})
export class AppModule { }     // The root module class that tells Angular how to assemble the application
