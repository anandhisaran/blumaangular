import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
 import { observable } from 'rxjs';
import {
  environment
} from '../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }
  ListBackgroundImageFront(): any{
      return this.http.get(environment.API_ENDPOINT + environment.LIST_BACKGROUND_IMAGE_FRONT);
  };
  ListJobsFront(): any {
return this.http.get(environment.API_ENDPOINT + environment.GET_JOBS_LIST);
  }
}
