import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'views/main/main.component.html',
  styleUrl: 'views/main/main.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  dev = 'Marcelo Motta'
}
