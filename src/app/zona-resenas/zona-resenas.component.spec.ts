import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaResenasComponent } from './zona-resenas.component';

describe('ZonaResenasComponent', () => {
  let component: ZonaResenasComponent;
  let fixture: ComponentFixture<ZonaResenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaResenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
