# QueueUp UI

React + TypeScript frontend for the QueueUp virtual queue SaaS.

## Start

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

## Architecture

- `app/`: application startup, providers, routing, and layouts
- `features/`: business capabilities such as auth, tenants, and queues
- `pages/`: route-level composition only
- `components/`: reusable components that are not domain-specific
- `api/`: shared HTTP configuration

Keep queue-specific API calls, types, hooks, and components together under
`features/queues`. Do not move every component into the global `components`
folder.
