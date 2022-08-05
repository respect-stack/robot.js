export class Message {
  protected msgtype: string = '';
  protected canAt: boolean = false;
  protected isAtAll: boolean = false;
  protected atMobiles: Set<String> = new Set();

  constructor() {
    if (new.target === Message) {
      throw new Error('抽象类不可以实例化');
    }
  }

  protected render(options: Object) {
    return Object.assign(
      {
        msgtype: this.msgtype,
      },
      options,
      this.canAt
        ? {
            at: {
              atMobiles: Array.from(this.atMobiles),
              isAtAll: this.isAtAll,
            },
          }
        : {},
    );
  }

  get(isFS: boolean = false): Record<string, any> {
    throw new Error('抽象方法render不可以调用');
  }

  protected toJsonString() {
    throw new Error('抽象方法toJsonString不可以调用');
  }

  atAll() {
    this.isAtAll = true;
    return this;
  }

  at(phone: String): Message;
  at(phones: String[]): Message;
  at(phones: String[] | String): Message {
    if (phones instanceof Array) {
      phones.map((phone) => {
        this.atMobiles.add(phone);
      });
    } else {
      this.atMobiles.add(phones);
    }
    return this;
  }
}
