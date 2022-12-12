import { Component, ViewContainerRef } from '@angular/core';
import { BottomSheetProvider, BottomSheetContent } from "swipe-bottom-sheet/angular";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  output = "";

  constructor(private sheet:BottomSheetProvider,private vcRef:ViewContainerRef) {
    sheet.rootVcRef = vcRef;
  }
  
  async openSheet<T>(content:BottomSheetContent<T>) {
    this.output = "";
    
    const value = await this.sheet.show(content,{
      title:"My Sheet",
      stops:[190, 270]
    });

    this.output = value;
  }
}
