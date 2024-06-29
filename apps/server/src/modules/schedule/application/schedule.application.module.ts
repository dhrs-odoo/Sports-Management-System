import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ScheduleDomainModule } from '../domain'
import { ScheduleController } from './schedule.controller'

import { FacilityDomainModule } from '../../../modules/facility/domain'

import { ScheduleByFacilityController } from './scheduleByFacility.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ScheduleDomainModule,

    FacilityDomainModule,
  ],
  controllers: [ScheduleController, ScheduleByFacilityController],
  providers: [],
})
export class ScheduleApplicationModule {}
