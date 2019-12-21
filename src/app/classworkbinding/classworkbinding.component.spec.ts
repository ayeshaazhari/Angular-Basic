import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassworkbindingComponent } from './classworkbinding.component';

describe('ClassworkbindingComponent', () => {
  let component: ClassworkbindingComponent;
  let fixture: ComponentFixture<ClassworkbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassworkbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassworkbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
