import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";
import { EthContractTriggerService } from "./trigger";
import { WiServiceContribution } from "wi-studio/app/contrib/wi-contrib";

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    {
       provide: WiServiceContribution,
       useClass: EthContractTriggerService
    }
  ]
})
export default class EthContractContribModule {

}
