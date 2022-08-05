import { DingRobot } from "../packages/dingding/src/index";

export const TEST_TOKEN =
  'b21852277713713e6fb75b7328b293ace554a18b8c132fe5370bb440ed7c4928';
export const TEST_SECRET =
  'SEC3dee817e5c874447d9a73a9dc53f7075d8f6d3c29da464f45c8dad307b9260d2';

test('钉钉机器人 - 文本', async () => {
  const ding = new DingRobot(TEST_TOKEN, TEST_SECRET);
  const result = await ding.sendMessage('test');
  expect(result.success).toBe(true);
});
