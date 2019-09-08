import { Component, OnInit } from '@angular/core';

import { Course } from '../types/course';
import { GolfCourseService } from '../api/golf-course.service';
import { TeeType } from '../types/tee-type.enum';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  course: Course;
  teeType: TeeType;
  teeTypeId: TeeType;
  constructor(private courseService: GolfCourseService) {}
  ngOnInit() {
    this.course = this.courseService.getSelectedCourse();
    console.log(this.course);
    console.log(this.course.holes[0].teeBoxes[0]);
  }
}
