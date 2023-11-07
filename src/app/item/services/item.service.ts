import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiServerUrl}/api/item/all`);
  }

  public getItemById(itemId: string): Observable<Item> {
    return this.http.get<Item>(`${this.apiServerUrl}/api/item/find/${itemId}`);
  }

  public addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.apiServerUrl}/api/item/add`, item);
  }

  public updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiServerUrl}/api/item/update`, item);
  }

  public deleteItem(itemId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/item/delete/${itemId}`);
  }

}
