import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items!: MenuItem[];


  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Investimentos', icon: 'pi pi-fw pi-file', routerLink: '/lista-de-investimento'  },
      { label: 'Resgates', icon: 'pi pi-fw pi-calendar', routerLink: '/resgate-personalizado'  },
  ];
  }

}
