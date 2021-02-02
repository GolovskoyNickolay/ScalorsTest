import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ProgramLanguagesService} from '../services/program-languages.service';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: ChipInputComponent, multi: true}
  ]
})
export class ChipInputComponent implements OnInit {
  @ViewChildren('elementsList') elementsList!: QueryList <ElementRef>;
  @ViewChild('searchBar') searchBar!: ElementRef <HTMLElement>;
  allLanguages: string[] = [];
  foundedLanguages: string[] = [];
  filteredLanguages: string[] = [];
  onChange = (languages: string[]) => null;
  onTouch = () => null;
  constructor(private programLanguagesService: ProgramLanguagesService) { }
  ngOnInit(): void {
    this.allLanguages = this.programLanguagesService.fetchProgramLanguages();
  }
  findLanguage(searchedString: string): void {
    if (!searchedString) {
      this.filteredLanguages = [];
      return;
    }
    this.filteredLanguages = this.allLanguages.
    filter((l) => {
      return l.toLowerCase().includes(searchedString.toLowerCase()) && !this.foundedLanguages.some(fL => fL === l);
    });
  }
  addToFounded(language: string): void {
    const idx = this.filteredLanguages.indexOf(language);
    this.filteredLanguages.splice(idx, 1);
    this.foundedLanguages.push(language);
  }
  removeLanguage(language: string): void{
    const idx = this.foundedLanguages.indexOf(language);
    this.foundedLanguages.splice(idx, 1);
  }
  removeItemsOnBackSpace(inputValue: string): void {
    if (!inputValue && this.foundedLanguages.length > 0) {
      this.foundedLanguages.splice(this.foundedLanguages.length - 1, 1);
    }
  }
  changeFocus(indexElementToFocus: number, isUp?: boolean): void {
    if (isUp && indexElementToFocus === -1) {
    this.searchBar.nativeElement.focus();
  }
    this.elementsList.forEach((item, index) => {
      if (index === indexElementToFocus) {
          item.nativeElement.focus();
        }
    });
  }
  // mandatory methods for value accessor
  registerOnChange(fn: () => null): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => null): void {
    this.onTouch = fn;
  }
  writeValue(value: string[]): void {
    this.foundedLanguages = value;
  }
  blurHandler(): void {
    this.onTouch();
  }
}
