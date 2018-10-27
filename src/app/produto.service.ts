import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtosURL = "http://localhost:8000/api/v1/produtos/"

  constructor(private http: HttpClient) { }

  listar (){
    return this.http.get(this.produtosURL);
  }
 
}
