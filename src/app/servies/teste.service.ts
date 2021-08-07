import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  private _token : string = '1458081961231168';
  // public id : number = 50;   //mettre id ici  pour afficher heros info

  public ID (){
    return (Math.floor(Math.random() * 731)+1);
  }

  constructor(private _teste : HttpClient) { }
  public getHeros() : Observable<any>{
    return this._teste.get(`https://www.superheroapi.com/api.php/${this._token}/${this.ID()}`);
  }


}

