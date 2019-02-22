import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()

export class ZypherService
{
    constructor(private _http:HttpClient){

    }

    public getService():any
    {
        return this._http.get('https://test-zypher.herokuapp.com/test/test');
    }
}