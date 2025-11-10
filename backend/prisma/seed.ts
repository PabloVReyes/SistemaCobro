// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Crear usuarios
    const usuarios = await prisma.usuario.createMany({
        data: [
            { nombre: "Admin", usuario: "admin", password: "admin123", rol: "Administrador" },
            { nombre: "Cajero 1", usuario: "cajero1", password: "123456", rol: "Cajero" },
        ],
    });

    // Crear vecinos
    const vecinos = await prisma.vecino.createMany({
        data: [
            { nombre: "Juan Pérez", direccion: "Calle 1 #123" },
            { nombre: "María López", direccion: "Av. Central #456" },
            { nombre: "Carlos Ruiz", direccion: "Col. Reforma #789" },
        ],
    });

    // Obtener IDs creados para relaciones
    const usuarioAdmin = await prisma.usuario.findFirst({ where: { usuario: "admin" } });
    const vecino = await prisma.vecino.findFirst();

    // Crear cobros aleatorios
    if (usuarioAdmin && vecino) {
        for (let i = 1; i <= 5; i++) {
            await prisma.cobro.create({
                data: {
                    monto: Math.floor(Math.random() * 500) + 100,
                    metodo: ["Efectivo", "Tarjeta", "Transferencia"][Math.floor(Math.random() * 3)],
                    vecinoId: vecino.id,
                    usuarioId: usuarioAdmin.id,
                },
            });
        }
    }

    console.log("✅ Datos de prueba insertados correctamente.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
