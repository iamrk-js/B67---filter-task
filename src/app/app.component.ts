import { Component } from '@angular/core';
import { Ifiles, Iplayer } from './shared/models/data';
import { cricketers } from './shared/const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum recusandae neque rerum temporibus, fugit in, enim dolore qui ratione provident illo hic reiciendis quibusdam quisquam, aliquid et. Voluptatum earum eius, praesentium obcaecati necessitatibus consectetur possimus id, ea in quia est magnam! Doloremque iure dicta, voluptates ea eaque ab unde nihil?';
  searchByValue !: string;
  filesArray : Array<Ifiles>= [
    {
      name: "Form 16",
      size: 22666998,
      type: 'pdf'
    },
    {
      name: "Salary Slips",
      size: 82558847,
      type: 'pdf'
    },
    {
      name: "TDC",
      size: 98766998,
      type: 'pdf'
    },
  ]

  playersArray : Iplayer[] = cricketers;
}
