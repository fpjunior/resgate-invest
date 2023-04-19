import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestimentoService } from '../lista-de-investimento/service/investimento.service';
import { InvestimentoModel } from '../lista-de-investimento/model/investimento';

@Component({
  selector: 'app-resgate-personalizado',
  templateUrl: './resgate-personalizado.component.html',
  styleUrls: ['./resgate-personalizado.component.scss']
})
export class ResgatePersonalizadoComponent implements OnInit {

  @ViewChild('btnSalvar') btnSalvar!: ElementRef;

  investimentos!: any;
  nomeInvestimento!: string;
  nome!: string;
  objetivo!: string;
  saldoTotal!: string;
  dadosPreencherTabela!: any
  valorResgate!: string;
  showModalError: boolean = false;
  showModalSuccess: boolean = false;
  contentMessage: string = '';
  modalTitle: string = 'Resgate Efetuado com sucesso!';
  msgError = ''
  labelBtnModal = 'NOVO RESGATE'
  disableBtn: boolean = true
  mensagemResgate: string = '';
  constructor(
    private route: ActivatedRoute,
    private investimentoService: InvestimentoService,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.nome = params['nomeInvestimento'];
    });
  }

  ngOnInit() {
    this.getAllInvestimentos()
  }

  private getAllInvestimentos() {
    this.investimentoService.getInvestimentos().subscribe(
      (data: any) => {
        this.investimentos = data.response.data?.listaInvestimentos.filter((e: any) => {
          return e.nome === this.nome
        })
        this.objetivo = this.investimentos[0].objetivo
        this.saldoTotal = this.investimentos[0].saldoTotal
        this.dadosPreencherTabela = this.investimentos[0].acoes
      },
      (error) => {
      }
    );
  }

  verificarCondicoesInvestimentos(): string | null {
    let mensagemResgate = '';
    for (let investimento of this.investimentos[0].acoes) {
      let vPercentual = Math.trunc(investimento.percentual * 100);
      let vResgate = parseFloat(investimento.valorResgate?.replace(/[^0-9.-]+/g, ''));
      if(vResgate){
        if (vResgate > vPercentual) {
          mensagemResgate += `${investimento.nome}: O valor a resgatar não pode ser maior que ${this.formatCurrency(vPercentual)}\n`;
        }
      }

    }
    return mensagemResgate !== '' ? mensagemResgate : null;
  }

  somarResgate() {
    let mensagemErro = this.verificarCondicoesInvestimentos();
    if (mensagemErro) {
      // Exibir modal de erro
      this.showModalError = true;
      this.mensagemResgate = mensagemErro;
    } else {
      // Realizar o resgate e exibir modal de sucesso
      // ...
      this.showModalSuccess = true;
    }
  }

  returnList() {
      this.router.navigate(['/lista-de-investimento']);
  }

  private formatCurrency(value: number) {
    return (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  getInfoInput(event: string, rowValue: { percentual: number, nome: string }) {
    const ALLOWED_VALUES = ['R$', '', 'R$ 0,0'];
    const allowedValue = ALLOWED_VALUES.includes(event);
    const value = parseFloat(event.replace(/[^0-9.-]+/g, ''));
    let newValue = Math.trunc(rowValue.percentual * 100);
    if (value > newValue) {
      this.contentMessage = 'Você preencheu um ou mais campos com um valor acima do permitido:'
      this.disableBtn = true;
    }
    this.disableBtn = allowedValue ? true : false;
  }

}
