'use strict';
const {sequelize,QueryTypes} = require("../models/index");


async function getQuestionId(query){
  let arr = await sequelize.query(query, { type: QueryTypes.SELECT });
  return arr[0].id;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let questionId = await getQuestionId("SELECT id FROM questions WHERE content='In the UK, the abbreviation NHS stands for National what Service?' ");
     await queryInterface.bulkInsert('answers', [{
      content: 'Humanity',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Health',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Honour',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Household',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    //// 2
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='Which Disney character famously leaves a glass slipper behind at a royal ball?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Pocahontas',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Sleeping Beauty',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Cinderella',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Elsa',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    //// 3
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Hangar',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Terminal',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Concourse',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Carousel',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    
    // / 4
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='Which of these brands was chiefly associated with the manufacture of household locks?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Phillips',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Flymo',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Chubb',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Ronseal',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // // 5
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='The hammer and sickle is one of the most recognisable symbols of which political ideology' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Republicanism',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Communism',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Conservatism',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Liberalism',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // 6
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='Which toys have been marketed with the phrase “robots in disguise”?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Bratz Dolls',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Sylvanian Families',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Hatchimals',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Transformers',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // 7
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='What does the word loquacious mean?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Angry',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Chatty',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Beautiful',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Shy',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // 8
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='Obstetrics is a branch of medicine particularly concerned with what?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Childbirth',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Broken bones',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Heart conditions',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Old age',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    //  9
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Bow-tie, braces and tweed jacket',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Wide-brimmed hat and extra long scarf',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Pinstripe suit and trainers',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Cape, velvet jacket and frilly shirt',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // 10
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='Which of these religious observances lasts for the shortest period of time during the calendar year?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Ramadan',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Diwali',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Lent',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Hanukkah',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // 11
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='At the closest point, which island group is only 50 miles south-east of the coast of Florida?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Bahamas',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'US Virgin Islands',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Turks and Caicos Islands',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Bermuda',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // 12
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='Construction of which of these famous landmarks was completed first?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Empire State Building',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Royal Albert Hall',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Eiffel Tower',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Big Ben Clock Tower',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // 13
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='Which of these cetaceans is classified as a “toothed whale”?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'Gray whale',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Minke whale',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Sperm whale',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Humpback whale',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    // 14
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='Who is the only British politician to have held all four “Great Offices of State” at some point during their career?' ");
    await queryInterface.bulkInsert('answers', [
    {
      content: 'David Lloyd George',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Harold Wilson',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'James Callaghan',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'John Major',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    }])
    //  15
    questionId = await getQuestionId("SELECT id FROM questions WHERE content='In 1718, which pirate died in battle off the coast of what is now North Carolina?' ");
    return queryInterface.bulkInsert('answers', [
    {
      content: 'Calico Jack',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Blackbeard',
      response : true,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: ' Bartholomew Roberts',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      content: 'Captain Kidd',
      response : false,
      question_id: questionId,
      created_at: new Date(),
      updated_at: new Date()
    },
    
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('answers', null, {});
  }
};