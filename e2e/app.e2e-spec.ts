import { BookNotesPage } from './app.po';

describe('book-notes App', () => {
  let page: BookNotesPage;

  beforeEach(() => {
    page = new BookNotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
