import { Component, inject } from '@angular/core';
import { StoreDataService } from '../../services/store-data.service';

@Component({
  selector: 'app-get-temp-data',
  templateUrl: './get-temp-data.component.html',
  styleUrl: './get-temp-data.component.scss',
  standalone: true
})
export class GetTempDataComponent {
    private storeDataService = inject(StoreDataService)

    public async getData(){
        const response = await fetch('http://localhost:3000', {method:'GET'})
        this.storeDataService.insertData(await response.json());
    }
}
