import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionPage } from './under-construction-page';

describe('UnderConstructionPage', () => {
  let component: UnderConstructionPage;
  let fixture: ComponentFixture<UnderConstructionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderConstructionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderConstructionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
