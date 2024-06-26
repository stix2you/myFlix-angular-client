/**
 * @module AppModule
 * @description The root module of the application that tells Angular how to assemble the application
 */

// Core imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';

// Components
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DirectorInfoComponent } from './director-info/director-info.component';
import { GenreInfoComponent } from './genre-info/genre-info.component';
import { AuthService } from './authorization/authorization.component';

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
      NavBarComponent,
      SearchFilterComponent,
      FavoriteMoviesComponent,
      MovieDetailComponent,
      DirectorInfoComponent,
      GenreInfoComponent
   ],
   imports: [         // Modules that are imported by this module
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      MatDialogModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatSnackBarModule,
      MatIconModule,
      MatToolbarModule,
      MatSelectModule,
      MatTooltipModule,
      MatOptionModule
   ],
   providers: [          // Providers of services that this module contributes to the global collection of services
      provideAnimationsAsync(),
      AuthService
   ],
   bootstrap: [AppComponent]      // The main application view, called the root component, that hosts all other app views
})
export class AppModule { }     // The root module class that tells Angular how to assemble the application
