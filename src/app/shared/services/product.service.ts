import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
httpOptions:any;
  constructor(private http:HttpClient
    ) { 

      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Bearer "+sessionStorage.getItem("token")
        })
      }
    }
    public getProducts():Observable<any>{
  
    return this.http.get("http://localhost:4500/660/products",this.httpOptions);
  }

  addProduct(data:any): Observable<any>{
    return this.http.post("http://localhost:4500/products", data);
  }
  updateProduct(id:number,data:any): Observable<any>{
    return this.http.put(`http://localhost:4500/products/${id}`, data);
  }
  getProduct():Observable<any>{
    return this.http.get("http://localhost:4500/products")
  }
  deleteProduct(id: number):Observable<any>{
    return this.http.delete(`http://localhost:4500/products/${id}`);
  }
  public getProducts2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/660/products?type="+pattern,this.httpOptions);
  }
}
