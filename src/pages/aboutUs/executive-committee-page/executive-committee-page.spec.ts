import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveCommitteePage } from './executive-committee-page';

describe('ExecutiveCommitteePage', () => {
  let component: ExecutiveCommitteePage;
  let fixture: ComponentFixture<ExecutiveCommitteePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveCommitteePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveCommitteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
