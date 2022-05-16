import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailCardComponent } from '../detail-card/detail-card.component';
import { ServiceService } from '../service/service.service';

export interface MoviesData {
  name: string;
  posterLink: string;
  description: string;
  release: string;
  rating: string;
  duration: string;
  trailerLink: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movieIndex!: number;
  movies!: any;

  constructor(private modalService: NgbModal,
    private movieService: ServiceService) {}

  openNewCard(): void {
    const modal = this.modalService.open(DetailCardComponent, 
      {size: 'lg', centered:true});
    modal.componentInstance.movies = this.movies;
    modal.componentInstance.movieIndex = this.movieIndex;
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.movieIndex).subscribe((data) => {
      this.movies = data[0];
    })
  }
}
