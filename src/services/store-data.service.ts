import { computed, Injectable, signal } from '@angular/core';

export interface AlcoData{
  ID:number;
  TEMP_VALUE:number;
}

export interface AlcoDataParsed{
  ID:string;
  TEMP_VALUE:number;
}

@Injectable()
export class StoreDataService {
  private storage = signal<AlcoDataParsed[]>([])

  public data = computed(()=>this.storage())

  public insertData(data:AlcoData[]){
    console.log(data)
    this.storage.set(data.map((row)=>{
      return {
        ID:row.ID.toString(), 
        TEMP_VALUE:row.TEMP_VALUE
      }
    }));
  }

}
