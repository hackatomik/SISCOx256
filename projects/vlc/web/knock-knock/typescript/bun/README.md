# Knock Knock Server (TypeScript Edition: `Bun`)

Este proyecto es una implementación de _"KnockKnock Server"_ en TypeScript usando Bun.

[Bun](https://bun.sh/) es un "runtime" de JavaScript moderno y rápido que se puede usar en entornos de ejecución distintintos a el navegador. Similar a [Node.js](https://nodejs.org) pero más ligero y rápido. Aún está en una etapa temprana y se debe tener precaución al usarlo en producción, a diferencia de Node.js que es más estable, pero me gusta y es divertido de usar.

## Cómo usar

Instalar [Bun](https://bun.sh/) en Linux, MacOS o WSL2:

```bash
curl -fsSL https://bun.sh/install | bash
```

Ubicarse en el directorio "root" del proyecto.

Instalar dependencias:

```bash
bun install
```

Ejecutar el servidor:

```bash
bun run src/server.ts
```

Ejecutar el cliente:

```bash
bun run src/client.ts
```

Interactuar mediante la terminal.
