import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { FacilityApplicationModule } from './facility/application'

import { BookingApplicationModule } from './booking/application'

import { PaymentApplicationModule } from './payment/application'

import { ScheduleApplicationModule } from './schedule/application'

import { MaintenanceApplicationModule } from './maintenance/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    FacilityApplicationModule,

    BookingApplicationModule,

    PaymentApplicationModule,

    ScheduleApplicationModule,

    MaintenanceApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
