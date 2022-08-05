import { Message } from './Message';

export class Text extends Message {
  protected readonly msgtype = 'text';
  protected readonly canAt: boolean = true;
  protected content: string = '';

  constructor(content: string = '') {
    super();
    this.setContent(content);
  }

  static create(text: string) {
    return new Text(text);
  }

  /**
   * 设置文本内容
   * @param content 内容
   */
  setContent(content: string) {
    this.content = content;
  }

  get() {
    return this.render({
      text: {
        content: this.content,
      },
    });
  }
}
