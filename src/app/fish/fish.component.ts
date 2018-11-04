import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  fishes: any;
  filterText: string;

  constructor(private route : ActivatedRoute, private dataService : DataService) { 
    
  }

  getImage(name:string) {
    if (name != null) {}
      if (/\s/.test(name)) {
        name = name.replace(' ', '_');
      }
      return this.dataService.getFishImage(name);
  }

  openWiki(name : string) {
    if (/\s/.test(name)) {
      name = name.replace(' ', '_');
    }
    window.open("https://stardewvalleywiki.com/"+name, "_blank");
  }

  ngOnInit() {
    this.dataService.getFishes().subscribe(fishes => {
      this.fishes = fishes;
      this.route.params.subscribe(val => {
        var name = this.route.snapshot.paramMap.get('name');
        if (name) {
          this.filterText = name;
        }
      })
    });
  }

}
