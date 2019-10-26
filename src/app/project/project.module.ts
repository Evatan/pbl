import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import { ProjectItemComponent } from "./project-item/project-item.component";
import { ProjectRoutingModule } from "./project-routing.module";

@NgModule({
  declarations: [
    ProjectListComponent, 
    NewProjectComponent, 
    InviteComponent,
    ProjectItemComponent
  ],
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  entryComponents:[
    NewProjectComponent,
    InviteComponent,
  ]
})
export class ProjectModule { }
