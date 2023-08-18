import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsubscibeObsService {
  unsubSub$ : Subject<void> = new Subject<void>()
  constructor() { }
}
