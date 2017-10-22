import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule
    ]
})
export class MaterialModule { }
