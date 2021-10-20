import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppButtons } from "../interfaces/interfaces";


@Injectable({
    providedIn:'root'
})

export class AppButtonInteraction {
    public blank:AppButtons = {
        route:true,
        url:'#',
        fn:undefined,
        params:[]
        };

    constructor(private router:Router){}

    AppButtonInteraction(data:AppButtons){
        let { route, url, fn, params } = data;
        if( route && url && url !== '#'  ){
        this.gotoURL(url)
        } 
        
        else {
        fn && fn(params) 
        }
    }

    gotoURL(url:string):void{
        
        if (url && url !== '#') {
            this.router.navigateByUrl(url);
            console.log(url);
        } else {
        console.warn('Must Provide a Route or Function')
        }
    }

    noFunction(params:any[]){
        console.error('Must provide a function or set route field as true')
        if (params.length !== 0){
        console.warn('This params are unusable: ', params)
        } 
    }

}