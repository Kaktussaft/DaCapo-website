import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorPage } from './sponsor-page';

describe('SponsorPage', () => {
  let component: SponsorPage;
  let fixture: ComponentFixture<SponsorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
