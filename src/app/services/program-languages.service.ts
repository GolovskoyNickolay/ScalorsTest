import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramLanguagesService {

  constructor() { }
  fetchProgramLanguages(): string[] {
    return ['JavaScript', 'Java', 'C++', 'C#', 'Ruby', 'Go'];
  }
}
