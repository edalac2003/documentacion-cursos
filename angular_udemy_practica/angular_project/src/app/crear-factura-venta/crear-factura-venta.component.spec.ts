import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacturaVentaComponent } from './crear-factura-venta.component';

describe('CrearFacturaVentaComponent', () => {
    let component: CrearFacturaVentaComponent;
    let fixture: ComponentFixture<CrearFacturaVentaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CrearFacturaVentaComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CrearFacturaVentaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
