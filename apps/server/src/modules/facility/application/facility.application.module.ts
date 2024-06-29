import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { FacilityDomainModule } from '../domain'
import { FacilityController } from './facility.controller'

@Module({
  imports: [AuthenticationDomainModule, FacilityDomainModule],
  controllers: [FacilityController],
  providers: [],
})
export class FacilityApplicationModule {}
