import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotComponent } from './components/pot/pot.component';
import { PotContentComponent } from './components/pot/pot-content/pot-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PotComponent,
    PotContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
