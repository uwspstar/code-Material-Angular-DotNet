import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor() {
    /*
        let user: any = {};
        user.name = 'Mooooo';
    */


    interface Course {
      name: string;
      lessonCount?: number;
    }

    interface Named {
      name: string;
    }

    // tslint:disable-next-line:prefer-const
    let named: Named = {
      name: 'Name goes here'
    };

    // tslint:disable-next-line:prefer-const
    let course: Course = {
      name: 'Components',
      lessonCount: 1
    };

    named = course;
    course = named;

    course.name = 'Components and Directives';
    course.lessonCount = 20;

    console.log(course);


  }






}
