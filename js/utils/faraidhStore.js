const FaraidhStore = {
  allQuestions() {
    return FARAIDH_ANSWER_KEY.questions || [];
  },

  metadata() {
    return FARAIDH_ANSWER_KEY.metadata || {};
  },

  getQuestionById(id) {
    return this.allQuestions().find((q) => q.id === id) || null;
  },

  getAnswerKeyById(id) {
    return this.getQuestionById(id);
  },

  isSkippable(q) {
    return (
      !q ||
      q.needsReview === true ||
      q.id === 423 ||
      !q.answers ||
      q.answers.length === 0 ||
      q.answers.some((a) => a.fardh === "مراجعة" || a.fardh == null)
    );
  },

  availableQuestions() {
    return this.allQuestions().filter((q) => !this.isSkippable(q));
  },

  buildSession(limit = 10) {
    const pool = this.availableQuestions();
    return pool.slice(0, limit).map((q) => ({
      id: q.id,
      question: q.question,
      heirs: q.heirs,
      asalMasalah: q.asalMasalah,
      answers: q.answers,
      notes: q.notes || [],
      needsReview: false,
    }));
  },
};