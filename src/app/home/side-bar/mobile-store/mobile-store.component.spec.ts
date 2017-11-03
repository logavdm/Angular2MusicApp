import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStoreComponent } from './mobile-store.component';

describe('MobileStoreComponent', () => {
  let component: MobileStoreComponent;
  let fixture: ComponentFixture<MobileStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
