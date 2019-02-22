import { Component, OnInit } from '@angular/core';
import {ZypherService} from '../../services/zypher.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  private result1:any;
  private themeSubscribe:any;

  constructor(private service:ZypherService) { }

  ngOnInit() {
    this.themeSubscribe = this.service.getService().subscribe(this.successCallback,this.errorCallback);
  }
  public successCallback = (res:any):any=>{
    this.result1 = res.themes;
  }
  public errorCallback = (err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
      console.log('Client side error');
    }else{
      console.log('Server side error');
    }
  }
  ngOnDestroy(){
    this.themeSubscribe.unsubscribe();
  }

}
