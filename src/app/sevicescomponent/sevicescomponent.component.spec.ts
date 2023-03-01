import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevicescomponentComponent } from './sevicescomponent.component';

describe('SevicescomponentComponent', () => {
  let component: SevicescomponentComponent;
  let fixture: ComponentFixture<SevicescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevicescomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevicescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
