import { Component, OnInit } from '@angular/core';
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
  allLanguages: string[] = [];
  foundedLanguages: string[] = [];
  filteredLanguages: string[] = [];
  onChange = (languages: string[]) => null;
  onTouch = () => null;
  constructor(private programLanguagesService: ProgramLanguagesService) { }
  ngOnInit(): void {
    this.allLanguages = this.programLanguagesService.fetchProgramLanguages();
  }
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
  findLanguage(searchedString: string): void {
    this.filteredLanguages = this.allLanguages.filter((l) => {
      return l.includes(searchedString);
    });
  }
  addToFounded(language: string): void {
    this.foundedLanguages.push(language);
  }
}
