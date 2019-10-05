import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaNoticiasComponent } from './zona-noticias.component';

describe('ZonaNoticiasComponent', () => {
  let component: ZonaNoticiasComponent;
  let fixture: ComponentFixture<ZonaNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
