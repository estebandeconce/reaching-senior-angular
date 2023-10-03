import { Injectable } from '@angular/core';
import { WRITERS } from 'src/app/mocks/writers.mock';
import { Writer } from 'src/app/models/writer.model';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor() { }

  getAll(): Writer[] {
    return WRITERS
  }

  /* getByCountry(country: string): Writer[] {
    return WRITERS.filter(writer => writer.country === country)
  } */

  getByCountry(country: string): Promise<Writer[]> {
    return new Promise((resolve, reject) => {
      resolve(WRITERS.filter(writer => writer.country === country))
    });
  }
}
