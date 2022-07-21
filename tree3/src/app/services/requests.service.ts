import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  public getMainList(): any{
    return this.http.get('https://api.publicapis.org/categories');
  }

  public getSelectedCategoryList(categoryName: string): any {
    return this.http.get(`https://api.publicapis.org/entries?category=${categoryName}`);
  }
}
