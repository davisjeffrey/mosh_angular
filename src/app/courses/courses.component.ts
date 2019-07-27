import { CoursesService } from '../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  courses;
  title = 'List of Courses';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
