import { NgModule, SkipSelf, Optional } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { loadSvgResources } from '../utils/svg.util';
import { AppRoutingModule } from '../app-routing.module';

import 'hammerjs';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    AppRoutingModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()  
    @SkipSelf() 
    parent: CoreModule,
    ir:MatIconRegistry,
    ds:DomSanitizer,
    ){
    if (parent){
      throw new Error("模块已经存在，不能再次加载！")
    }
    loadSvgResources(ir, ds);
  }
 }
