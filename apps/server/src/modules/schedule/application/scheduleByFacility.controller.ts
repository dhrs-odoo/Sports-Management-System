import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ScheduleDomainFacade } from '@server/modules/schedule/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ScheduleApplicationEvent } from './schedule.application.event'
import { ScheduleCreateDto } from './schedule.dto'

import { FacilityDomainFacade } from '../../facility/domain'

@Controller('/v1/facilitys')
export class ScheduleByFacilityController {
  constructor(
    private facilityDomainFacade: FacilityDomainFacade,

    private scheduleDomainFacade: ScheduleDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/facility/:facilityId/schedules')
  async findManyFacilityId(
    @Param('facilityId') facilityId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.facilityDomainFacade.findOneByIdOrFail(facilityId)

    const items = await this.scheduleDomainFacade.findManyByFacility(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/facility/:facilityId/schedules')
  async createByFacilityId(
    @Param('facilityId') facilityId: string,
    @Body() body: ScheduleCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, facilityId }

    const item = await this.scheduleDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ScheduleApplicationEvent.ScheduleCreated.Payload>(
      ScheduleApplicationEvent.ScheduleCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
