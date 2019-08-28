import { Course } from '../types/course';
import { Courses } from '../types/courses';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class GolfCourseService {
  constructor() {}

  getCourses(): Observable<any> {
    return ajax('https://golf-courses-api.herokuapp.com/courses');
  }
}
