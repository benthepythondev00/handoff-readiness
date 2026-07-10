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

- Private deployment source: `https://github.com/benthepythondev00/handoff-readiness`
- Public domain: `handoffreadiness.com` (registered through 2027-07-10)
- Sender: `ben@handoffreadiness.com`
- Current state: production metadata is prepared; DNS, custom mailbox, and public hosting are not complete

## Publication Checklist

1. [x] Register `handoffreadiness.com`.
2. [x] Set `ben@handoffreadiness.com` in the site and request composer.
3. [x] Add canonical, social-preview, robots, sitemap, and Pages domain files.
4. [ ] Create the iCloud+ custom mailbox and configure SPF, DKIM, and DMARC.
5. [ ] Publish through GitHub Pages and verify every PDF/image path.
6. [ ] Re-run desktop and mobile browser checks against the public URL.

Do not add analytics, a hosted form, payment collection, or account automation without explicit approval and a privacy review.
