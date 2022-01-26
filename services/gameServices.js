async function getQuestion(searchParamObj, Question, Answer) {
    return await Question.findOne({ where: searchParamObj, 
        include: { model: Answer.scope('withoutResponse') } })
}

module.exports = {
    getQuestion
}