import { Message } from './Message';

type linkType = {
    title: string; // 消息标题
    text: string; // 消息内容。如果太长只会部分展示
    messageUrl: string; // 点击消息跳转的URL
    picUrl: string; // 图片URL
};

export class Link extends Message {
    protected readonly msgtype = 'link';
    protected link: linkType = {
        title: '',
        text: '',
        messageUrl: '',
        picUrl: '',
    };

    constructor() {
        super();
    }

    static create() {
        return new Link();
    }

    /**
     * 设置消息标题
     * @param title 消息标题
     */
    setTitle(title: String) {
        this.link.title = title;
    }

    /**
     * 设置点击消息跳转的URL
     * @param messageUrl 点击消息跳转的URL
     */
    setMessageUrl(messageUrl: String) {
        this.link.messageUrl = messageUrl;
    }

    /**
     * 设置消息内容
     * @param text 消息内容
     */
    setText(text: String) {
        this.link.text = text;
    }

    /**
     * 设置图片URL
     * @param picUrl 图片URL
     */
    setPicUrl(picUrl: String) {
        this.link.picUrl = picUrl;
    }

    get(isFS: boolean = false) {
        return this.render({
            link: this.link,
        });
    }
}
