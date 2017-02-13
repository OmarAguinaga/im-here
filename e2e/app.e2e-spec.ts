import { ImHerePage } from './app.po';

describe('im-here App', function() {
  let page: ImHerePage;

  beforeEach(() => {
    page = new ImHerePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
