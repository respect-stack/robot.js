import { IRobotBaseAPI, Message, OcrResult } from './api';

const ERROR = Error('');

export class RobotBaseAdapter implements IRobotBaseAPI {
  getMessage(message_id: string | number): Message {
    throw ERROR;
  }
  async sendMessage(
    group_id: string | number,
    message: string,
  ): Promise<number> {
    throw ERROR;
  }

  sendMarkdown(group_id: string | number, message: string): Promise<number> {
    throw ERROR;
  }

  sendActionCard(group_id: string | number, message: string): Promise<number> {
    throw ERROR;
  }

  sendFeedCard(group_id: string | number, message: string): Promise<number> {
    throw ERROR;
  }

  sendLink(group_id: string | number, message: string): Promise<number> {
    throw ERROR;
  }

  deleteMessage(message_id: string | number): Promise<void> {
    throw ERROR;
  }

  getWordSlices(content: string): Promise<string[]> {
    throw ERROR;
  }

  ocrImage(image: string): Promise<OcrResult> {
    throw ERROR;
  }

  deleteUser(user_id: string | number): Promise<void> {
    throw ERROR;
  }

  setGroupBan(
    group_id: string | number,
    user_id: string | number,
    duration?: number,
  ): Promise<void> {
    throw ERROR;
  }

  setGroupWholeBan(group_id: string | number, enable?: boolean): Promise<void> {
    throw ERROR;
  }
}
