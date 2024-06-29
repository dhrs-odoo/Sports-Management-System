import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Facility as FacilityModel } from './facility/facility.model'

import { Booking as BookingModel } from './booking/booking.model'

import { Payment as PaymentModel } from './payment/payment.model'

import { Schedule as ScheduleModel } from './schedule/schedule.model'

import { Maintenance as MaintenanceModel } from './maintenance/maintenance.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Facility extends FacilityModel {}

  export class Booking extends BookingModel {}

  export class Payment extends PaymentModel {}

  export class Schedule extends ScheduleModel {}

  export class Maintenance extends MaintenanceModel {}
}
