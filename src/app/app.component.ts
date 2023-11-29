import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface UserInterface {
  id: string
  name:string
  role: string
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 users = signal<UserInterface[]>([
  {id:'1',name:"Munees",role:'Mean stack develepor'},
  {id:'2',name:"Hadhil",role:'Game develepor'},
  {id:'3',name:"Ansid",role:'Mern stack develepor'},
 ])

 user:UserInterface = this.users()[0]
}
