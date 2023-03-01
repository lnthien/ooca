import { IsAscii, IsInt, IsNotEmpty, Length, Max, Min } from 'class-validator';

export class StressDto {
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(5)
  stressLevel: number;
  associateImg?: string;
  createdAt: number;
}
