import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Facility, FacilityDomainFacade } from '@server/modules/facility/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { FacilityApplicationEvent } from './facility.application.event'
import { FacilityCreateDto, FacilityUpdateDto } from './facility.dto'

@Controller('/v1/facilitys')
export class FacilityController {
  constructor(
    private eventService: EventService,
    private facilityDomainFacade: FacilityDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.facilityDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: FacilityCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.facilityDomainFacade.create(body)

    await this.eventService.emit<FacilityApplicationEvent.FacilityCreated.Payload>(
      FacilityApplicationEvent.FacilityCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:facilityId')
  async findOne(
    @Param('facilityId') facilityId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.facilityDomainFacade.findOneByIdOrFail(
      facilityId,
      queryOptions,
    )

    return item
  }

  @Patch('/:facilityId')
  async update(
    @Param('facilityId') facilityId: string,
    @Body() body: FacilityUpdateDto,
  ) {
    const item = await this.facilityDomainFacade.findOneByIdOrFail(facilityId)

    const itemUpdated = await this.facilityDomainFacade.update(
      item,
      body as Partial<Facility>,
    )
    return itemUpdated
  }

  @Delete('/:facilityId')
  async delete(@Param('facilityId') facilityId: string) {
    const item = await this.facilityDomainFacade.findOneByIdOrFail(facilityId)

    await this.facilityDomainFacade.delete(item)

    return item
  }
}
