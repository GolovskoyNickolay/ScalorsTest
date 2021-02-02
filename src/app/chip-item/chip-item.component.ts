import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss']
})
export class ChipItemComponent implements OnInit {
  @Input() name = '';
  constructor() { }

  ngOnInit(): void {
  }

}
