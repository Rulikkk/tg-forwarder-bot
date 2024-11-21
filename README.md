# ENV variables

These can be set up with `wrangler secret put NAME_OF_SECRET`

Required:
- `TELEGRAM_TOKEN` - telegram bot token
- `DESTINATION_CHAT` - where it will forward

Optional for Cloudflare/Wrangler in CI/CD:
- `CLOUDFLARE_ACCOUNT_ID` Set to the Cloudflare account ID for the account on which you want to deploy your Worker. [How to find account ID](https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/).
- `CLOUDFLARE_API_TOKEN` [See how to create](https://developers.cloudflare.com/workers/wrangler/ci-cd/#api-token)

