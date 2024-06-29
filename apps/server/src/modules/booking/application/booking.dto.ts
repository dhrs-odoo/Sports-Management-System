import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class BookingCreateDto {
  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  @IsNotEmpty()
  bookingDate: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  facilityId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class BookingUpdateDto {
  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  bookingDate?: string

  @IsNumber()
  @IsOptional()
  price?: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  facilityId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
