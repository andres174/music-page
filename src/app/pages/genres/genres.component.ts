import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/servicios/search.service';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres:any;
  constructor(private genre: SearchService) { }

  ngOnInit(): void {
    this.getGenre()
  }
   getGenre(){
    this.genre.getGenero().subscribe
    ({   
       next:(s)=>{
         this.genres=s.data;
         //console.log(this.genres)
       },
       error:(e)=>{
       debugger
       }
    })

   }
}
