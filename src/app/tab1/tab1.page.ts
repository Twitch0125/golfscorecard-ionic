import { Component } from '@angular/core';
import { GolfCourseService } from '../api/golf-course.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private coursesService: GolfCourseService) {}

  courses = this.coursesService.getCourses();
}
