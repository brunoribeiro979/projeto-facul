import { Component } from '@angular/core';
import { dados } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //acima o seletor, endereço html e endereço css
})

// Classe criada com os dados dos alunos e será apresentada no app.component.html através de um loop
// Foi criado um array com o nome dados que esta vindo do arquivo.ts
export class AppComponent {
  title = 'Trabalho Uninter';
  dadosAlunos = dados;
}