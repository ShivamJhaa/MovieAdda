import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {
  @Input() movies!: any;

  constructor(private ngbActiveModal: NgbActiveModal) { }

  cancel(): void {
    this.ngbActiveModal.dismiss('cancel');
  }

  ngOnInit(): void {
  }

}
