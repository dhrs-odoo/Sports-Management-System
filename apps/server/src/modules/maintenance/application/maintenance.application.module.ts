import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { MaintenanceDomainModule } from '../domain'
import { MaintenanceController } from './maintenance.controller'

import { FacilityDomainModule } from '../../../modules/facility/domain'

import { MaintenanceByFacilityController } from './maintenanceByFacility.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    MaintenanceDomainModule,

    FacilityDomainModule,
  ],
  controllers: [MaintenanceController, MaintenanceByFacilityController],
  providers: [],
})
export class MaintenanceApplicationModule {}
