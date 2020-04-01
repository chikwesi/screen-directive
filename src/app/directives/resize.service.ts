import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  get onResize$(): Observable<IConfig> {
    return this.resizeSubject.asObservable();
  }

  private resizeSubject: BehaviorSubject<IConfig>;

  constructor() {
    this.resizeSubject = new BehaviorSubject<IConfig>(null);
  }

  setConfiguration(size: IConfig) {
    this.resizeSubject.next(size);
  }
}
interface IConfig {
  mobile: number;
  tablet: number;
}