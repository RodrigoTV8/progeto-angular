import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoEdicaoComponent } from './atendimento-edicao.component';

describe('AtendimentoEdicaoComponent', () => {
  let component: AtendimentoEdicaoComponent;
  let fixture: ComponentFixture<AtendimentoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendimentoEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
