import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { BookingDomainModule } from '../domain'
import { BookingController } from './booking.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { BookingByUserController } from './bookingByUser.controller'

import { FacilityDomainModule } from '../../../modules/facility/domain'

import { BookingByFacilityController } from './bookingByFacility.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BookingDomainModule,

    UserDomainModule,

    FacilityDomainModule,
  ],
  controllers: [
    BookingController,

    BookingByUserController,

    BookingByFacilityController,
  ],
  providers: [],
})
export class BookingApplicationModule {}
