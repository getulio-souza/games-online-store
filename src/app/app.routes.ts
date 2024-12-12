import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
];
