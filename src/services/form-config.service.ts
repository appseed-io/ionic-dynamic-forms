import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FormConfigService {
  readonly BASEURL = 'https://dev.appseed.io.s3.amazonaws.com/mobile-apps/demo-angular-dynamic-forms/';

  constructor(private http: Http) { }

  public getFormConfig(filename) {    
    return this.http.get(this.BASEURL + filename);
  }


}
