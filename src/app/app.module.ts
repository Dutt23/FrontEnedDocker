import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { HeroService } from "./hero.service";
import { AppRoutingModule } from ".//app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { MessageService } from "./message.service";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import "hammerjs";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    HeroSearchComponent
  ],

  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    //and returns simulated server responses.
    //Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    //)
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
