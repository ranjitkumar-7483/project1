import { Component, OnInit } from '@angular/core';
import {ZypherService} from '../../services/zypher.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private result1:any;
  private catgSubscribe:any;

  constructor(private service:ZypherService) { }

  ngOnInit() {
    this.catgSubscribe = this.service.getService().subscribe(this.successCallback,this.errorCallback);
  }
  public successCallback = (res:any):any=>{
    this.result1 = res.category;
  }
  public errorCallback = (err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
      console.log('Client side error');
    }else{
      console.log('Server side error');
    }
  }
  ngOnDestroy(){
    this.catgSubscribe.unsubscribe();
  }

}
