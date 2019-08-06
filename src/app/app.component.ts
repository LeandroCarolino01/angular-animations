import { Component } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(100, style({opacity: 1}))
      ]) 
    ])
  ]
}) 

export class AppComponent {
   popup: any = [];
   text = 'got any questions, I am glad to help';

   add() {
     this.popup.push(this.text);
   }

   onDelete(){
     this.popup = this.popup.filter(text => text !== text);
   }

   
}
