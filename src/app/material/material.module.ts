import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const ModuleArr = [
  MatButtonModule,MatCardModule,MatCheckboxModule,MatChipsModule,MatDividerModule,
  MatFormFieldModule,MatIconModule,MatInputModule,MatProgressSpinnerModule,MatRadioModule,
  MatProgressSpinnerModule,MatSnackBarModule,MatSelectModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...ModuleArr]
  ],
  exports:[
    [...ModuleArr]
  ]
})
export class MaterialModule { }

