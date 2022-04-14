import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitlePageService {
  titleSubject = new Subject<string>();

  constructor() { }

  public setTitlePage(title: string) {
    this.titleSubject.next(title);
  }

  public getTitlePage() {
    return this.titleSubject.asObservable();
  }

}
