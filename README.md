# Workflow Handoff Readiness Site

Static credibility page for the $500 one-workflow Handoff Readiness Audit.

## Local Preview

From the repository root:

```bash
source venv/bin/activate
python -m http.server 8090 --directory sites/handoff-readiness
```

Open `http://127.0.0.1:8090/`.

The site has no backend, analytics, cookies, credentials, or form storage. The request form prepares a message in the visitor's local email application.

## Deployment State

- Public deployment source: `https://github.com/benthepythondev00/handoff-readiness`
- Public domain: `handoffreadiness.com` (registered through 2027-07-10)
- Sender: `ben@handoffreadiness.com`
- Current state: public HTTPS site and iCloud mailbox are live

## Publication Checklist

1. [x] Register `handoffreadiness.com`.
2. [x] Set `ben@handoffreadiness.com` in the site and request composer.
3. [x] Add canonical, social-preview, robots, sitemap, and Pages domain files.
4. [x] Activate `ben@handoffreadiness.com` in iCloud+ with Apple MX, SPF, DKIM, ownership TXT, and monitoring DMARC.
5. [x] Publish through GitHub Pages and verify the page, PDF, images, scripts, favicon, robots, and sitemap over HTTPS.
6. [x] Re-run desktop and mobile HTTPS browser checks at 1800px, 390px, and 320px.
7. [x] Enforce HTTPS and verify the apex certificate plus HTTP and `www` redirects.

Do not add analytics, a hosted form, payment collection, or account automation without explicit approval and a privacy review.
