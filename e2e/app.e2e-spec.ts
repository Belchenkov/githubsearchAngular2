import { Angular2githubsearchPage } from './app.po';

describe('angular2githubsearch App', function() {
  let page: Angular2githubsearchPage;

  beforeEach(() => {
    page = new Angular2githubsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
