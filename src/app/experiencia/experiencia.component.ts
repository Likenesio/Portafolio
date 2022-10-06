import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experience: any=[]
  constructor() { }

  ngOnInit(): void {
    this.experience=[{
      title:'Biopal',
      Text: 'Hola',
      img: 'assets/biopal.PNG',
      date:'[2020-2022]'
  }]
  }
 
}
