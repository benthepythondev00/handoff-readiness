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
- Planned public domain: `handoffreadiness.com`
- Planned sender: `ben@handoffreadiness.com`
- Current state: domain purchase, DNS, custom mailbox, and public hosting are not complete

## Publication Checklist

1. Choose the final domain and professional sender mailbox.
2. Replace `bengoedeke@icloud.com` in `index.html` and `script.js`.
3. Add the production canonical URL and absolute social-preview URL.
4. Configure SPF, DKIM, and DMARC for the sender domain.
5. Publish the folder to a static host and verify every PDF/image path.
6. Re-run desktop and mobile browser checks against the public URL.

Do not add analytics, a hosted form, payment collection, or account automation without explicit approval and a privacy review.
