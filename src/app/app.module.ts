import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipInputComponent } from './chip-input/chip-input.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ChipItemComponent } from './chip-item/chip-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipInputComponent,
    ChipItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
