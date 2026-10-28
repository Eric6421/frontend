# UpCareer Web Results UI

Next.js (TypeScript + Tailwind CSS) frontend for the **RAYW4** FYP proposal:

> Matching Through Play: A Session-Aware Two-Tower Recommendation System for SEN Employment

## Pages

| Route | Description |
| --- | --- |
| `/login` | Sign-in screen (matches proposal mockup) |
| `/applicant/outcome` | Top 20 recommended jobs table |
| `/applicant/cmf-score` | Draft CMF score report (24 competencies + 8 attitudes) |
| `/applicant/demographic` | Applicant demographic summary |
| `/employer` | Employer view placeholder |

## Demo login

- Any username **not** starting with `emp` → Applicant UI
- Username starting with `emp` (e.g. `emp_techcorp`) → Employer placeholder
- Any non-empty password is accepted (mock auth via `localStorage`)

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- lucide-react icons

Mock job/CMF data lives in `src/lib/mock-data.ts` and will later be replaced by FastAPI responses.
