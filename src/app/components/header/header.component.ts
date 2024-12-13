import { Component } from '@angular/core';
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  iconeMenu: string = '../../assets/botao-de-menu.png'

}
