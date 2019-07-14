# angular版 错误URL默认值指令ccErrorSrc

## 安装
npm install cc-error-src --save 或 yarn add cc-error-src

## 使用
```javascript
// 业务模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorSrcModule } from 'cc-error-src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorSrcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//业务html
<div>
  <img src="./aaa.png" ccErrorSrc errSrc="../assets/avatar.png">
</div>


```

## 参数
1. errSrc：默认图片地址<br>
