import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeProductoComponent } from './lista-de-producto.component';

describe('ListaDeProductoComponent', () => {
  let component: ListaDeProductoComponent;
  let fixture: ComponentFixture<ListaDeProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
