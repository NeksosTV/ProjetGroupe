import { Iprofile } from './../../Models/iprofile';
import { Component, OnInit } from '@angular/core';
import { HerosService } from 'src/app/service/heros.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-super-heroes-list',
  templateUrl: './super-heroes-list.component.html',
  styleUrls: ['./super-heroes-list.component.scss']
})

export class SuperHeroesListComponent implements OnInit {

  public heroes : Iprofile[] = [];

  constructor(private _ApiService: HerosService) {};


  ngOnInit(): void{
    for (let i = 1 ; i < 731 ; i++) {
      let sub : Subscription = this._ApiService.getOneSuperHeroesByID(i).subscribe(
        (sh:any) => {
          this.heroes.push(sh);
          sub.unsubscribe();
        }
      )
      
    };
    
  }

}
