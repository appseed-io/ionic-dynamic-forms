import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FormConfigService {
  readonly BASEURL = 'https://s3.amazonaws.com/dev.appseed.io/mobile-apps/demo-angular-dynamic-forms/';

  constructor(private http: Http) { }

  public getFormConfig(filename) {
    return this.http.get(this.BASEURL + filename);
  }


}
