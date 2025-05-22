export function intPrisma(data) {
    const sd2= JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? Number(value.toString()) : value
    );
    return JSON.parse(sd2);
    }