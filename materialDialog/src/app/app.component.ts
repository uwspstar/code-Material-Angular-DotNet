import { Component } from '@angular/core';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1 } // passing data to open dialog EditCouse
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }

}
