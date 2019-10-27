import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MatSidenavModule } from "@angular/material";

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { LoginModule } from "./login/login.module";
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    CoreModule,
    //MatSidenavModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    SharedModule
    //BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
