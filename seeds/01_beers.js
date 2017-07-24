
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beers').del()
    .then(function () {
      // Inserts seed entries
      return knex('beers').insert([
        {
          id: 1,
          name: 'Surrette Provision Saison',
          brewery: 'Crooked Stave Artisan Beer Project',
          style: 'Saison / Farmhouse Ale',
          rating: 10
        },

        {
          id: 2,
          name: 'White Rascal',
          brewery: 'Avery Brewing Company',
          style: 'Witbier',
          rating: 6
        },

        {
          id: 3,
          name: '1554',
          brewery: 'New Belgium Brewing',
          style: 'Euro Dark Lager',
          rating: 9
        },

        {
          id: 4,
          name: 'Hopothermia',
          brewery: 'Alaskan Brewing Co.',
          style: 'American Double / Imperial IPA',
          rating: 8
        },

        {
          id: 5,
          name: 'Hercules Double IPA',
          brewery: 'Great Divide',
          style: 'American Double / Imperial IPA',
          rating: 8
        }
      ]);
    });
};
