import { PreScreenerModule } from './pre-screener.module';

describe('PreScreenerModule', () => {
  let preScreenerModule: PreScreenerModule;

  beforeEach(() => {
    preScreenerModule = new PreScreenerModule();
  });

  it('should create an instance', () => {
    expect(preScreenerModule).toBeTruthy();
  });
});
