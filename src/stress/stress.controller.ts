import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { StressService } from './stress.service';
import { StressDto } from './dto/stress.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('stress')
export class StressController {
  constructor(private service: StressService) {}

  @Get()
  async getAllStressRecords() {
    return await this.service.getAllStressRecords();
  }

  @Get(':id')
  async getStressRecord(@Query('id') id: string) {
    return await this.service.getStressRecord(id);
  }

  @Post()
  async insertStressRecord(@Body() dto: StressDto) {
    return await this.service.insertStressRecord(dto);
  }
  @Post(':id/image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImageToStressRecord(
    @Param('id') id: string,
    @UploadedFile() file: any,
  ) {
    return await this.service.uploadImage(id, file);
  }
}
