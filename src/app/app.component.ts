import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  content: any=[]
  loading: boolean=true;
  constructor (){
    }
  ngOnInit(): void{
      setTimeout(()=>{
      this.setData();
  }, 3000);
}
  setData() {
      this.loading = false;
      this.content=[{
      title: 'Formacion Academica',
      img: 'https://ubiobio.cl/w/img/Escudo-UBB.svg',
      date: '[2014-2022]',
      Text: 'Ingenieria Civil Informatica'
    },
    {
      title: 'Experiencia Laboral',
      img:  'assets/biopal.PNG',
      date: '[2020-2022]',
      Text: 'Digitalizar boletas y facturas'

    }
     
  ]}
}
