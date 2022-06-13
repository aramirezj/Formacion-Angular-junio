import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionLibroComponent } from './creacion-libro.component';

describe('CreacionLibroComponent', () => {
  let component: CreacionLibroComponent;
  let fixture: ComponentFixture<CreacionLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
