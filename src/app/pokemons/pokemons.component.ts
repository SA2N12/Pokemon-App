import { Component, Inject } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  public pokemons :any = [

  ]

  public pokemonsDetail :any = [
    
  ]



  constructor(@Inject(PokemonService) private pokemonSrv : PokemonService){
    this.pokemonSrv.getPokemons().subscribe({
      next: (data: any) => {
        let pokemons = data.results.slice(0, data.results.length)
        for(let i=0; i<data.results.length; i++){
          this.pokemons.push(pokemons[i]);
          let url :string = this.pokemons[i].url;
          console.log(url);
          this.pokemonSrv.getPokemonsDetail(url).subscribe({
            next: (data :any)=>{
              this.pokemonsDetail.push(data);
            }, error: (err)=>{
              console.log(err);
            }
          })
        }
        console.log(this.pokemonsDetail);
      }, error: (err) => {
        console.log(err);
      }
    });
  }

}
