import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss']
})
export class ChipItemComponent implements OnInit {
  @Input() name = '';
  @Output() removeLanguageEmitter = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  remove(): void {
    this.removeLanguageEmitter.emit(this.name);
  }
}
