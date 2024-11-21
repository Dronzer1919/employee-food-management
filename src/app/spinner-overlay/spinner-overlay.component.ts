import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../common/services/spinner.service';

@Component({
  selector: 'app-spinner-overlay',
  standalone: true,  
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss'],
  imports: [CommonModule]  
})
export class SpinnerOverlayComponent {
  isLoading$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) {
    this.isLoading$ = this.spinnerService.getLoadingState();  
  }
}
