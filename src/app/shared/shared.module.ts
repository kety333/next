import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFooterComponent } from './components/next-footer/next-footer.component';
import { NextHeaderComponent } from './components/next-header/next-header.component';
import { TxtoverflowPipe } from './pipe/txtoverflow.pipe';
import { HighlightPipe } from './pipe/highlight.pipe';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        NextFooterComponent,
        NextHeaderComponent,
        TxtoverflowPipe,
        HighlightPipe,
        SearchComponent,

    ],
  exports: [
    NextHeaderComponent,
    NextFooterComponent,
    TxtoverflowPipe,
    HighlightPipe,
    SearchComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
