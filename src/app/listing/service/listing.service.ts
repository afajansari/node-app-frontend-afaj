import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../model/listing';

@Injectable({
  providedIn: 'root',
})
export class ListingService {

  private ROOT_URL = 'http://localhost:4000/api/listings';

  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('token', localStorage.getItem('token'))
  };

  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {

    return this.http.get<Listing[]>(this.ROOT_URL, this.httpOptions);
    // console.log(this.http.get<Listing[]>(this.ROOT_URL));
  }

  // tslint:disable-next-line: typedef
  getListing(id: string) {
    return this.http.get<Listing>(`${this.ROOT_URL}/${id}`, this.httpOptions);
    // console.log(this.http.get(`${this.ROOT_URL}/${id}`));
    // console.log(`${this.ROOT_URL}/${_id}`);
  }
  addListing(listing): Observable<any>{
    return this.http.post<any>(this.ROOT_URL, listing, this.httpOptions );
  }
  editListing(listing, id): Observable<any>{
    return this.http.put<any>(`${this.ROOT_URL}/${id}`, listing, this.httpOptions );
  }
}
