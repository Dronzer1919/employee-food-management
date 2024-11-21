import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
  
export class InternetConnectionService {
  private internetStatus = new Subject<boolean>();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.internetStatus.next(navigator.onLine);
      window.addEventListener('online', () => this.updateInternetStatus(true));
      window.addEventListener('offline', () => this.updateInternetStatus(false));
    }
  }

  private updateInternetStatus(isOnline: boolean) {
    this.internetStatus.next(isOnline);
  }

  public getInternetStatus(): Observable<boolean> {
    return this.internetStatus.asObservable();
  }

}