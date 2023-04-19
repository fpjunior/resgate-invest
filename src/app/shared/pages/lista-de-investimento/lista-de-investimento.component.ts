import { Component, OnInit } from '@angular/core';
import { InvestimentoService } from './service/investimento.service';
import { InvestimentoModel } from './model/investimento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-investimento',
  templateUrl: './lista-de-investimento.component.html',
  styleUrls: ['./lista-de-investimento.component.scss']
})
export class ListaDeInvestimentoComponent implements OnInit {

  investimentos!: InvestimentoModel[];

  constructor(private investimentoService: InvestimentoService, private router: Router) { }

  ngOnInit() {
    this.getAllInvestimentos()
  }

  private getAllInvestimentos() {
    this.investimentoService.getInvestimentos().subscribe(
      (data: any) => {
        this.investimentos = data.response.data?.listaInvestimentos;
        console.log(this.investimentos);
      },
      (error) => {
      }
    );
  }

  resgatarInvestimento(nomeInvestimento: string){
    this.router.navigate(['/resgate-personalizado'], { queryParams: { nomeInvestimento: nomeInvestimento } });
  }

}
