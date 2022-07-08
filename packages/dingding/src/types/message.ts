export enum EMsgtype {
  TEXT = 'text',
  LINK = 'link',
  MARKDOWN = 'markdown',
  ACTION_CARD = 'actionCard',
  FEED_CARD = 'feedCard',
  EMPTY = 'empty',
}

export type TDingdingBotWebhookMessage_AT = {
  at: {
    atMobiles: string[];
    atUserIds: string[];
    /**
     * @所有人是true，否则为false。
     */
    isAtAll: boolean;
  };
};
export type TDingdingBotWebhookMessage4Text = TDingdingBotWebhookMessage_AT & {
  text: {
    content: string;
  };
  msgtype: EMsgtype.TEXT;
};

export type TDingdingBotWebhookMessage4Link = {
  msgtype: EMsgtype.LINK;
  link: {
    text: string;
    title: string;
    picUrl: string;
    messageUrl: string;
  };
};

export type TDingdingBotWebhookMessage4Markdown =
  TDingdingBotWebhookMessage_AT & {
    msgtype: EMsgtype.MARKDOWN;
    markdown: {
      /**
       * 首屏会话透出的展示内容。
       */
      title: string;
      /**
       * Markdown格式的消息内容。
       */
      text: string;
    };
  };

export type TDingdingBotWebhookMessage4ActionCard =
  TDingdingBotWebhookMessage_AT & {
    msgtype: EMsgtype.ACTION_CARD;
    actionCard: {
      title: string;
      text: string;
      /**
       * 单个按钮的标题。
       */
      singleTitle?: string;
      /**
       * 单个按钮的跳转链接。
       */
      singleURL?: string;
      /**
       * 0：按钮竖直排列
       * 1：按钮横向排列
       */
      btnOrientation?: '0' | '1';
      /**
       * 按钮
       */
      btns?: Array<{
        title: string;
        /**
         * 点击按钮触发的URL
         */
        actionURL: string;
      }>;
    };
  };

export type TDingdingBotWebhookMessage4FeedCard =
  TDingdingBotWebhookMessage_AT & {
    msgtype: EMsgtype.FEED_CARD;
    feedCard: {
      links: Array<{
        title: string;
        messageURL: string;
        picURL: string;
      }>;
    };
  };

export type TDingdingBotWebhookMessage =
  | TDingdingBotWebhookMessage4Text
  | TDingdingBotWebhookMessage4Markdown
  | TDingdingBotWebhookMessage4FeedCard
  | TDingdingBotWebhookMessage4ActionCard
  | TDingdingBotWebhookMessage4Link;
