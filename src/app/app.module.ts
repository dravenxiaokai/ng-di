import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './shared/stock.service';
import { Stock2Component } from './stock2/stock2.component'
import {LoggerService} from './shared/logger.service'
import {AnotherStockService} from './shared/another-stock.service'

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide:StockService,useFactory:(logger:LoggerService,isDev) => {//使用工厂方法提供器
      // let logger = new LoggerService();在这里面new一个LoggerService会增加耦合,可以放到下面deps参数里
      console.log(isDev);
      // let isDev = Math.random() > 0.5;
      if(isDev){
        return new StockService(logger);//工厂方法new出来的对象是一个单例对象
      }else{
        return new AnotherStockService(logger);
      }
    },deps:[LoggerService,"IS_DEV_ENV"]},//对应工厂方法里面的参数
  LoggerService,
  {provide:"IS_DEV_ENV",useValue:{isDev:true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
