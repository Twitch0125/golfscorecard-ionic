import { Component, OnInit } from '@angular/core';

import { Courses } from '../types/courses';
import { GolfCourseService } from '../api/golf-course.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  courses: Courses[];
  constructor(
    private courseService: GolfCourseService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(res => {
      this.courses = res.response.courses;
    });
    console.log();
  }

  handleClick(id: number) {
    this.courseService
      .getCourseById(id)
      .subscribe(res => {
        this.courseService.setSelectedCourse(res.response.data);
        console.log(this.courseService.getSelectedCourse());
      })
      .unsubscribe();

    this.navCtrl.navigateForward('');
  }
}
