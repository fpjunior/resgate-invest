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
    TableModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    ListaDeInvestimentoComponent,
    ResgatePersonalizadoComponent
  ],
})
export class SharedModule { }
