import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditCourseComponent, DIALOG_DATA } from './edit-course/edit-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NoopAnimationsModule
  ],
  providers: [
    // CourseService, // shortway DI { provide: CourseService, useClass: CourseService }
    { provide: CourseService, useClass: CourseService },
    { provide: DIALOG_DATA, useValue: {} }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
