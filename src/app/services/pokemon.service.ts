import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(environment.apiPokemon);
  }

  getPokemonsDetail(url :string){
    return this.http.get(url);
  }
  
}
