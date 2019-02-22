import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { ThemesComponent } from './components/themes/themes.component';
import { CategoryComponent } from './components/category/category.component';
import { ZypherService } from './services/zypher.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AuthorsComponent,
    ThemesComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ZypherService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
