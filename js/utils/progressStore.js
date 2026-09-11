const ProgressStore = {
  KEY: "faraidh_progress_v1",
  data: {},

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      this.data = raw ? JSON.parse(raw) : {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(this.data));
    } catch (e) {
      // penyimpanan tidak tersedia (mis. mode privat) - abaikan
    }
  },

  setAttempted(id) {
    if (this.data[id] !== "correct") this.data[id] = "attempted";
    this.save();
  },

  setCorrect(id) {
    this.data[id] = "correct";
    this.save();
  },

  getStatus(id) {
    return this.data[id] || "unstarted";
  },
};