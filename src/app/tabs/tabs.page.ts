import { Component, DoCheck, OnInit } from '@angular/core';

import { GolfCourseService } from '../api/golf-course.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, DoCheck {
  constructor(private courseService: GolfCourseService) {}
  courseSelected: boolean;
  ngOnInit(): void {}

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    this.courseService
      .getCourseSelected()
      .subscribe(course => (this.courseSelected = course));
  }
}
