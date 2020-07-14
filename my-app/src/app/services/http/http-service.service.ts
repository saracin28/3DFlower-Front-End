
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {ProductType} from "../../types/ProductType";


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private url1 = "http://localhost:8080/flower";
  private url2 = "http://localhost:8080/pot";
  private url3 = "http://localhost:8080/accessories";


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

}
