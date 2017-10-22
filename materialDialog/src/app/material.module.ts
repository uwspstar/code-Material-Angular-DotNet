import { NgModule } from '@angular/core';

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
