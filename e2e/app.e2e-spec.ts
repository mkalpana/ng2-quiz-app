import { Ng2QuizAppPage } from './app.po';

describe('ng2-quiz-app App', function() {
  let page: Ng2QuizAppPage;

  beforeEach(() => {
    page = new Ng2QuizAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
