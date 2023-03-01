import { HttpException, Injectable, Logger } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'node:fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { StressDto } from './dto/stress.dto';
import * as sharp from 'sharp';

@Injectable()
export class StressService {
  private readonly logger;
  constructor() {
    this.logger = new Logger(StressService.name);
  }

  public async getAllStressRecords() {
    try {
      const data = readFileSync(path.resolve('src/data/data.json'), 'utf-8');
      return JSON.parse(data);
    } catch (e) {
      this.logger.error(`Get all stress records failed: ${e}`);
      throw new HttpException(
        'Get all stress records failed',
        e.statusCode || 500,
      );
    }
  }

  public async insertStressRecord(record: StressDto) {
    try {
      const data = readFileSync(path.resolve('src/data/data.json'), 'utf-8');
      const existedData = JSON.parse(data);
      const newId = uuidv4();
      record.createdAt = new Date().getTime();
      existedData[newId] = record;
      writeFileSync(
        path.resolve('src/data/data.json'),
        JSON.stringify(existedData),
      );
      return record;
    } catch (e) {
      this.logger.error(`Insert new stress record failed: ${e}`);
      throw new HttpException(
        'Insert new stress record failed',
        e.statusCode || 500,
      );
    }
  }

  public async getStressRecord(id: string) {
    try {
      const data = readFileSync(path.resolve('src/data/data.json'), 'utf-8');
      const result = JSON.parse(data);
      return result[id];
    } catch (e) {
      this.logger.error(`Get stress record id ${id} failed: ${e}`);
      throw new HttpException(
        `Get stress record ${id} failed`,
        e.statusCode || 500,
      );
    }
  }

  public async uploadImage(id: string, file: any): Promise<boolean> {
    try {
      const data = readFileSync(path.resolve('src/data/data.json'), 'utf-8');
      const existedData = JSON.parse(data);
      if (!existedData.hasOwnProperty(id)) {
        throw new HttpException(`Record ${id} does not exist`, 400);
      }
      const resizedImg = await sharp(file.buffer).resize(200, 200).toBuffer();
      existedData[id].associateImg = Buffer.from(resizedImg).toString('base64');
      writeFileSync(
        path.resolve('src/data/data.json'),
        JSON.stringify(existedData),
      );
      return true;
    } catch (e) {
      throw new HttpException(
        `Upload image failed to record ${id}`,
        e.statusCode || 500,
      );
    }
  }
}
