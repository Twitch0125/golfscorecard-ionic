import { Component, OnInit } from '@angular/core';

import { GolfCourseService } from '../api/golf-course.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  constructor(private courseService: GolfCourseService) {}
  courseSelected = false;
  ngOnInit(): void {
    this.courseService
      .getCourseSelected()
      .subscribe(course => (this.courseSelected = course));
    console.log(this.courseSelected);
  }
}
