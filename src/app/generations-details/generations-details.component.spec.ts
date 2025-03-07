import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationsDetailsComponent } from './generations-details.component';

describe('GenerationsDetailsComponent', () => {
  let component: GenerationsDetailsComponent;
  let fixture: ComponentFixture<GenerationsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
