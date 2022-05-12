import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DetailCardComponent } from '../detail-card/detail-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movieIndex!: number;
  closeResult!: string;

  constructor(private modalService: NgbModal) {}

  openNewCard(): void {
    this.modalService.open(DetailCardComponent, {size: 'lg', centered:true, backdrop: 'static'}).result.then((result) => {
      this.closeResult = 'close';
    }, (reason) => {
      this.closeResult = 'Dismissed';
    });
  }

  ngOnInit(): void {
  }

}
