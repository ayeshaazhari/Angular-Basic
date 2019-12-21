import { Component } from "@angular/core";
import { sharedStylesheetJitUrl } from '@angular/compiler';
@Component({
    selector:'demo-app',
    template:`<h1>My First Component</h1>
                <p>Using GUI</p>
                <p>Html in Component decorator.</p>`,
    styleUrls:['./demo-app.component.css']
})


export class  DemoApp {
    title2="interpolation";
}
