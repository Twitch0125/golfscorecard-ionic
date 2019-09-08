import { Component, OnInit } from '@angular/core';

import { Course } from '../types/course';
import { GolfCourseService } from '../api/golf-course.service';
import { Hole } from '../types/hole';
import { TeeBox } from '../types/tee-box';
import { TeeType } from '../types/tee-type.enum';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  course: Course;
  teeType: TeeType;
  teeTypeId: number;
  holes: Hole[];
  constructor(private courseService: GolfCourseService) {}
  ngOnInit() {
    this.course = this.courseService.getSelectedCourse();
    console.log(this.course);
  }

  setScoreCard() {
    console.log('setting score card');
    const logType = () => console.log(this.teeType);
    console.log('this.course setScoreCard()', this.course);
    this.course = this.courseService.getSelectedCourse();

    switch (this.teeType) {
      case 'pro':
        this.teeTypeId = 1;
        logType();
        break;
      case 'champion':
        this.teeTypeId = 2;
        logType();
        break;
      case 'men':
        this.teeTypeId = 3;
        logType();
        break;
      case 'women':
        this.teeTypeId = 4;
        logType();
        break;
    }

    this.holes = this.course.holes.map((hole, index) => {
      for (let i = 0; i < hole.teeBoxes.length; i++) {
        console.log(this.teeType);

        if (hole.teeBoxes[i].teeType === this.teeType) {
          let newTeeBoxes: TeeBox[] = [];
          newTeeBoxes.push(hole.teeBoxes[i]);
          hole.teeBoxes = newTeeBoxes;
        }
      }
      return hole;
    });
    console.log('this.holes', this.holes);
  }
}
