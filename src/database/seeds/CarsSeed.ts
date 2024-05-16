import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    {
      name: "Mobil 1",
      price: 100,
      size: "Small",
      image:
        "https://res.cloudinary.com/dpavtrweo/image/upload/v1715801964/challenge5/hoqqtv26r8qgv46jexlm.jpg",
      start_rent: new Date(),
      finish_rent: new Date(),
      created_at: new Date(),
    },
    {
      name: "Mobil 2",
      price: 500,
      size: "Medium",
      image:
        "https://res.cloudinary.com/dpavtrweo/image/upload/v1715801963/challenge5/wjkgvj4akcrenh1mmwec.jpg",
      start_rent: new Date(),
      finish_rent: new Date(),
      created_at: new Date(),
    },
    {
      name: "Mobil 3",
      price: 900,
      size: "Large",
      image:
        "https://res.cloudinary.com/dpavtrweo/image/upload/v1715801963/challenge5/ifpfouew8d4wlv8zm3in.jpg",
      start_rent: new Date(),
      finish_rent: new Date(),
      created_at: new Date(),
    },
  ]);
}
