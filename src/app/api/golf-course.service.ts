import { AjaxResponse, ajax } from 'rxjs/ajax';

import { Course } from '../types/course';
import { Courses } from '../types/courses';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GolfCourseService {
  private selectedCourse: Course;
  constructor() {}
  API_URL = 'https://golf-courses-api.herokuapp.com';

  getSelectedCourse(): Course {
    return this.selectedCourse;
  }

  getCourses(): Observable<AjaxResponse> {
    return ajax(`${this.API_URL}/courses`);
  }
  getCourseById(id: number): Observable<AjaxResponse> {
    return ajax(`${this.API_URL}/courses/${id}`);
  }
  setSelectedCourse(course: Course) {
    this.selectedCourse = course;
  }
}
