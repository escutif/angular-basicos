import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [ //para poder ocuparlo fuera del modulo
        ContadorComponent
    ]
})
export class ContadorModule {

}