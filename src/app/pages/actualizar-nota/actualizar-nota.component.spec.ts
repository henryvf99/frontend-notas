import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarNotaComponent } from './actualizar-nota.component';

describe('ActualizarNotaComponent', () => {
  let component: ActualizarNotaComponent;
  let fixture: ComponentFixture<ActualizarNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
