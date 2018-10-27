import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produtos/produto.iterface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtosURL = "https://apiecommerce-trello.herokuapp.com/api/v1/produtos/"

  constructor(private http: HttpClient) { }

  listar (){
    return this.http.get(this.produtosURL);
  }
 
}
