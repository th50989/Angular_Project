import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangtonodeComponent } from './changtonode.component';

describe('ChangtonodeComponent', () => {
  let component: ChangtonodeComponent;
  let fixture: ComponentFixture<ChangtonodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangtonodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangtonodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
