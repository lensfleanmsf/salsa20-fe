import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherImageComponent } from './cipher-image.component';

describe('CipherImageComponent', () => {
  let component: CipherImageComponent;
  let fixture: ComponentFixture<CipherImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CipherImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CipherImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
