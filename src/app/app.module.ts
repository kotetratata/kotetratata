import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiListComponent } from './components/api-list/api-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { SelectedApiComponent } from './components/selected-api/selected-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiListComponent,
    CategoryListComponent,
    SelectedApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
