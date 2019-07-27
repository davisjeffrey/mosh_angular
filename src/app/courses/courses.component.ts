import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {

  title = 'List of Courses';
  courses = ['course1', 'course2', 'course3'];

}
