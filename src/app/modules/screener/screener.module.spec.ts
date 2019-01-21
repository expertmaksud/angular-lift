import { ScreenerModule } from './screener.module';

describe('ScreenerModule', () => {
  let screenerModule: ScreenerModule;

  beforeEach(() => {
    screenerModule = new ScreenerModule();
  });

  it('should create an instance', () => {
    expect(screenerModule).toBeTruthy();
  });
});
