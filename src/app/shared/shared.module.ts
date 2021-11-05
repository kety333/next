import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFooterComponent } from './components/next-footer/next-footer.component';
import { NextHeaderComponent } from './components/next-header/next-header.component';
import { TxtoverflowPipe } from './pipe/txtoverflow.pipe';
import { HighlightPipe } from './pipe/highlight.pipe';


@NgModule({
    declarations: [
        NextFooterComponent,
        NextHeaderComponent,
        TxtoverflowPipe,
        HighlightPipe,

    ],
  exports: [
    NextHeaderComponent,
    NextFooterComponent,
    TxtoverflowPipe
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
