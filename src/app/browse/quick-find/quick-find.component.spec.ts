import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFindComponent } from './quick-find.component';

describe('QuickFindComponent', () => {
  let component: QuickFindComponent;
  let fixture: ComponentFixture<QuickFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
