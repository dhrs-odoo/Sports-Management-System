import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { FacilityApi } from './facility/facility.api'

import { BookingApi } from './booking/booking.api'

import { PaymentApi } from './payment/payment.api'

import { ScheduleApi } from './schedule/schedule.api'

import { MaintenanceApi } from './maintenance/maintenance.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Facility extends FacilityApi {}

  export class Booking extends BookingApi {}

  export class Payment extends PaymentApi {}

  export class Schedule extends ScheduleApi {}

  export class Maintenance extends MaintenanceApi {}
}
