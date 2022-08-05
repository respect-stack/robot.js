import { axios, hmacSHA256, RobotBaseAdapter, urlEncode } from '@robot/shared';
import { Text } from './template/Text';
import { TDingPostRep } from './types';

const DING_WEBHOOK_BASE = 'https://api.dingtalk.com/robot/send?access_token=';
export class DingRobot extends RobotBaseAdapter {
  private robotHookUrl: string;
  private secret: string;

  constructor(token: String, secret: string) {
    super();
    this.robotHookUrl = `${DING_WEBHOOK_BASE}${token}`;
    this.secret = secret;
  }

  /**
   * 发送消息
   * @param text 消息内容
   * @param webhookUrlWithSession 回复消息时使用
   * @returns
   */
  async sendMessage(
    text: string,
    webhookUrlWithSession?: string,
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const message = Text.create(text);
      const rep = await axios.post(
        webhookUrlWithSession || this.getWebHookUrl(),
        message.get(),
      );
      let { errcode, errmsg } = rep as TDingPostRep;
      if (errcode) {
        reject({
          errcode,
          errmsg,
        });
      } else {
        resolve({
          success: true,
        });
      }
    });
  }

  async sendBySession(webhookUrl: string, text: string) {
    return await this.sendMessage(text, webhookUrl);
  }

  /**
   * 获取带签名的 webhook 地址
   * @returns webhook string
   */
  private getWebHookUrl() {
    let webhookUrl = `${this.robotHookUrl}`;
    if (this.secret) {
      const timestamp = Date.now();
      webhookUrl += `&timestamp=${timestamp}`;
      webhookUrl += `&sign=${urlEncode(
        hmacSHA256(timestamp + '\n' + this.secret, this.secret),
      )}`;
    }
    return webhookUrl;
  }
}
