import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../ui/button/button.component';
import { GetTempDataComponent } from '../ui/get-temp-data/get-temp-data.component';
import { StoreDataService } from '../services/store-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonComponent,GetTempDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  providers: [StoreDataService]
})
export class AppComponent {
  public storeDataService = inject(StoreDataService);
}
