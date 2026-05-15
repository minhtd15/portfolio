# Deployment

## Development
```bash
npm run dev     # starts on http://localhost:3000
```

## Production build (local)
```bash
npm run build
npm start
```

## Deploy to Vercel (recommended)
```bash
npm i -g vercel
vercel          # follow prompts; auto-detects Next.js
```

Or connect the GitHub repo at https://vercel.com/new for CI/CD on every push.

## Contact form
The form currently simulates a submit (1.4 s delay). Wire it to a real backend:
- **Formspree**: replace the `handleSubmit` body with a `fetch` to `https://formspree.io/f/<YOUR_ID>`
- **EmailJS**: call `emailjs.send(...)` with your service/template IDs
- **Custom API route**: add `src/app/api/contact/route.ts` and `POST` there
