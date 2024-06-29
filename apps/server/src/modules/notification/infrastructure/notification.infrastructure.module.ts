import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationFacilitySubscriber } from './subscribers/notification.facility.subscriber'

import { NotificationBookingSubscriber } from './subscribers/notification.booking.subscriber'

import { NotificationPaymentSubscriber } from './subscribers/notification.payment.subscriber'

import { NotificationScheduleSubscriber } from './subscribers/notification.schedule.subscriber'

import { NotificationMaintenanceSubscriber } from './subscribers/notification.maintenance.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationFacilitySubscriber,

    NotificationBookingSubscriber,

    NotificationPaymentSubscriber,

    NotificationScheduleSubscriber,

    NotificationMaintenanceSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
