export interface InvestimentoModel {
  nome: string;
  objetivo: string;
  saldoTotal: number;
  indicadorCarencia: string;
  acoes: Acao[];
}

export interface Acao {
  id: string;
  nome: string;
  percentual: number;
}
