import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie = [20,21,22,23,24,25,26,27]
  constructor() { }

  ngOnInit(): void {
  }

}
