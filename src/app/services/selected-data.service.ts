import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {RequestsService} from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedDataService {

  public selectedCategoryList = new Subject();

  constructor(private requestService: RequestsService) { }

  public selectCategory(categoryName: string): void {
    this.requestService.getSelectedCategoryList(categoryName).subscribe(
      (apiList) => {
        (this.selectedCategoryList.next(apiList));
        console.log(apiList);
      }
    );
  }
}
