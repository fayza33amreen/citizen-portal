import { NgModule } from '@angular/core';
import { 
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatIconModule,
    MatInputModule, 
    MatSelectModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule,
    MatFormFieldModule } from '@angular/material';    
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
        
      ],

      exports: [
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
      ],
})
export class MaterialModule { }