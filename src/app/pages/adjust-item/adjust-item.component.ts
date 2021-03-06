import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-adjust-item',
  templateUrl: './adjust-item.component.html',
  styleUrls: ['./adjust-item.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.5s ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AdjustItemComponent implements OnInit {
  openSubList = '';
  qty = 1;

  constructor() { }

  ngOnInit(): void {
  }

  selectSize(e, type) {
    this.openSubList = type;
  }
  selectColor(e, type) {
    this.openSubList = type;
  }

  quantityUp(e) {
    this.qty = this.qty >= 10 ? this.qty : this.qty + 1;
  }
  quantityDown(e) {
    this.qty = this.qty <= 1 ? 1 : this.qty - 1;
  }

}
