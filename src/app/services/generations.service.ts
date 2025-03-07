import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {

  constructor(private http: HttpClient) { }

  getGenerations(){
    return this.http.get(environment.apiPokemonGeneration);
  }

  getGenerationsDetail(url :string){
    return this.http.get(url);
  }
}
