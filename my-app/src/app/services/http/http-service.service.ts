
import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {ProductType} from "../../types/ProductType";
import {RegistersType} from "../../types/RegistersType";


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  @Input() product: ProductType[];
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  private url1 = "http://localhost:8080/flower";
  private url2 = "http://localhost:8080/pot";
  private url3 = "http://localhost:8080/accessories";
  private url4 = "http://localhost:8080/ourProducts";
  private url5 = "http://localhost:8080/register";
  private url6 = "http://localhost:8080/user";



  constructor(private httpClient: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


  public getFlowers(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.url1).pipe(tap(() => console.log("Fetch Flowers")),
      catchError(this.handleError<ProductType[]>("getFlowers", [])));
  }

  public getFlower(id: number): Observable<ProductType> {
    const url = `${this.url1}/${id}`;
    console.log(url);
    return this.httpClient.get<ProductType>(url).pipe(
      tap(_ => console.log(`fetched flower id=${id}`)),
      catchError(this.handleError<ProductType>(`getFlower id=${id}`)))
  }

  public getPots(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.url2).pipe(tap(() => console.log("Fetch Pots")),
      catchError(this.handleError<ProductType[]>("getPots", [])));
  }

  public getPot(id: number): Observable<ProductType> {
    const url = `${this.url2}/${id}`;
    console.log(url);
    return this.httpClient.get<ProductType>(url).pipe(
      tap(_ => console.log(`fetched pot id=${id}`)),
      catchError(this.handleError<ProductType>(`getPot id=${id}`))
    );
  }

  public getAccessories(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.url3).pipe(
      tap(() => console.log("Fetch Accessories")),
      catchError(this.handleError<ProductType[]>("getAccessories", [])));
  }

  public getAccessor(id: number): Observable<ProductType> {
    const url = `${this.url3}/${id}`;
    console.log(url);
    return this.httpClient.get<ProductType>(url).pipe(
      tap(_ => console.log(`fetched accessor id=${id}`)),
      catchError(this.handleError<ProductType>(`getAccessor id=${id}`))
    );
  }

  public getOurProducts(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.url4).pipe(
      tap(() => console.log("Fetch OurProducts")),
      catchError(this.handleError<ProductType[]>("getOurProducts", [])));
  }

  public getOurProduct(id: number): Observable<ProductType> {
    const url = `${this.url4}/${id}`;
    console.log(url);
    return this.httpClient.get<ProductType>(url).pipe(
      tap(_ => console.log(`fetched OurProduct id=${id}`)),
      catchError(this.handleError<ProductType>(`getOurProduct id=${id}`))
    );
  }
  public postUser(register: RegistersType): Observable<RegistersType> {
    return this.httpClient.post<RegistersType>(this.url5, register, this.httpOptions).pipe(
      tap(() => console.log("Post User")),
      catchError(this.handleError<RegistersType>("postUser", register)));
  }

  public getUserByName(name: string): Observable<any> {
    const url = `${this.url6}?name=${name}`;
    console.log(url);
    return this.httpClient.get<any>(url).pipe(
      tap(_ => console.log(`fetched user name=${name}`)),
      catchError(this.handleError<any>(`getUserByName name=${name}`))
    );
  }
}
