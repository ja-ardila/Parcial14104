import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { dataCafes } from '../dataCafes';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];

  blend:number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) =>{
      this.cafes = cafes;
    });
  }

  contarBlend():number{
    let blend = 0;
    for(let cafe of this.cafes){
      if(cafe.tipo == "Blend"){
        blend = blend + 1;
      }
    }
    return blend;
  }

  contarOrigen():number{
    let origen = 0;
    for(let cafe of this.cafes){
      if(cafe.tipo == "Café de Origen"){
        origen = origen + 1;
      }
    }
    return origen;
  }

  getDataCafes(): Array<Cafe> {
    return dataCafes;
  }

  ngOnInit() {
    this.getCafes();
    //this.cafes = this.getDataCafes();
  }

}
