import { Component, Inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  pokemons: any[] = [];

  constructor(@Inject(PokemonService) private pokemonService : PokemonService){
    this.pokemons = pokemonService.pokemons;
  }

}
