import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../services/requests.service';
import {transformToQueryParamsFormat} from '../../extras/transformToQueryParamsFormat';
import {SelectedDataService} from '../../services/selected-data.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent implements OnInit {

  public list;

  constructor(public requests: RequestsService,
              public selectedData: SelectedDataService) { }

  ngOnInit(): void {

    this.list = this.requests.getMainList();
    this.list.subscribe(
      (value) => console.log(value)
    );
  }

  private selectCategory(event): void {
    const categoryName = transformToQueryParamsFormat(event.target.innerHTML);
    this.selectedData.selectCategory(categoryName);
  }
}
