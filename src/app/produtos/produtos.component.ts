import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
})
export class ProdutosComponent implements OnInit {
  title_produtos = "Produtos"

  produtos = [
    {id:'1', nome:'ELton'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
