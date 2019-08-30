import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

import { Courses } from '../types/courses';
import { GolfCourseService } from '../api/golf-course.service';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  courses: Courses[];
  constructor(
    private courseService: GolfCourseService,
    public navCtrl: NavController,
    private loader: LoadingController
  ) {}

  async ngOnInit() {
    let loading = await this.loader.create({
      message: 'getting courses...'
    });
    loading.present();
    this.courseService.getCourses().subscribe(res => {
      this.courses = res.response.courses;
      loading.dismiss();
    });
  }

  handleClick(id: number) {
    this.courseService.getCourseById(id).subscribe(res => {
      this.courseService.setSelectedCourse(res.response.data);
      console.log(this.courseService.getSelectedCourse());
    });

    this.navCtrl.navigateForward('tabs/tab2');
  }
}
