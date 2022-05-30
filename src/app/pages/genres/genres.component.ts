import { Component, OnInit } from '@angular/core';
import { Genreservice } from 'src/app/servicios/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres:any;
  constructor(private genre: Genreservice) { }

  ngOnInit(): void {
    this.getGenre()
  }
   getGenre(){
    this.genre.getgenero().subscribe
    ({   
       next:(s)=>{
         this.genres=s.data;
         //console.log(this.genres)
       },
       error:(_e)=>{
       debugger
       }
    })

   }
}
