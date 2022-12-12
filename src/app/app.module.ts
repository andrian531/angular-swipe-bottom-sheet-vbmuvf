import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BottomSheetModule } from "swipe-bottom-sheet/angular";

@NgModule({
  imports:      [ BrowserModule, FormsModule, BottomSheetModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
