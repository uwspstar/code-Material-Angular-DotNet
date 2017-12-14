import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileUploadService {

  constructor(private http: Http) { }

  OnUpload(URL, formData) {
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    this.http.post(URL, formData, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
      data => console.log('success'),
      error => console.log(error)
      );

  }
}
