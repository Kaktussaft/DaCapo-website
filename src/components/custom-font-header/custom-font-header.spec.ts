import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFontHeader } from './custom-font-header';

describe('CustomFontHeader', () => {
  let component: CustomFontHeader;
  let fixture: ComponentFixture<CustomFontHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFontHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFontHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
