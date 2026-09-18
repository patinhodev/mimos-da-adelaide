# Deployment

## GitHub

1. Create an empty GitHub repository.
2. Add it as `origin`.
3. Push the `main` branch.

```bash
git remote add origin https://github.com/SEU-USUARIO/mimos-da-adelaide.git
git push -u origin main
```

## Cloudflare Pages

Create a Pages project from the GitHub repository with these settings:

- Build command: leave blank
- Build output directory: `.`
- Production branch: `main`

Enable `Full (strict)` SSL/TLS and **Always Use HTTPS** after connecting the domain.

## Search indexing

After the final domain is live, create `sitemap.xml` with absolute URLs, reference it from `robots.txt`, then verify the domain in Google Search Console and submit the sitemap.

## Google Analytics 4

The analytics loader is intentionally inactive. To enable it later:

1. Create a GA4 web data stream and copy its Measurement ID (`G-...`).
2. Put the ID in the `google-analytics-id` meta tag in `index.html`.
3. Update the cookie policy and add an explicit analytics-consent action before enabling collection.

No Analytics request is made while the ID is empty.
