import { Component } from '@angular/core';
import { da } from 'date-fns/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;
  switchTheme(dark){
    this.darkTheme = dark;
  }
}
