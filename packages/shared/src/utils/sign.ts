import { createHmac } from 'crypto';

/**
 * 对给定的字符串进行  sha256 签名
 * @param {string} str 待签名的字符串
 * @param {string} secret sha256 的密钥
 * @param {string}
 */
export function hmacSHA256(str: string, secret: string): string {
    return createHmac('sha256', secret).update(str).digest('base64');
}

/**
 * 对给定的字符串进行  sha256 签名
 * @param {string} str 待签名的字符串
 * @param {string} secret sha256 的密钥
 * @param {string}
 */
export function hmacSHA256ForFS(str: string): string {
    return createHmac('sha256', str).update('').digest('base64');
}

/**
 * 对给定的 字符串进行 urlEncode
 */
export function urlEncode(str: string): string {
    return encodeURIComponent(str);
}

export function base64(str: string) {
    return Buffer.from(str).toString('base64');
}

/**
 * 生成10位时间戳
 * @returns {string} - 时间戳
 */
export function genTimeStamp() {
    let timestamp = Date.now();
    return String(timestamp).slice(0, 10);
}
