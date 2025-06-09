import { Test, TestingModule } from '@nestjs/testing';
import { MarketOfferService } from './market-offer.service';

describe('MarketOfferService', () => {
    let service: MarketOfferService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MarketOfferService],
        }).compile();

        service = module.get<MarketOfferService>(MarketOfferService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
