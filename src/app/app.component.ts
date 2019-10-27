import { Component, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
//import {  } from 'date-fns/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  darkTheme = false;

  constructor(private oc: OverlayContainer){}

  switchTheme(dark){
    this.darkTheme = dark;
    this.oc.getContainerElement().classList.add(this.darkTheme? 'myapp-dark-theme' : null);
  }
}
