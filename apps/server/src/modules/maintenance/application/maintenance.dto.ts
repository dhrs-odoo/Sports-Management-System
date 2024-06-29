import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class MaintenanceCreateDto {
  @IsString()
  @IsNotEmpty()
  taskDescription: string

  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  @IsNotEmpty()
  scheduledDate: string

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

export class MaintenanceUpdateDto {
  @IsString()
  @IsOptional()
  taskDescription?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  scheduledDate?: string

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
