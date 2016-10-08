import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { GridComponentComponent } from './grid-component/grid-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    GridComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
