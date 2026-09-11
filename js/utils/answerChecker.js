const AnswerChecker = {
  normalize(str) {
    if (str === null || str === undefined) return "";
    return String(str).trim().replace(/\s+/g, " ").toLowerCase();
  },

  simplifyFraction(num, den) {
    if (den === 0) return [num, den];
    const g = this.gcd(Math.abs(num), Math.abs(den));
    return [num / g, den / g];
  },

  gcd(a, b) {
    while (b) {
      [a, b] = [b, a % b];
    }
    return Math.abs(a);
  },

  parseFraction(str) {
    const s = this.normalize(str);
    const m = s.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
    if (m) {
      const num = parseInt(m[1], 10);
      const den = parseInt(m[2], 10);
      if (den === 0) return null;
      return this.simplifyFraction(num, den);
    }
    const n = parseInt(s, 10);
    if (!isNaN(n)) return [n, 1];
    return null;
  },

  fractionsEqual(a, b) {
    return !!(a && b && a[0] === b[0] && a[1] === b[1]);
  },

  checkAsalMasalah(userVal, correctVal) {
    const u = parseInt(this.normalize(userVal), 10);
    const c = parseInt(String(correctVal), 10);
    if (isNaN(u) || isNaN(c)) return false;
    return u === c;
  },

  checkFard(userVal, correctFardh) {
    const u = this.normalize(userVal);
    const cf = this.normalize(correctFardh);
    if (!u || !cf) return false;

    if (u === cf) return true;

    const uf = this.parseFraction(u);
    const cfF = this.parseFraction(cf);
    if (uf && cfF) return this.fractionsEqual(uf, cfF);

    return false;
  },

  checkSahm(userVal, correctSahm) {
    const u = parseInt(this.normalize(userVal), 10);
    const c = parseInt(String(correctSahm), 10);
    if (isNaN(u) || isNaN(c)) return false;
    return u === c;
  },

  validateAnswer(userAnswers, keyQuestion) {
    const keyAnswers = keyQuestion?.answers || [];

    const results = {
      asalMasalah: this.checkAsalMasalah(
        userAnswers.asalMasalah,
        keyQuestion.asalMasalah
      ),
      heirs: keyAnswers.map((a, i) => ({
        heir: a.heir,
        fard: this.checkFard(userAnswers.heirs[i]?.fard || "", a.fardh),
        sahm: this.checkSahm(userAnswers.heirs[i]?.sahm || "", a.sahm),
      })),
      needsReview: FaraidhStore.isSkippable(keyQuestion),
    };

    results.allCorrect =
      results.asalMasalah && results.heirs.every((h) => h.fard && h.sahm);

    return results;
  },
};