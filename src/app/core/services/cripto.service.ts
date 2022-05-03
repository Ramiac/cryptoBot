import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriptoModelFromBack } from 'src/app/modules/home/models/criptoModel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CriptoService {
  private criptoAPI_URL: string = environment.apiEndpoint + "criptos/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  }

  constructor(
    private http: HttpClient,
  ) { }

  adicionarCriptoLista(cripto: CriptoModelFromBack){
    return this.http.post<any>(`${this.criptoAPI_URL}criptoAdd`, cripto, this.httpOptions);
  }

  listarCriptos(){
    return this.http.get<any>(`${this.criptoAPI_URL}criptolist`);
  }

  deletarCriptoLista(cripto: CriptoModelFromBack){
    return this.http.post<any>(`${this.criptoAPI_URL}criptoDelete`, cripto, this.httpOptions);
  }

  fetchCriptosPreco(symbol: string, convert: string){
    return this.http.get<any>(`${this.criptoAPI_URL}criptoFetch?symbol=${symbol}&convert=${convert}`)
  }
}
