import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerService } from './common/services/spinner.service';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinnerOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'foodManagement';
  constructor(
    private spinnerService: SpinnerService
  ) { }
  ngOnInit(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 3000);
  }
}
