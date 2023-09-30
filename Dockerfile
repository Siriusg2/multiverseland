FROM oven/bun

COPY package*.json ./
RUN bun install
COPY . .
EXPOSE 3001
CMD ["bun", "run", "dev"]