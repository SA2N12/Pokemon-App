import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any = [
    {
      img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      name : "Bulbizarre",
      categorie : "graine",
      type : "plante, poison",
      size : "70cm",
      weight : "6,9kg"
    },
    {
      img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      name : "Herbizarre",
      categorie : "graine",
      type : "plante, poison",
      size : "1m",
      weight : "13kg"
    },
    {
      img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      name : "Florizarre",
      categorie : "graine",
      type : "plante, poison",
      size : "2m",
      weight : "100kg"
    },
    {
      img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      name : "Salamèche",
      categorie : "flamme",
      type : "feu",
      size : "60cm",
      weight : "8,5kg"
    },
    {
      img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      name : "Reptincel",
      categorie : "flamme",
      type : "feu",
      size : "1,1m",
      weight : "19kg"
    },
    {
      img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      name : "Dracaufeu",
      categorie : "flamme",
      type : "feu, vol",
      size : "1,7m",
      weight : "90,5kg"
    }
  ]

  constructor() { }
}
