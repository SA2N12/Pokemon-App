import { Component } from '@angular/core';

interface Pokemon {
  name: string;
  type: string;
  size: string;
  weight: string;
}

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [
    {
      name : "Bulbizarre",
      type : "plante, poison",
      size : "70cm",
      weight : "6,9kg"
    },
    {
      name : "Herbizarre",
      type : "plante, poison",
      size : "1m",
      weight : "13kg"
    },
    {
      name : "Florizarre",
      type : "plante, poison",
      size : "2m",
      weight : "100kg"
    },
    {
      name : "Salamèche",
      type : "feu",
      size : "60cm",
      weight : "8,5kg"
    },
    {
      name : "Reptincel",
      type : "feu",
      size : "1,1m",
      weight : "19kg"
    },
    {
      name : "Dracaufeu",
      type : "feu",
      size : "1,7m",
      weight : "90,5kg"
    }
  ]
}
