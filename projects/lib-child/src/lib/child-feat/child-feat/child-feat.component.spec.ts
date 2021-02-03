import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFeatComponent } from './child-feat.component';

describe('ChildFeatComponent', () => {
  let component: ChildFeatComponent;
  let fixture: ComponentFixture<ChildFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
