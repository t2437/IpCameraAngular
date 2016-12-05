import { IpCamerasPage } from './app.po';

describe('ip-cameras App', function() {
  let page: IpCamerasPage;

  beforeEach(() => {
    page = new IpCamerasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
