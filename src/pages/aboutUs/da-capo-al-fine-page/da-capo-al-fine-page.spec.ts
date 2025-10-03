import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaCapoAlFinePage } from './da-capo-al-fine-page';

describe('DaCapoAlFinePage', () => {
  let component: DaCapoAlFinePage;
  let fixture: ComponentFixture<DaCapoAlFinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaCapoAlFinePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaCapoAlFinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
