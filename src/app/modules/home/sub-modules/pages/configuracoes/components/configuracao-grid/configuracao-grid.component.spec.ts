import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoGridComponent } from './configuracao-grid.component';

describe('ConfiguracaoGridComponent', () => {
  let component: ConfiguracaoGridComponent;
  let fixture: ComponentFixture<ConfiguracaoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracaoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
