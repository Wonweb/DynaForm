import { DynamicForm3Page } from './app.po';

describe('dynamic-form3 App', () => {
  let page: DynamicForm3Page;

  beforeEach(() => {
    page = new DynamicForm3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
