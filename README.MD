
<div align="center">

  <img src="./.github/assets/glow-api.png" alt="Glow API" height="200">

  <h1 align="center"><strong>GLOW API - BEAUTY EDITION</strong></h1>

  <p align="center">
	  A simple and efficient <b>Node.js API</b> for beauty and self-care products.<br>
	  Developed with <b>TypeScript</b> and <b>Fastify</b>.
  </p>

</div>

<br />

<!-- Badges -->

<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]

</div>

# 🚀 Technologies

This code source was developed with the following items:

### 📦 Dependencies

- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute: Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript application with no config, powered by esbuild
- [@types/node][@types-node-npm] - Type definitions for Node.js
- [fastify][fastify-npm] - Fast and low overhead web framework for Node.js
- [@fastify/cors][cors-npm] - CORS support for Fastify

### 📄 Files

- `.gitignore` - Ignore folders like node_modules
- `.env` - Environment variables
- `tsconfig.json` - TypeScript configuration options
- `src/server.ts` - Main API server and endpoints

### ⚡ Scripts

- `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
- `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
- `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.

# 💄 Glow API

Glow API is a minimal REST API for managing beauty and self-care products.

The project was developed using Node.js, TypeScript and Fastify.

The API implements basic CRUD operations, allowing users to create, read, update and delete products.

# 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Check if the API is running |
| GET | `/products` | List all products |
| GET | `/products/:id` | Find a product by ID |
| GET | `/products?category=skincare` | Filter products by category |
| POST | `/products` | Create a new product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

# 🔎 Filter Products

Products can be filtered by category using the `category` query parameter.

Example:

```bash
GET /products?category=skincare
````

# 📦 Example Product

```json
{
  "id": 1,
  "name": "Gloss Crystal",
  "category": "maquiagem",
  "brand": "Glow Beauty",
  "price": 39.90
}
```

# 🛠️ How To Use

To clone and run this application, you'll need Git, Node.js v20+ and NPM v10+ installed on your computer.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/MorganaSouza/glow-api

# Go into the project
$ cd glow-api

# Install dependencies
$ npm install

# Run the application
$ npm run start:watch
```

The API will be available at:

```text
http://localhost:3333
```

# 🧪 CRUD

### Create

```http
POST /products
```

### Read

```http
GET /products
GET /products/:id
```

### Update

```http
PUT /products/:id
```

### Delete

```http
DELETE /products/:id
```

# Author

**Morgana Souza**

Systems Analysis and Development Student

#  Project

This project was developed as a practical challenge focused on building a Minimal API using Node.js, TypeScript and Fastify.

The original Formula 1 theme was adapted into a beauty and self-care products API.

#  Credits

Developed as part of the DIO bootcamp challenge.

Inspired by the concepts presented by Felipe Aguiar.

---

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-%3E=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types-node-npm]: https://www.npmjs.com/package/@types/node
[fastify-npm]: https://www.npmjs.com/package/fastify
[cors-npm]: https://www.npmjs.com/package/@fastify/cors

```
```
