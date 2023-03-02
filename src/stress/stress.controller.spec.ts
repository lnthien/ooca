import { Test, TestingModule } from '@nestjs/testing';
import { StressModule } from './stress.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('StressController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [StressModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('Get all records successfully', async () => {
    await request(app.getHttpServer()).get('/stress').expect(200);
  });

  it('Create new record successfully', async () => {
    await request(app.getHttpServer())
      .post('/stress')
      .send({
        stressLevel: 0,
        associateImg: '',
      })
      .expect(201);
    // .expect({ stressLevel: 0, associateImg: '', createdAt: isDate});
  });
});
