import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { MaintenanceDomainFacade } from '@server/modules/maintenance/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { MaintenanceApplicationEvent } from './maintenance.application.event'
import { MaintenanceCreateDto } from './maintenance.dto'

import { FacilityDomainFacade } from '../../facility/domain'

@Controller('/v1/facilitys')
export class MaintenanceByFacilityController {
  constructor(
    private facilityDomainFacade: FacilityDomainFacade,

    private maintenanceDomainFacade: MaintenanceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/facility/:facilityId/maintenances')
  async findManyFacilityId(
    @Param('facilityId') facilityId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.facilityDomainFacade.findOneByIdOrFail(facilityId)

    const items = await this.maintenanceDomainFacade.findManyByFacility(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/facility/:facilityId/maintenances')
  async createByFacilityId(
    @Param('facilityId') facilityId: string,
    @Body() body: MaintenanceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, facilityId }

    const item = await this.maintenanceDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MaintenanceApplicationEvent.MaintenanceCreated.Payload>(
      MaintenanceApplicationEvent.MaintenanceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
