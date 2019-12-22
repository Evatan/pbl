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
  MatSidenavModule,
  MatButtonToggleModule
} from "@angular/material";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DirectiveModule } from "../directive/directive.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
// import { AgeInputComponent } from './age-input/age-input.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent, 
    ImageListSelectComponent, 
    // AgeInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
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
    DirectiveModule,
    MatButtonToggleModule,
    // AgeInputComponent
  ],
  exports:[
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
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
    DirectiveModule,
    ImageListSelectComponent,
    MatButtonToggleModule,
    // AgeInputComponent
  ],
  entryComponents: [ConfirmDialogComponent,]
})
export class SharedModule { }
