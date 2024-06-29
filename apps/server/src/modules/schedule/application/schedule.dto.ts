import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ScheduleCreateDto {
  @IsString()
  @IsNotEmpty()
  startTime: string

  @IsString()
  @IsNotEmpty()
  endTime: string

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

export class ScheduleUpdateDto {
  @IsString()
  @IsOptional()
  startTime?: string

  @IsString()
  @IsOptional()
  endTime?: string

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
