/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      content: "Joe S",
      score: 1,
    },
    {
      content: "Lyfter",
      score: 5,
    },
    {
      content: "FarmerOne",
      score: 3,
    },
  ]);
};
