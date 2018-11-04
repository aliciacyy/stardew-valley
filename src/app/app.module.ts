import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VillagersComponent } from './villagers/villagers.component';
import { ShopsComponent } from './shops/shops.component';
import { FishComponent } from './fish/fish.component';
import { VillagerDetailComponent } from './detail/villager-detail/villager-detail.component';
import { HomeComponent } from './home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VillagersComponent,
    ShopsComponent,
    FishComponent,
    VillagerDetailComponent,
    HomeComponent,
    CalendarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
