import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeatComponent } from './main-feat.component';

describe('MainFeatComponent', () => {
  let component: MainFeatComponent;
  let fixture: ComponentFixture<MainFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
