import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
   selector: 'app-movie-detail',
   templateUrl: './movie-detail.component.html',
   styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
   movie: any = {};

   constructor(
      private route: ActivatedRoute,
      private router: Router,
      private fetchApiData: FetchApiDataService,
      public snackBar: MatSnackBar
   ) { }

   ngOnInit(): void {
      const movieTitle = this.route.snapshot.paramMap.get('title');
      console.log('Movie Title:', movieTitle);
      if (movieTitle) {
         this.getMovieDetails(movieTitle);
      } else {
         // Handle the case where movie title is null (e.g., navigate back to the movie list or show an error message)
         console.error('Movie Title is null');
         this.router.navigate(['movies']);
      }
   }

   getMovieDetails(title: string): void {
      this.fetchApiData.getOneMovie(title).subscribe((response: any) => {
         this.movie = response;
      }, (error) => {
         console.error('Error fetching movie details:', error);
      });
   }

   addToFavorites(movie: any): void {
      this.fetchApiData.addFavoriteMovie(movie._id).subscribe((response) => {
         this.snackBar.open(`${movie.Title} has been added to your favorites!`, 'OK', {
            duration: 2000
         });
      }, (error) => {
         this.snackBar.open('Failed to add to favorites', 'OK', {
            duration: 2000
         });
      });
   }

   viewGenre(genre: string): void {
      this.fetchApiData.getGenreInfo(genre).subscribe((response: any) => {
         console.log('Genre Info:', response);
         // Display genre info (use a modal or another method to show the info)
      }, (error) => {
         console.error('Error fetching genre info:', error);
      });
   }

   viewDirector(director: string): void {
      this.fetchApiData.getDirectorInfo(director).subscribe((response: any) => {
         console.log('Director Info:', response);
         // Display director info (use a modal or another method to show the info)
      }, (error) => {
         console.error('Error fetching director info:', error);
      });
   }

   goBack(): void {
      this.router.navigate(['movies']);
   }
}
