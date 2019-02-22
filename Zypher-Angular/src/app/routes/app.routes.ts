import {Routes} from '@angular/router';
import { AuthorsComponent } from '../components/authors/authors.component';
import { ThemesComponent } from '../components/themes/themes.component';
import { CategoryComponent } from '../components/category/category.component';

export const appRoutes:Routes = [
    {path:'author',component:AuthorsComponent},
    {path:'themes',component:ThemesComponent},
    {path:'category',component:CategoryComponent}
];