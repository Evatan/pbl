import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule, 
  MatIconModule, 
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule
} from "@angular/material";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DirectiveModule } from "../directive/directive.module";

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule, 
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    DirectiveModule
  ],
  exports:[
    CommonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatInputModule, 
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    DirectiveModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
