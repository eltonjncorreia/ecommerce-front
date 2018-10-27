import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from './produto.iterface';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
})
export class ProdutosComponent implements OnInit {
  title_produtos = "Produtos"

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.listar().subscribe(
      (produtos: Produto[]) => this.produtos = produtos,
    )
  }

}
