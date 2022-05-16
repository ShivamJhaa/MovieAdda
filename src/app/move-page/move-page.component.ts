import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-move-page',
  templateUrl: './move-page.component.html',
  styleUrls: ['./move-page.component.css']
})
export class MovePageComponent implements OnInit {
  movies: any;
  movieIndex: any;
  trailerLink!: string;

  constructor (
    private route: ActivatedRoute,
    private movieService: ServiceService
  ) { }

  ngOnInit(): void {
    this.movieIndex = JSON.parse(this.route.snapshot.paramMap.get('movieIndex') as string);
    this.movieService.getMovie(this.movieIndex).subscribe((data) => {
      this.movies = data[0];
    })
  }
}
