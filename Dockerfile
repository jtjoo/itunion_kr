# To use this Dockerfile, you need `output: 'standalone'` in your next.config.ts
FROM node:22-alpine AS base

# ── deps: install all dependencies (including devDeps needed for build) ──────
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
# NODE_ENV must NOT be production here — pnpm skips devDependencies otherwise
RUN corepack enable pnpm && NODE_ENV=development pnpm i --frozen-lockfile

# ── builder: compile the Next.js + Payload app ───────────────────────────────
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time env vars (Coolify injects these as ARGs/secrets)
# DATABASE_URL needs a dummy value for Payload config to load; actual DB used at runtime
ARG DATABASE_URL=postgresql://localhost/dummy
ARG PAYLOAD_SECRET=build-time-placeholder-secret-key
ARG NEXT_PUBLIC_SERVER_URL=http://localhost:3000

ENV DATABASE_URL=${DATABASE_URL}
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}
ENV NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL}
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable pnpm && pnpm run build

# ── runner: minimal production image ─────────────────────────────────────────
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
