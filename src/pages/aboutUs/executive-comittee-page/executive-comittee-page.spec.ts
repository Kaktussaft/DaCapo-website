import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveComitteePage } from './executive-comittee-page';

describe('ExecutiveComitteePage', () => {
  let component: ExecutiveComitteePage;
  let fixture: ComponentFixture<ExecutiveComitteePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveComitteePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveComitteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
