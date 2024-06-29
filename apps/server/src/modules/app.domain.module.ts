import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { FacilityDomainModule } from './facility/domain'

import { BookingDomainModule } from './booking/domain'

import { PaymentDomainModule } from './payment/domain'

import { ScheduleDomainModule } from './schedule/domain'

import { MaintenanceDomainModule } from './maintenance/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    FacilityDomainModule,

    BookingDomainModule,

    PaymentDomainModule,

    ScheduleDomainModule,

    MaintenanceDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
