import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/servicios/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  busqueda:Array<any> = [];
  /* idArtist:any; */
  artist!:object;
  constructor(private search:SearchService) { }

  ngOnInit(): void {
    
   }


  getMusic(name:any){
    this.search.getMusic(name.value).subscribe({
      next:(s:any)=>{
        this.busqueda = s.data;
        
      },
      error: (e)=>{
        debugger
      }
    })

  }

  
  




  

}
