import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestimentoService } from '../lista-de-investimento/service/investimento.service';
import { InvestimentoModel } from '../lista-de-investimento/model/investimento';

@Component({
  selector: 'app-resgate-personalizado',
  templateUrl: './resgate-personalizado.component.html',
  styleUrls: ['./resgate-personalizado.component.scss']
})
export class ResgatePersonalizadoComponent implements OnInit {

  investimentos!: any[];
  nomeInvestimento!: string;
  nome!: string;
  objetivo!: string;
  saldoTotal!: string;
  dadosPreencherTabela!: any
  valorResgate!: string

  constructor(private route: ActivatedRoute, private investimentoService: InvestimentoService,) {
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
        this.dadosPreencherTabela = this.investimentos[0].acoes
      },
      (error) => {
      }
    );
  }

  somarResgate(event: any) {
    let totalResgate = 0;
    for (let investimento of this.dadosPreencherTabela) {
        if (investimento.valorResgate) {
            let valor = investimento.valorResgate.toString().replace(/\D/g, '');
            if (valor !== '') {
              totalResgate += parseFloat(valor)/100;
            }
        }
    }
    console.log("Valor total do resgate: R$ " + totalResgate.toLocaleString('pt-BR', {minimumFractionDigits: 2}));
    this.valorResgate = "R$ " + totalResgate.toLocaleString('pt-BR', {minimumFractionDigits: 2});
    return this.valorResgate
}

}
