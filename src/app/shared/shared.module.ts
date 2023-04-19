import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeInvestimentoComponent } from './pages/lista-de-investimento/lista-de-investimento.component';
import { HomeComponent } from './pages/home/home.component';
import { ResgatePersonalizadoComponent } from './pages/resgate-personalizado/resgate-personalizado.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { RealBrasilMaskDirective } from './util/regex-money.directive';
import { DialogModule } from 'primeng/dialog';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-de-investimento', component: ListaDeInvestimentoComponent },
  { path: 'resgate-personalizado', component: ResgatePersonalizadoComponent },
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TabMenuModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    DialogModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent,
    ListaDeInvestimentoComponent,
    ResgatePersonalizadoComponent,
    RealBrasilMaskDirective

  ],
})
export class SharedModule { }
