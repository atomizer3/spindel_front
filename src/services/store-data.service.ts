import { computed, Injectable, signal } from '@angular/core';

@Injectable()
export class StoreDataService {
  private storage = signal({resp:[]});

  public data = computed(()=>this.storage())

  public insertData(data:any){
    console.log(data)
    this.storage.set(data);
  }

}
