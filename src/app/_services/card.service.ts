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
export class CardService {
  constructor(private http: HttpClient) { }
  // GetPortfolioImagesFront(): any{
  //     return this.http.post(environment.API_ENDPOINT + environment.GET_PORTFOLIO_IMAGE_FRONT);
  // }
  GetPortfolioImageFront(value): any{
    return this.http.post(environment.API_ENDPOINT + environment.GET_PORTFOLIO_IMAGE_FRONT, value);
}

}
