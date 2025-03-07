import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenerationsService } from '../services/generations.service';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-generations-details',
  imports: [RouterModule],
  templateUrl: './generations-details.component.html',
  styleUrl: './generations-details.component.css'
})
export class GenerationsDetailsComponent {
  generation :string | null = null;
  generationUrl: string | null = null;
  public pokemonsGeneration :any = [];
  public pokemonsDetailGeneration :any = []
  public pokemons :any = []
  public pokemonUrl :string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(  private route: ActivatedRoute,
                @Inject (GenerationsService) private generationsSrv : GenerationsService,
                @Inject (PokemonService) private pokemonSrv : PokemonService)
    {

    this.generation = this.route.snapshot.paramMap.get('generation');
    this.generationUrl = this.route.snapshot.queryParamMap.get('url');
    
    if(this.generationUrl){
      this.generationsSrv.getGenerationsDetail(this.generationUrl).subscribe({
        next: (data: any)=>{
          for(let i=0; i<data.pokemon_species.length; i++){
            this.pokemonsGeneration.push(data.pokemon_species[i]);
            this.generationsSrv.getGenerationsDetail(data.pokemon_species[i].url).subscribe({
              next: (data :any)=>{
                this.pokemonsDetailGeneration.push(data);
                this.pokemonSrv.getPokemonsDetail(this.pokemonUrl + data.order).subscribe({
                  next: (data :any)=>{
                    this.pokemons.push(data);
                  },
                  error: (err)=>{
                    console.log(err);
                  }
                })
              }, error: (err)=>{
                console.log(err);
              }
            })
          }
        },
        error: (err) =>{
          console.error(err)
        }
      })
    }
  }
}
