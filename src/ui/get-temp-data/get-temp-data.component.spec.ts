import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTempDataComponent } from './get-temp-data.component';

describe('GetTempDataComponent', () => {
  let component: GetTempDataComponent;
  let fixture: ComponentFixture<GetTempDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTempDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTempDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
