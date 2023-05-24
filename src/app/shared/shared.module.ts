import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimengModule } from './primeng.module';
import { GlobalAlertService } from './global-alert.service';
import { BlockiePipe } from './pipes/blockie.pipe';
import { EthFormattingPipe } from './pipes/eth-formatting.pipe';
import { RoundingPipe } from './pipes/rounding-pipe';
import { ShortAddressPipe } from './pipes/short-address.pipe';
import { AppConfigComponent } from './layout/app-config/app.config.component';
import { AppFooterComponent } from './layout/app-footer/app.footer.component';
import { AppMainComponent } from './layout/app-main/app.main.component';
import { AppMenuComponent } from './layout/app-menu/app.menu.component';
import { AppMenuitemComponent } from './layout/app-menu/app.menuitem.component';
import { AppTopBarComponent } from './layout/app-topbar/app.topbar.component';



import { ConfigService } from './layout/service/app.config.service';
import { MenuService } from './layout/service/app.menu.service';
import { NumbersService } from './numbers.service';
import { SuperfluidService } from './providers/superfluid.service';
import { ERC20BalanceComponent } from './components/erc20-balance/erc20-balance.component';
import { ERC20MetadataComponent } from './components/erc20-metadata/erc20-metadata.component';
import { ERC20AllowanceComponent } from './components/erc20-allowance/erc20-allowance.component';
import { ERC20ApprovalEventComponent } from './components/erc20-approval-event/erc20-approval-event.component';
import { ERC20ApproveComponent } from './components/erc20-approve/erc20-approve.component';
import { ERC20TransferFromComponent } from './components/erc20-transfer-from/erc20-transfer-from.component';
import { ERC20TransferComponent } from './components/erc20-transfer/erc20-transfer.component';
import { ERC20TransferEventComponent } from './components/erc20-transfer-event/erc20-transfer-event.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        PrimengModule,
        ShortAddressPipe,
        EthFormattingPipe,
        BlockiePipe,
        RoundingPipe,
        AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        ERC20BalanceComponent,
        ERC20MetadataComponent,
        ERC20AllowanceComponent,
        ERC20ApprovalEventComponent,
        ERC20ApproveComponent,
        ERC20TransferComponent,
        ERC20TransferFromComponent,
        ERC20TransferEventComponent
    ],
    exports: [AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        ERC20BalanceComponent,
        ERC20MetadataComponent,
        ERC20AllowanceComponent,
        ERC20ApprovalEventComponent,
        ERC20ApproveComponent,
        ERC20TransferComponent,
        ERC20TransferFromComponent,
        ERC20TransferEventComponent,
        ShortAddressPipe,
        EthFormattingPipe,
        BlockiePipe,
        RoundingPipe,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PrimengModule
    ],
    providers: [GlobalAlertService, MenuService,
        ConfigService, NumbersService, SuperfluidService],
})
export class SharedModule { }