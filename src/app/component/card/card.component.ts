import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/servicios/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('arrAlbum') album:any; //decorador
  track:any;
  constructor(private search:SearchService) { }

  ngOnInit(): void {
  }

  getTrack(id:number){
    this.search.getTrackAlbum(id).subscribe({
      next: (s) =>{
        debugger
       this.track=s.data;
       debugger
       },
       error: (e)=>{
         debugger
       },
    })
  }
}
