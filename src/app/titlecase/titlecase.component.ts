import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '../title-case.pipe';

@Component({
  selector: 'app-titlecase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent  {

title: string;

}
