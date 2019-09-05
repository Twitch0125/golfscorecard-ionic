import { AjaxResponse, ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';

import { Course } from '../types/course';
import { Courses } from '../types/courses';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GolfCourseService {
  private selectedCourse: Course;
  private courseSelected: boolean = false;
  constructor() {}
  API_URL = 'https://golf-courses-api.herokuapp.com';

  getSelectedCourse(): Course {
    return this.selectedCourse;
  }

  getCourseSelected(): Observable<boolean> {
    return of(this.courseSelected);
  }

  getCourses(): Observable<AjaxResponse> {
    return ajax(`${this.API_URL}/courses`);
  }
  getCourseById(id: number): Observable<AjaxResponse> {
    return ajax(`${this.API_URL}/courses/${id}`);
  }
  setSelectedCourse(course: Course) {
    this.selectedCourse = course;
    this.courseSelected = true;
    this.getCourseSelected().subscribe(res => {
      console.log(res);
    });
  }
}
