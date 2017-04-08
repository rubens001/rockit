import { RockitPage } from './app.po';

describe('rockit App', function() {
  let page: RockitPage;

  beforeEach(() => {
    page = new RockitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
