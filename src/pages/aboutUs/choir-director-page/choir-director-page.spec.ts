import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoirDirectorPage } from './choir-director-page';

describe('ChoirDirectorPage', () => {
  let component: ChoirDirectorPage;
  let fixture: ComponentFixture<ChoirDirectorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoirDirectorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoirDirectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
