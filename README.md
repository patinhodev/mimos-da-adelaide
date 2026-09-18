# Mimos da Adelaide

Site estático do ateliê Mimos da Adelaide. O carrinho prepara o resumo do pedido para envio via WhatsApp; valores e frete são confirmados no atendimento.

## Estrutura

- `assets/css/`: estilos de produção e estilos das páginas legais.
- `assets/js/`: interface da loja e carregador opcional do Google Analytics.
- `assets/images/`: fotos e elementos visuais do site.
- `docs/`: instruções de deploy, indexação e Analytics.
- `_headers`: cabeçalhos de segurança e cache para Cloudflare Pages.

## Rodar com Docker

```bash
docker compose up --build
```

Abra `http://localhost:8080`.

## Deploy, indexação e métricas

Consulte [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). O Analytics fica desativado por padrão e não realiza coleta até receber um Measurement ID válido e consentimento explícito.
