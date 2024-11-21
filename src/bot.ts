import { Bot, webhookCallback } from 'grammy';
import { ParseMode, WebhookInfo } from 'grammy/types';
import { Env } from './index.js';

let bot: Bot;

export function setupBot(env: Env) {
	bot = new Bot(env.TELEGRAM_TOKEN);

	bot.on('message', async (ctx) => {
		await ctx.copyMessage(env.DESTINATION_CHAT);
	});
}

export async function resetWebhook(expectedUrl: string) {
	let info: WebhookInfo | null = null;

	try {
		info = await bot.api.getWebhookInfo();
	} catch {}

	if (info && info.url === expectedUrl) return 'Webhook already fine!';

	const resetResult = await bot.api.setWebhook(expectedUrl);

	return `Webhook reset to ${expectedUrl} with result: ${resetResult}`;
}

export function getHandler() {
	return webhookCallback(bot, 'cloudflare-mod');
}