import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  tipologia:string;
  categoria:string;
  codice:string;
  estensione:string;
  immagine:string;

  constructor() { 
  this.tipologia = 'Giochi';
  this.categoria = 'Bambini';
  this.codice = '040';
  this.estensione = 'png';
  this.immagine = ''
 }
}
