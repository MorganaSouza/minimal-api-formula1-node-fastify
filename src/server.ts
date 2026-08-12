import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({
    logger: true,
});

// CORS
server.register(cors, {
    origin: true,
});

// Dados iniciais
let products = [
    {
    id: 1,
    name: "Gloss Crystal",
    category: "maquiagem",
    brand: "Glow Beauty",
    price: 39.90,
    },
    {
    id: 2,
    name: "Serum Vitamina C",
    category: "skincare",
    brand: "Skin Glow",
    price: 59.90,
    },
    {
    id: 3,
    name: "Perfume Blossom",
    category: "perfume",
    brand: "Bella",
    price: 129.90,
    },
    {
    id: 4,
    name: "Hair Oil",
    category: "cabelo",
    brand: "Glow Hair",
    price: 49.90,
    },
];

// ========================================
// GET /
// ========================================

server.get("/", async (request, response) => {
    response.type("application/json").code(200);

    return {
    message: "Glow API funcionando! ",
    };
});

// ========================================
// GET /products
// Listar produtos + filtro por categoria
// ========================================

server.get("/products", async (request, response) => {
    const { category } = request.query as {
    category?: string;
    };

    response.type("application/json").code(200);

  // Filter Product
    if (category) {
    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    return filteredProducts;
    }

    return products;
});

// ========================================
// GET /products/:id
// Buscar produto por ID
// ========================================

server.get("/products/:id", async (request, response) => {
    const { id } = request.params as {
    id: string;
    };

    const product = products.find(
    (product) => product.id === Number(id)
    );

    if (!product) {
    response.type("application/json").code(404);

    return {
        message: "Produto não encontrado",
    };
    }

    response.type("application/json").code(200);

    return product;
});

// ========================================
// POST /products
// Criar novo produto
// ========================================

server.post("/products", async (request, response) => {
    const body = request.body as {
    name: string;
    category: string;
    brand: string;
    price: number;
    };

    const newProduct = {
    id: products.length + 1,
    name: body.name,
    category: body.category,
    brand: body.brand,
    price: body.price,
    };

    products.push(newProduct);

    response.type("application/json").code(201);

    return newProduct;
});

// ========================================
// PUT /products/:id
// Atualizar produto
// ========================================

server.put("/products/:id", async (request, response) => {
    const { id } = request.params as {
    id: string;
    };

    const body = request.body as {
    name: string;
    category: string;
    brand: string;
    price: number;
    };

    const productIndex = products.findIndex(
    (product) => product.id === Number(id)
    );

    if (productIndex === -1) {
    response.type("application/json").code(404);

    return {
        message: "Produto não encontrado",
    };
    }

    products[productIndex] = {
    id: Number(id),
    name: body.name,
    category: body.category,
    brand: body.brand,
    price: body.price,
    };

    response.type("application/json").code(200);

    return products[productIndex];
});

// ========================================
// DELETE /products/:id
// Excluir produto
// ========================================

server.delete("/products/:id", async (request, response) => {
    const { id } = request.params as {
    id: string;
    };

    const productIndex = products.findIndex(
    (product) => product.id === Number(id)
    );

    if (productIndex === -1) {
    response.type("application/json").code(404);

    return {
        message: "Produto não encontrado",
    };
    }

    const deletedProduct = products.splice(productIndex, 1);

    response.type("application/json").code(200);

    return {
    message: "Produto excluído com sucesso",
    product: deletedProduct[0],
    };
});

// ========================================
// SERVER
// ========================================

server.listen(
    {
    port: 3333,
    },
    () => {
    console.log("Glow API iniciada na porta 3333 ");
    }
);