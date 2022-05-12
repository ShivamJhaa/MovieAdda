import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {
  @Input() index!: number;

  constructor(private ngbActiveModal: NgbActiveModal,
    private router: Router) { }

  cancel(): void {
    this.ngbActiveModal.dismiss('cancel');
  }

  ngOnInit(): void {
  }

}
