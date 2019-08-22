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
  email = 'jeff.davis@att.net';

  course = {
    title: 'The  Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  text = ' Loren Ipsum is simply dummy text of the printing and typeset';

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event); }
  onDivClicked() { console.log('Div Button was clicked'); }


  onKeyUp() {
  console.log(this.email);
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
