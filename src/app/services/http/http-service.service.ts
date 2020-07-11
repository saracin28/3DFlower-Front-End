import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {FlowersType} from "../../types/FlowersType";
import {catchError, tap} from "rxjs/operators";
import {PotsType} from "../../types/PotsType";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private url1="http://localhost:8080/flower";
  private url2="http://localhost:8080/pot";
  private url3="http://localhost:8080/pot/pot-content";

  constructor(private httpClient: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  public getFlowers(): Observable<FlowersType[]>{
    return this.httpClient.get<FlowersType[]>(this.url1).pipe(tap(()=>console.log("Fetch Flowers")),
      catchError(this.handleError<FlowersType[]>("getFlowers",[])));
  }
  public getPots(): Observable<PotsType[]>{
    return this.httpClient.get<PotsType[]>(this.url2).pipe(tap(()=>console.log("Fetch Pots")),
      catchError(this.handleError<PotsType[]>("getPots",[])));
  }
  public getPot(id: number): Observable<PotsType> {
    const url = `${this.url3}/${id}`;
    return this.httpClient.get<PotsType>(url).pipe(
      tap(_ => console.log(`fetched pot id=${id}`)),
      catchError(this.handleError<PotsType>(`getPot id=${id}`))
    );
  }
}
