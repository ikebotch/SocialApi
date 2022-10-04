import { Test, TestingModule } from '@nestjs/testing';
import { SubServiceController } from './sub-service.controller';

describe('SubServiceController', () => {
  let controller: SubServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubServiceController],
    }).compile();

    controller = module.get<SubServiceController>(SubServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
