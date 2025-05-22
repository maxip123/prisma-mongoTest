import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();


export async  function getAllAnimales(req, res) {
        const animales = await prisma.Animal.findMany();
        res.json(animales);
    try {

    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError) {
            console.error("Prisma Client Error: ", error.message);
            res.status(500).json({ error: "Database error occurred" });
        }
        console.error("Error: ", error.message);
        res.status(500).json({ error: "An error occurred" });

    }

}

export async function createAnimal(req, res) {
    const { nombre, imgurl, edad } = req.body;
    if (!nombre || !imgurl || !edad) {
        return res.status(400).json({ error: "All fields are required" });
    }
    console.log(req.body)
    try {
        const newAnimal = await prisma.Animal.create({
            data: {
                nombre,
                edad,
                imgurl
            }
        });
        res.status(201).json(newAnimal);
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            console.error("Prisma Client Error: ", error.message);
            res.status(500).json({ error: "Database error occurred" });
        }
        console.error("Error: ", error.message);
        res.status(500).json({ error: "An error occurred" });
    }
}
