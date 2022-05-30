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
    //let fondo:string = ["background: rgb(254,8,97)", "background: linear-gradient(90deg, rgba(254,8,97,1) 0%, rgba(179,6,68,1) 13%, rgba(127,4,48,1) 22%, rgba(87,3,33,1) 29%, rgba(72,14,55,1) 71%, rgba(111,22,84,1) 79%, rgba(135,27,102,1) 84%, rgba(164,33,124,1) 90%, rgba(212,42,161,1) 100%);"]
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
