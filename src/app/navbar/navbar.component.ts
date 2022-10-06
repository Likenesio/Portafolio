import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
  }
  items: MenuItem[]=[];

  ngOnInit() {
      this.items = [
          {
              label: 'Archivo',
              items: [{
                      label: 'Nuevo', 
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {label: 'Proyecto'},
                          {label: 'Otros'},
                      ]
                  },
                  {label: 'Abrir'},
                  {label: 'Salir'}
              ]
          },
          {
              label: 'Editar',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Eliminar', icon: 'pi pi-fw pi-trash'},
                  {label: 'Actualizar', icon: 'pi pi-fw pi-refresh'}
              ]
          }
      ];
  }
}
