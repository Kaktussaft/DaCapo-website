import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleTextSection } from './collapsible-text-section';

describe('CollapsibleTextSection', () => {
  let component: CollapsibleTextSection;
  let fixture: ComponentFixture<CollapsibleTextSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleTextSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsibleTextSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
