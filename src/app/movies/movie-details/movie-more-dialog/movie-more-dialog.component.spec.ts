import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMoreDialogComponent } from './movie-more-dialog.component';

describe('MovieMoreDialogComponent', () => {
  let component: MovieMoreDialogComponent;
  let fixture: ComponentFixture<MovieMoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
