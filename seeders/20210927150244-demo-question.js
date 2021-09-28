'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions', [{
      lvl: '1',
      content: 'In the UK, the abbreviation NHS stands for National what Service?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '2',
      content: 'Which Disney character famously leaves a glass slipper behind at a royal ball?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '3',
      content: 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '4',
      content: 'Which of these brands was chiefly associated with the manufacture of household locks?',
      created_at: new Date(),
      updated_at: new Date()
    },{
      lvl: '5',
      content: 'The hammer and sickle is one of the most recognisable symbols of which political ideology',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '6',
      content: 'Which toys have been marketed with the phrase “robots in disguise”?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '7',
      content: 'What does the word loquacious mean?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '8',
      content: 'Obstetrics is a branch of medicine particularly concerned with what?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '9',
      content: 'In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '10',
      content: 'Which of these religious observances lasts for the shortest period of time during the calendar year?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '11',
      content: 'At the closest point, which island group is only 50 miles south-east of the coast of Florida?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '12',
      content: 'Construction of which of these famous landmarks was completed first?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '13',
      content: 'Which of these cetaceans is classified as a “toothed whale”?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '14',
      content: 'Who is the only British politician to have held all four “Great Offices of State” at some point during their career?',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      lvl: '15',
      content: 'In 1718, which pirate died in battle off the coast of what is now North Carolina?',
      created_at: new Date(),
      updated_at: new Date()
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
