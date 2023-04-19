import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
  ],
})
export class SharedModule { }
