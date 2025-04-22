import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreSingletonService {

  constructor() { }

  selectProduct: any;
}
