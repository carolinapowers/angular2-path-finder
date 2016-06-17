import { Angular2PathFinderPage } from './app.po';

describe('angular2-path-finder App', function() {
  let page: Angular2PathFinderPage;

  beforeEach(() => {
    page = new Angular2PathFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
