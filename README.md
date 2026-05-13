# GeoRanking LP

Landing page moderna em Next.js para o projeto GeoRanking.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Docker & Docker Swarm

## Como rodar localmente (sem Docker)
```bash
pnpm install
pnpm dev
```

## Como rodar localmente (com Docker Desktop)
```bash
docker compose -f deploy/compose.local.yml up --build
```

## Como gerar build standalone
O build é configurado para modo standalone no `next.config.ts`.
```bash
pnpm build
```

## Como publicar imagem (GHCR)
O deploy é automatizado via GitHub Actions.
Imagem: `ghcr.io/dawysondev-netizen/georanking-lp:latest`

## Como fazer deploy no Portainer
1. Copie o conteúdo de `deploy/stack.production.portainer.yml` ou `deploy/stack.staging.portainer.yml`.
2. No Portainer, vá em Stacks -> Add stack.
3. Cole o conteúdo e ajuste as variáveis de ambiente.

## Checklist de deploy
- [ ] Validar build standalone localmente.
- [ ] Publicar imagem no GHCR.
- [ ] Configurar DNS (Cloudflare).
- [ ] Configurar Stack no Portainer.
