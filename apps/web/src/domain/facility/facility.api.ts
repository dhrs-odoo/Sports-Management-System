import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Facility } from './facility.model'

export class FacilityApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Facility>,
  ): Promise<Facility[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/facilitys${buildOptions}`)
  }

  static findOne(
    facilityId: string,
    queryOptions?: ApiHelper.QueryOptions<Facility>,
  ): Promise<Facility> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/facilitys/${facilityId}${buildOptions}`)
  }

  static createOne(values: Partial<Facility>): Promise<Facility> {
    return HttpService.api.post(`/v1/facilitys`, values)
  }

  static updateOne(
    facilityId: string,
    values: Partial<Facility>,
  ): Promise<Facility> {
    return HttpService.api.patch(`/v1/facilitys/${facilityId}`, values)
  }

  static deleteOne(facilityId: string): Promise<void> {
    return HttpService.api.delete(`/v1/facilitys/${facilityId}`)
  }
}
