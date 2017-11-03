import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandComponent } from './recommand.component';

describe('RecommandComponent', () => {
  let component: RecommandComponent;
  let fixture: ComponentFixture<RecommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
