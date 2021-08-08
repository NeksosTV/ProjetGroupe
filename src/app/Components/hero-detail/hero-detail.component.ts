import { TesteService } from './../../servies/teste.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : any;

  constructor(private _test1 : TesteService ) {}

  ngOnInit(): void {
    this._test1.getHeros().subscribe(response => console.log(response.image)); //changer entre les parenthèse pour avoir les info voulut(https://www.superheroapi.com/api.php/10159385542572346/69) pour batman index 69 

  }

}
