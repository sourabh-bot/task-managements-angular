import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    title:string = '';

    onChnageHandle(event: Event){
      const input = event.target as HTMLInputElement;
      this.title = input.value;
    }
}
