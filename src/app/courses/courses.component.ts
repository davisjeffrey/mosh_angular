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
  isActive = true;

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event); }
  onDivClicked() { console.log('Div Button was clicked'); }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
