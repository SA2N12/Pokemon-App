import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GenerationsService } from '../services/generations.service';

@Component({
  selector: 'app-generations',
  imports: [RouterLink],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  generations: any[] = [
  ];

  constructor(@Inject (GenerationsService) private generationsSrv : GenerationsService){
    this.generationsSrv.getGenerations().subscribe({
      next: (data: any) => {
        this.generations = data.results;
        console.log(data.results)
      }, error: (err) => {
        console.log(err);
      }
    });
  }

}
