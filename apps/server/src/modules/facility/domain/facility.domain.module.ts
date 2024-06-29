import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { FacilityDomainFacade } from './facility.domain.facade'
import { Facility } from './facility.model'

@Module({
  imports: [TypeOrmModule.forFeature([Facility]), DatabaseHelperModule],
  providers: [FacilityDomainFacade, FacilityDomainFacade],
  exports: [FacilityDomainFacade],
})
export class FacilityDomainModule {}
