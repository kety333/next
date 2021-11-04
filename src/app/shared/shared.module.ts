import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFooterComponent } from './components/next-footer/next-footer.component';
import { NextHeaderComponent } from './components/next-header/next-header.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
    declarations: [
        NextFooterComponent,
        NextHeaderComponent,
        SearchComponent
    ],
  exports: [
    NextHeaderComponent,
    NextFooterComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
