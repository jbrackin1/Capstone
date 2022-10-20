/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('processors').del()
  await knex('processors').insert([
    {
      name: "Joe",
      description: "Lafayette based processer",
      processing_rate: 125.50,
      image_url:
        "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      name: "Shmo",
      description: "Another Lafayette based processer",
      processing_rate: 135.50,
      image_url:
        "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
    },
   
  ]);
};
