import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFooter } from './new-footer';

describe('NewFooter', () => {
  let component: NewFooter;
  let fixture: ComponentFixture<NewFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
