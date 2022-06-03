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


@NgModule({
    declarations: [
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

    ],
    imports: [
        ReactiveFormsModule,
        PrimengModule
    ],
    exports: [AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,

        ShortAddressPipe,
        EthFormattingPipe,
        BlockiePipe,
        RoundingPipe,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PrimengModule,
    ],
    providers: [GlobalAlertService, MenuService,
        ConfigService,],
})
export class SharedModule { }