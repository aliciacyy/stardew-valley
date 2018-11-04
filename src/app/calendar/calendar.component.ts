import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private dataService : DataService) { }

  getImage(name:String) {
    if (name != null) {}
      return this.dataService.getCalendarImage(name);
  }

  ngOnInit() {
  }

}
