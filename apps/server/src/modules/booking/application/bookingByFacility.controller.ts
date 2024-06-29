import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BookingDomainFacade } from '@server/modules/booking/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BookingApplicationEvent } from './booking.application.event'
import { BookingCreateDto } from './booking.dto'

import { FacilityDomainFacade } from '../../facility/domain'

@Controller('/v1/facilitys')
export class BookingByFacilityController {
  constructor(
    private facilityDomainFacade: FacilityDomainFacade,

    private bookingDomainFacade: BookingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/facility/:facilityId/bookings')
  async findManyFacilityId(
    @Param('facilityId') facilityId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.facilityDomainFacade.findOneByIdOrFail(facilityId)

    const items = await this.bookingDomainFacade.findManyByFacility(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/facility/:facilityId/bookings')
  async createByFacilityId(
    @Param('facilityId') facilityId: string,
    @Body() body: BookingCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, facilityId }

    const item = await this.bookingDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BookingApplicationEvent.BookingCreated.Payload>(
      BookingApplicationEvent.BookingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
