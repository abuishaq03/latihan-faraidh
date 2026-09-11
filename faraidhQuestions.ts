export type FaraidhAnswer = {
  heir: string;
  fardh: string | null;
  sahm: number | null;
};

export type FaraidhQuestion = {
  id: number;
  question: string;
  heirs: string[];
  asalMasalah: number | null;
  answers: FaraidhAnswer[];
  explanation: string | null;
};

export const faraidhQuestions: FaraidhQuestion[] = [
  {
    "id": 1,
    "question": "زوج",
    "heirs": [
      "زوج"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 2,
    "question": "زوج، عم",
    "heirs": [
      "زوج",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 3,
    "question": "زوج، ابن",
    "heirs": [
      "زوج",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 4,
    "question": "زوجة",
    "heirs": [
      "زوجة"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 5,
    "question": "زوجة، عم",
    "heirs": [
      "زوجة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 6,
    "question": "زوجة، ابن",
    "heirs": [
      "زوجة",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 7,
    "question": "أب",
    "heirs": [
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 8,
    "question": "أب، ابن",
    "heirs": [
      "أب",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 9,
    "question": "زوج، أب",
    "heirs": [
      "زوج",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 10,
    "question": "زوجة، أب",
    "heirs": [
      "زوجة",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 11,
    "question": "زوج، أب، ابن",
    "heirs": [
      "زوج",
      "أب",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 12,
    "question": "زوجة، أب، ابن",
    "heirs": [
      "زوجة",
      "أب",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 13,
    "question": "أم",
    "heirs": [
      "أم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 14,
    "question": "أم، عم",
    "heirs": [
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 15,
    "question": "أم، ابن",
    "heirs": [
      "أم",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 16,
    "question": "أم، أب",
    "heirs": [
      "أم",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 17,
    "question": "زوج، أم، عم",
    "heirs": [
      "زوج",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 18,
    "question": "زوج، أم، ابن",
    "heirs": [
      "زوج",
      "أم",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 19,
    "question": "زوجة، أم، عم",
    "heirs": [
      "زوجة",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 20,
    "question": "زوجة، أم، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 21,
    "question": "زوج، أم، أب",
    "heirs": [
      "زوج",
      "أم",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 22,
    "question": "زوجة، أم، أب",
    "heirs": [
      "زوجة",
      "أم",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 23,
    "question": "زوج، أم، أب، ابن",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 24,
    "question": "زوجة، أم، أب، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 25,
    "question": "جدّ",
    "heirs": [
      "جدّ"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "جدّ",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 26,
    "question": "جد، ابن",
    "heirs": [
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 27,
    "question": "زوج، جد",
    "heirs": [
      "زوج",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 28,
    "question": "زوجة، جد",
    "heirs": [
      "زوجة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 29,
    "question": "زوج، جد، ابن",
    "heirs": [
      "زوج",
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 30,
    "question": "زوجة، جد، ابن",
    "heirs": [
      "زوجة",
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 31,
    "question": "أم، جد",
    "heirs": [
      "أم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 32,
    "question": "زوج، أم، جد",
    "heirs": [
      "زوج",
      "أم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 33,
    "question": "زوجة، أم، جد",
    "heirs": [
      "زوجة",
      "أم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 34,
    "question": "زوج، أم، جد، ابن",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 35,
    "question": "زوجة، أم، جد، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 36,
    "question": "جدة",
    "heirs": [
      "جدة"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 37,
    "question": "جدة، عم",
    "heirs": [
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 38,
    "question": "جدة، ابن",
    "heirs": [
      "جدة",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 39,
    "question": "جدة، أب",
    "heirs": [
      "جدة",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 40,
    "question": "زوج، جدة، عم",
    "heirs": [
      "زوج",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 41,
    "question": "زوج، جدة، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 42,
    "question": "زوجة، جدة، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 43,
    "question": "زوجة، جدة، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 44,
    "question": "زوج، جدة، أب",
    "heirs": [
      "زوج",
      "جدة",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 45,
    "question": "زوجة، جدة، أب",
    "heirs": [
      "زوجة",
      "جدة",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 46,
    "question": "زوج، جدة، أب، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 47,
    "question": "زوجة، جدة، أب، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 48,
    "question": "جدة، جد",
    "heirs": [
      "جدة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 49,
    "question": "زوج، جدة، جد",
    "heirs": [
      "زوج",
      "جدة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 50,
    "question": "زوجة، جدة، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 51,
    "question": "زوج، جدة، جد، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 52,
    "question": "زوجة، جدة، جد، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 53,
    "question": "بنت/بنات",
    "heirs": [
      "بنت/بنات"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت/بنات",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 54,
    "question": "بنت، عم",
    "heirs": [
      "بنت",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 55,
    "question": "بنت، ابن",
    "heirs": [
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 56,
    "question": "زوج، بنت، عم",
    "heirs": [
      "زوج",
      "بنت",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 57,
    "question": "زوجة، بنت، عم",
    "heirs": [
      "زوجة",
      "بنت",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 58,
    "question": "زوج، بنت، ابن",
    "heirs": [
      "زوج",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 59,
    "question": "زوجة، بنت، ابن",
    "heirs": [
      "زوجة",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 60,
    "question": "بنت، أب",
    "heirs": [
      "بنت",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 61,
    "question": "أب، بنت، ابن",
    "heirs": [
      "أب",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 62,
    "question": "بنت، أم، عم",
    "heirs": [
      "بنت",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 63,
    "question": "بنت، أم، ابن",
    "heirs": [
      "بنت",
      "أم",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 64,
    "question": "بنت، جد",
    "heirs": [
      "بنت",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 65,
    "question": "بنت، جد، ابن",
    "heirs": [
      "بنت",
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 66,
    "question": "بنت، جدة، عم",
    "heirs": [
      "بنت",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 67,
    "question": "بنت، جدة، ابن",
    "heirs": [
      "بنت",
      "جدة",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 68,
    "question": "زوج، بنت، أب",
    "heirs": [
      "زوج",
      "بنت",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 69,
    "question": "زوج، أب، بنت، ابن",
    "heirs": [
      "زوج",
      "أب",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 70,
    "question": "زوجة، بنت، أب",
    "heirs": [
      "زوجة",
      "بنت",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 71,
    "question": "زوجة، أب، بنت، ابن",
    "heirs": [
      "زوجة",
      "أب",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 72,
    "question": "زوج، أم، بنت، عم",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 73,
    "question": "زوج، أم، بنت، ابن",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 74,
    "question": "زوجة، أم، بنت، عم",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 75,
    "question": "زوجة، أم، بنت، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 76,
    "question": "زوج، بنت، جد",
    "heirs": [
      "زوج",
      "بنت",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 77,
    "question": "زوج، جد، بنت، ابن",
    "heirs": [
      "زوج",
      "جد",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 78,
    "question": "زوجة، بنت، جد",
    "heirs": [
      "زوجة",
      "بنت",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 79,
    "question": "زوجة، جد، بنت، ابن",
    "heirs": [
      "زوجة",
      "جد",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 80,
    "question": "زوج، جدة، بنت، عم",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 81,
    "question": "زوج، جدة، بنت، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 82,
    "question": "زوجة، جدة، بنت، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 83,
    "question": "زوجة، جدة، بنت، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 84,
    "question": "زوج، أم، بنت، أب",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 85,
    "question": "زوج، أم، أب، بنت، ابن",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 86,
    "question": "زوجة، أم، بنت، أب",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 87,
    "question": "زوجة، أم، أب، بنت، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 88,
    "question": "زوج، أم، بنت، جد",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 89,
    "question": "زوج، أم، جد، بنت، ابن",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 90,
    "question": "زوجة، أم، بنت، جد",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 91,
    "question": "زوجة، أم، جد، بنت، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 92,
    "question": "زوج، جدة، بنت، أب",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 93,
    "question": "زوج، جدة، أب، بنت، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 94,
    "question": "زوجة، جدة، بنت، أب",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 95,
    "question": "زوجة، جدة، أب، بنت، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 96,
    "question": "زوج، جدة، بنت، جد",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 97,
    "question": "زوج، جدة، جد، بنت، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 98,
    "question": "زوجة، جدة، بنت، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 99,
    "question": "زوجة، جدة، جد، بنت، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "بنت",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 100,
    "question": "بنات، عم",
    "heirs": [
      "بنات",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 101,
    "question": "بنات، ابن",
    "heirs": [
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 102,
    "question": "زوج، بنات، عم",
    "heirs": [
      "زوج",
      "بنات",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 103,
    "question": "زوجة، بنات، عم",
    "heirs": [
      "زوجة",
      "بنات",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 104,
    "question": "زوج، بنات، ابن",
    "heirs": [
      "زوج",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 105,
    "question": "زوجة، بنات، ابن",
    "heirs": [
      "زوجة",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 106,
    "question": "بنات، أب",
    "heirs": [
      "بنات",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 107,
    "question": "أب، بنات، ابن",
    "heirs": [
      "أب",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 108,
    "question": "بنات، أم، عم",
    "heirs": [
      "بنات",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 109,
    "question": "بنات، أم، ابن",
    "heirs": [
      "بنات",
      "أم",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 110,
    "question": "بنات، جد",
    "heirs": [
      "بنات",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 111,
    "question": "بنات، جد، ابن",
    "heirs": [
      "بنات",
      "جد",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 112,
    "question": "بنات، جدة، عم",
    "heirs": [
      "بنات",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 113,
    "question": "بنات، جدة، ابن",
    "heirs": [
      "بنات",
      "جدة",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 114,
    "question": "زوج، بنات، أب",
    "heirs": [
      "زوج",
      "بنات",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 115,
    "question": "زوج، أب، بنات، ابن",
    "heirs": [
      "زوج",
      "أب",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 116,
    "question": "زوجة، بنات، أب",
    "heirs": [
      "زوجة",
      "بنات",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 117,
    "question": "زوجة، أب، بنات، ابن",
    "heirs": [
      "زوجة",
      "أب",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 118,
    "question": "زوج، أم، بنات، عم",
    "heirs": [
      "زوج",
      "أم",
      "بنات",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 119,
    "question": "زوج، أم، بنات، ابن",
    "heirs": [
      "زوج",
      "أم",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 120,
    "question": "زوجة، أم، بنات، عم",
    "heirs": [
      "زوجة",
      "أم",
      "بنات",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 121,
    "question": "زوجة، أم، بنات، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 122,
    "question": "زوج، بنات، جد",
    "heirs": [
      "زوج",
      "بنات",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 123,
    "question": "زوج، جد، بنات، ابن",
    "heirs": [
      "زوج",
      "جد",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 124,
    "question": "زوجة، بنات، جد",
    "heirs": [
      "زوجة",
      "بنات",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 125,
    "question": "زوجة، جد، بنات، ابن",
    "heirs": [
      "زوجة",
      "جد",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 126,
    "question": "زوج، جدة، بنات، عم",
    "heirs": [
      "زوج",
      "جدة",
      "بنات",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 127,
    "question": "زوج، جدة، بنات، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 128,
    "question": "زوجة، جدة، بنات، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "بنات",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 129,
    "question": "زوجة، جدة، بنات، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 130,
    "question": "زوج، أم، بنات، أب",
    "heirs": [
      "زوج",
      "أم",
      "بنات",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 131,
    "question": "زوج، أم، أب، بنات، ابن",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 132,
    "question": "زوجة، أم، بنات، أب",
    "heirs": [
      "زوجة",
      "أم",
      "بنات",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 133,
    "question": "زوجة، أم، أب، بنات، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 134,
    "question": "زوج، أم، بنات، جد",
    "heirs": [
      "زوج",
      "أم",
      "بنات",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 135,
    "question": "زوج، أم، جد، بنات، ابن",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 136,
    "question": "زوجة، أم، بنات، جد",
    "heirs": [
      "زوجة",
      "أم",
      "بنات",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 137,
    "question": "زوجة، أم، جد، بنات، ابن",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 138,
    "question": "زوج، جدة، بنات، أب",
    "heirs": [
      "زوج",
      "جدة",
      "بنات",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 139,
    "question": "زوج، جدة، أب، بنات، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 140,
    "question": "زوجة، جدة، بنات، أب",
    "heirs": [
      "زوجة",
      "جدة",
      "بنات",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 141,
    "question": "زوجة، جدة، أب، بنات، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 142,
    "question": "زوج، جدة، بنات، جد",
    "heirs": [
      "زوج",
      "جدة",
      "بنات",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 143,
    "question": "زوج، جدة، جد، بنات، ابن",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 144,
    "question": "زوجة، جدة، بنات، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "بنات",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 145,
    "question": "زوجة، جدة، جد، بنات، ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "بنات",
      "ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 146,
    "question": "بنت ابن",
    "heirs": [
      "بنت ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 147,
    "question": "بنت ابن، عم",
    "heirs": [
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 148,
    "question": "بنت ابن، ابن ابن",
    "heirs": [
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 149,
    "question": "زوج، بنت ابن، عم",
    "heirs": [
      "زوج",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 150,
    "question": "زوجة، بنت ابن، عم",
    "heirs": [
      "زوجة",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 151,
    "question": "زوج، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 152,
    "question": "زوجة، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 153,
    "question": "بنت ابن، أب",
    "heirs": [
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 154,
    "question": "أب، بنت ابن، ابن ابن",
    "heirs": [
      "أب",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 155,
    "question": "بنت ابن، أم، عم",
    "heirs": [
      "بنت ابن",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 156,
    "question": "بنت ابن، أم، ابن ابن",
    "heirs": [
      "بنت ابن",
      "أم",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 157,
    "question": "بنت ابن، جد",
    "heirs": [
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 158,
    "question": "بنت ابن، جد، ابن ابن",
    "heirs": [
      "بنت ابن",
      "جد",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 159,
    "question": "بنت ابن، جدة، عم",
    "heirs": [
      "بنت ابن",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 160,
    "question": "بنت ابن، جدة، ابن ابن",
    "heirs": [
      "بنت ابن",
      "جدة",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 161,
    "question": "زوج، بنت ابن، أب",
    "heirs": [
      "زوج",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 162,
    "question": "زوج، أب، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أب",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 163,
    "question": "زوجة، بنت ابن، أب",
    "heirs": [
      "زوجة",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 164,
    "question": "زوجة، أب، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أب",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 165,
    "question": "زوج، أم، بنت ابن، عم",
    "heirs": [
      "زوج",
      "أم",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 166,
    "question": "زوج، أم، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 167,
    "question": "زوجة، أم، بنت ابن، عم",
    "heirs": [
      "زوجة",
      "أم",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 168,
    "question": "زوجة، أم، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 169,
    "question": "زوج، بنت ابن، جد",
    "heirs": [
      "زوج",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 170,
    "question": "زوج، جد، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جد",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 171,
    "question": "زوجة، بنت ابن، جد",
    "heirs": [
      "زوجة",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 172,
    "question": "زوجة، جد، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جد",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 173,
    "question": "زوج، جدة، بنت ابن، عم",
    "heirs": [
      "زوج",
      "جدة",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 174,
    "question": "زوج، جدة، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 175,
    "question": "زوجة، جدة، بنت ابن، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 176,
    "question": "زوجة، جدة، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 177,
    "question": "زوج، أم، بنت ابن، أب",
    "heirs": [
      "زوج",
      "أم",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 178,
    "question": "زوج، أم، أب، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 179,
    "question": "زوجة، أم، بنت ابن، أب",
    "heirs": [
      "زوجة",
      "أم",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 180,
    "question": "زوجة، أم، أب، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 181,
    "question": "زوج، أم، بنت ابن، جد",
    "heirs": [
      "زوج",
      "أم",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 182,
    "question": "زوج، أم، جد، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 183,
    "question": "زوجة، أم، بنت ابن، جد",
    "heirs": [
      "زوجة",
      "أم",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 184,
    "question": "زوجة، أم، جد، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 185,
    "question": "زوج، جدة، بنت ابن، أب",
    "heirs": [
      "زوج",
      "جدة",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 186,
    "question": "زوج، جدة، أب، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 187,
    "question": "زوجة، جدة، بنت ابن، أب",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 188,
    "question": "زوجة، جدة، أب، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 189,
    "question": "زوج، جدة، بنت ابن، جد",
    "heirs": [
      "زوج",
      "جدة",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 190,
    "question": "زوج، جدة، جد، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 191,
    "question": "زوجة، جدة، بنت ابن، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 192,
    "question": "زوجة، جدة، جد، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 193,
    "question": "بنات ابن، عم",
    "heirs": [
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 194,
    "question": "بنات ابن، ابن ابن",
    "heirs": [
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 195,
    "question": "زوج، بنات ابن، عم",
    "heirs": [
      "زوج",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 196,
    "question": "زوجة، بنات ابن، عم",
    "heirs": [
      "زوجة",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 197,
    "question": "زوج، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 198,
    "question": "زوجة، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 199,
    "question": "بنات ابن، أب",
    "heirs": [
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 200,
    "question": "أب، بنات ابن، ابن ابن",
    "heirs": [
      "أب",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 201,
    "question": "بنات ابن، أم، عم",
    "heirs": [
      "بنات ابن",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 202,
    "question": "بنات ابن، أم، ابن ابن",
    "heirs": [
      "بنات ابن",
      "أم",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 203,
    "question": "بنات ابن، جد",
    "heirs": [
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 204,
    "question": "بنات ابن، جد، ابن ابن",
    "heirs": [
      "بنات ابن",
      "جد",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 205,
    "question": "بنات ابن، جدة، عم",
    "heirs": [
      "بنات ابن",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 206,
    "question": "بنات ابن، جدة، ابن ابن",
    "heirs": [
      "بنات ابن",
      "جدة",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 207,
    "question": "زوج، بنات ابن، أب",
    "heirs": [
      "زوج",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 208,
    "question": "زوج، أب، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أب",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 209,
    "question": "زوجة، بنات ابن، أب",
    "heirs": [
      "زوجة",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 210,
    "question": "زوجة، أب، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أب",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 211,
    "question": "زوج، أم، بنات ابن، عم",
    "heirs": [
      "زوج",
      "أم",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 212,
    "question": "زوج، أم، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 213,
    "question": "زوجة، أم، بنات ابن، عم",
    "heirs": [
      "زوجة",
      "أم",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 214,
    "question": "زوجة، أم، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 215,
    "question": "زوج، بنات ابن، جد",
    "heirs": [
      "زوج",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 216,
    "question": "زوج، جد، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جد",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 217,
    "question": "زوجة، بنات ابن، جد",
    "heirs": [
      "زوجة",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 218,
    "question": "زوجة، جد، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جد",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 219,
    "question": "زوج، جدة، بنات ابن، عم",
    "heirs": [
      "زوج",
      "جدة",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 220,
    "question": "زوج، جدة، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 221,
    "question": "زوجة، جدة، بنات ابن، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 222,
    "question": "زوجة، جدة، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 223,
    "question": "زوج، أم، بنات ابن، أب",
    "heirs": [
      "زوج",
      "أم",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 224,
    "question": "زوج، أم، أب، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 225,
    "question": "زوجة، أم، بنات ابن، أب",
    "heirs": [
      "زوجة",
      "أم",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 226,
    "question": "زوجة، أم، أب، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 227,
    "question": "زوج، أم، بنات ابن، جد",
    "heirs": [
      "زوج",
      "أم",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 228,
    "question": "زوج، أم، جد، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 229,
    "question": "زوجة، أم، بنات ابن، جد",
    "heirs": [
      "زوجة",
      "أم",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 230,
    "question": "زوجة، أم، جد، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 231,
    "question": "زوج، جدة، بنات ابن، أب",
    "heirs": [
      "زوج",
      "جدة",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 232,
    "question": "زوج، جدة، أب، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 233,
    "question": "زوجة، جدة، بنات ابن، أب",
    "heirs": [
      "زوجة",
      "جدة",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 234,
    "question": "زوجة، جدة، أب، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 235,
    "question": "زوج، جدة، بنات ابن، جد",
    "heirs": [
      "زوج",
      "جدة",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 236,
    "question": "زوج، جدة، جد، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 237,
    "question": "زوجة، جدة، بنات ابن، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 238,
    "question": "زوجة، جدة، جد، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 239,
    "question": "بنت، بنت ابن، عم",
    "heirs": [
      "بنت",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 240,
    "question": "بنت، بنت ابن، ابن ابن",
    "heirs": [
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 241,
    "question": "زوج، بنت، بنت ابن، عم",
    "heirs": [
      "زوج",
      "بنت",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 242,
    "question": "زوجة، بنت، بنت ابن، عم",
    "heirs": [
      "زوجة",
      "بنت",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 243,
    "question": "زوج، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 244,
    "question": "زوجة، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 245,
    "question": "بنت، بنت ابن، أب",
    "heirs": [
      "بنت",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 246,
    "question": "أب، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "أب",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 247,
    "question": "بنت، بنت ابن، أم، عم",
    "heirs": [
      "بنت",
      "بنت ابن",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 248,
    "question": "بنت، بنت ابن، أم، ابن ابن",
    "heirs": [
      "بنت",
      "بنت ابن",
      "أم",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 249,
    "question": "بنت، بنت ابن، جد",
    "heirs": [
      "بنت",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 250,
    "question": "بنت، بنت ابن، جد، ابن ابن",
    "heirs": [
      "بنت",
      "بنت ابن",
      "جد",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 251,
    "question": "بنت، بنت ابن، جدة، عم",
    "heirs": [
      "بنت",
      "بنت ابن",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 252,
    "question": "بنت، بنت ابن، جدة، ابن ابن",
    "heirs": [
      "بنت",
      "بنت ابن",
      "جدة",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 253,
    "question": "زوج، بنت، بنت ابن، أب",
    "heirs": [
      "زوج",
      "بنت",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 254,
    "question": "زوج، أب، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أب",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 255,
    "question": "زوجة، بنت، بنت ابن، أب",
    "heirs": [
      "زوجة",
      "بنت",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 256,
    "question": "زوجة، أب، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أب",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 257,
    "question": "زوج، أم، بنت، بنت ابن، عم",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 258,
    "question": "زوج، أم، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 259,
    "question": "زوجة، أم، بنت، بنت ابن، عم",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 260,
    "question": "زوجة، أم، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 261,
    "question": "زوج، بنت، بنت ابن، جد",
    "heirs": [
      "زوج",
      "بنت",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 262,
    "question": "زوج، جد، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جد",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 263,
    "question": "زوجة، بنت، بنت ابن، جد",
    "heirs": [
      "زوجة",
      "بنت",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 264,
    "question": "زوجة، جد، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جد",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 265,
    "question": "زوج، جدة، بنت، بنت ابن، عم",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 266,
    "question": "زوج، جدة، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 267,
    "question": "زوجة، جدة، بنت، بنت ابن، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "بنت ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 268,
    "question": "زوجة، جدة، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 269,
    "question": "زوج، أم، بنت، بنت ابن، أب",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 270,
    "question": "زوج، أم، أب، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 271,
    "question": "زوجة، أم، بنت، بنت ابن، أب",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 272,
    "question": "زوجة، أم، أب، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 273,
    "question": "زوج، أم، بنت، بنت ابن، جد",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 274,
    "question": "زوج، أم، جد، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 275,
    "question": "زوجة، أم، بنت، بنت ابن، جد",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 276,
    "question": "زوجة، أم، جد، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 277,
    "question": "زوج، جدة، بنت، بنت ابن، أب",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 278,
    "question": "زوج، جدة، أب، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 279,
    "question": "زوجة، جدة، بنت، بنت ابن، أب",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "بنت ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 280,
    "question": "زوجة، جدة، أب، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 281,
    "question": "زوج، جدة، بنت، بنت ابن، جد",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 282,
    "question": "زوج، جدة، جد، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 283,
    "question": "زوجة، جدة، بنت، بنت ابن، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "بنت ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 284,
    "question": "زوجة، جدة، جد، بنت، بنت ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "بنت",
      "بنت ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 285,
    "question": "بنت، بنات ابن، عم",
    "heirs": [
      "بنت",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 286,
    "question": "بنت، بنات ابن، ابن ابن",
    "heirs": [
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 287,
    "question": "زوج، بنت، بنات ابن، عم",
    "heirs": [
      "زوج",
      "بنت",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 288,
    "question": "زوجة، بنت، بنات ابن، عم",
    "heirs": [
      "زوجة",
      "بنت",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 289,
    "question": "زوج، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 290,
    "question": "زوجة، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 291,
    "question": "بنت، بنات ابن، أب",
    "heirs": [
      "بنت",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 292,
    "question": "أب، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "أب",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 293,
    "question": "بنت، بنات ابن، أم، عم",
    "heirs": [
      "بنت",
      "بنات ابن",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 294,
    "question": "بنت، بنات ابن، أم، ابن ابن",
    "heirs": [
      "بنت",
      "بنات ابن",
      "أم",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 295,
    "question": "بنت، بنات ابن، جد",
    "heirs": [
      "بنت",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 296,
    "question": "بنت، بنات ابن، جد، ابن ابن",
    "heirs": [
      "بنت",
      "بنات ابن",
      "جد",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 297,
    "question": "بنت، بنات ابن، جدة، عم",
    "heirs": [
      "بنت",
      "بنات ابن",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 298,
    "question": "بنت، بنات ابن، جدة، ابن ابن",
    "heirs": [
      "بنت",
      "بنات ابن",
      "جدة",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 299,
    "question": "زوج، بنت، بنات ابن، أب",
    "heirs": [
      "زوج",
      "بنت",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 300,
    "question": "زوج، أب، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أب",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 301,
    "question": "زوجة، بنت، بنات ابن، أب",
    "heirs": [
      "زوجة",
      "بنت",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 302,
    "question": "زوجة، أب، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أب",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 303,
    "question": "زوج، أم، بنت، بنات ابن، عم",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 304,
    "question": "زوج، أم، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 305,
    "question": "زوجة، أم، بنت، بنات ابن، عم",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 306,
    "question": "زوجة، أم، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 307,
    "question": "زوج، بنت، بنات ابن، جد",
    "heirs": [
      "زوج",
      "بنت",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 308,
    "question": "زوج، جد، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جد",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 309,
    "question": "زوجة، بنت، بنات ابن، جد",
    "heirs": [
      "زوجة",
      "بنت",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 310,
    "question": "زوجة، جد، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جد",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 311,
    "question": "زوج، جدة، بنت، بنات ابن، عم",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 312,
    "question": "زوج، جدة، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 313,
    "question": "زوجة، جدة، بنت، بنات ابن، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "بنات ابن",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 314,
    "question": "زوجة، جدة، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 315,
    "question": "زوج، أم، بنت، بنات ابن، أب",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 316,
    "question": "زوج، أم، أب، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 317,
    "question": "زوجة، أم، بنت، بنات ابن، أب",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 318,
    "question": "زوجة، أم، أب، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 319,
    "question": "زوج، أم، بنت، بنات ابن، جد",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 320,
    "question": "زوج، أم، جد، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 321,
    "question": "زوجة، أم، بنت، بنات ابن، جد",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 322,
    "question": "زوجة، أم، جد، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 323,
    "question": "زوج، جدة، بنت، بنات ابن، أب",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 324,
    "question": "زوج، جدة، أب، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 325,
    "question": "زوجة، جدة، بنت، بنات ابن، أب",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "بنات ابن",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 326,
    "question": "زوجة، جدة، أب، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 327,
    "question": "زوج، جدة، بنت، بنات ابن، جد",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 328,
    "question": "زوج، جدة، جد، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 329,
    "question": "زوجة، جدة، بنت، بنات ابن، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "بنات ابن",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 330,
    "question": "زوجة، جدة، جد، بنت، بنات ابن، ابن ابن",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "بنت",
      "بنات ابن",
      "ابن ابن"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنات ابن",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ابن ابن",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 331,
    "question": "شقيقة/شقائق",
    "heirs": [
      "شقيقة/شقائق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة/شقائق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 332,
    "question": "شقيقة، عم",
    "heirs": [
      "شقيقة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 333,
    "question": "شقيقة، شقيق",
    "heirs": [
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 334,
    "question": "زوج، شقيقة، عم",
    "heirs": [
      "زوج",
      "شقيقة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 335,
    "question": "زوجة، شقيقة، عم",
    "heirs": [
      "زوجة",
      "شقيقة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 336,
    "question": "زوج، شقيقة، شقيق",
    "heirs": [
      "زوج",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 337,
    "question": "زوجة، شقيقة، شقيق",
    "heirs": [
      "زوجة",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 338,
    "question": "شقيقة، أم، عم",
    "heirs": [
      "شقيقة",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 339,
    "question": "شقيقة، أم، شقيق",
    "heirs": [
      "شقيقة",
      "أم",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 340,
    "question": "شقيقة، جد",
    "heirs": [
      "شقيقة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 341,
    "question": "شقيقة، جد، شقيق",
    "heirs": [
      "شقيقة",
      "جد",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 342,
    "question": "شقيقة، جدة، عم",
    "heirs": [
      "شقيقة",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 343,
    "question": "شقيقة، جدة، شقيق",
    "heirs": [
      "شقيقة",
      "جدة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 344,
    "question": "زوج، أم، شقيقة، عم",
    "heirs": [
      "زوج",
      "أم",
      "شقيقة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 345,
    "question": "زوج، أم، شقيقة، شقيق",
    "heirs": [
      "زوج",
      "أم",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 346,
    "question": "زوجة، أم، شقيقة، عم",
    "heirs": [
      "زوجة",
      "أم",
      "شقيقة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 347,
    "question": "زوجة، أم، شقيقة، شقيق",
    "heirs": [
      "زوجة",
      "أم",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 348,
    "question": "زوج، شقيقة، جد",
    "heirs": [
      "زوج",
      "شقيقة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 349,
    "question": "زوج، جد، شقيقة، شقيق",
    "heirs": [
      "زوج",
      "جد",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 350,
    "question": "زوجة، شقيقة، جد",
    "heirs": [
      "زوجة",
      "شقيقة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 351,
    "question": "زوجة، جد، شقيقة، شقيق",
    "heirs": [
      "زوجة",
      "جد",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 352,
    "question": "زوج، جدة، شقيقة، عم",
    "heirs": [
      "زوج",
      "جدة",
      "شقيقة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 353,
    "question": "زوج، جدة، شقيقة، شقيق",
    "heirs": [
      "زوج",
      "جدة",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 354,
    "question": "زوجة، جدة، شقيقة، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "شقيقة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 355,
    "question": "زوجة، جدة، شقيقة، شقيق",
    "heirs": [
      "زوجة",
      "جدة",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 356,
    "question": "زوج، أم، شقيقة، جد",
    "heirs": [
      "زوج",
      "أم",
      "شقيقة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 357,
    "question": "زوج، أم، جد، شقيقة، شقيق",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 358,
    "question": "زوجة، أم، شقيقة، جد",
    "heirs": [
      "زوجة",
      "أم",
      "شقيقة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 359,
    "question": "زوجة، أم، جد، شقيقة، شقيق",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 360,
    "question": "زوج، جدة، شقيقة، جد",
    "heirs": [
      "زوج",
      "جدة",
      "شقيقة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 361,
    "question": "زوج، جدة، جد، شقيقة، شقيق",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 362,
    "question": "زوجة، جدة، شقيقة، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "شقيقة",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 363,
    "question": "زوجة، جدة، جد، شقيقة، شقيق",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "شقيقة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيقة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 364,
    "question": "شقائق، عم",
    "heirs": [
      "شقائق",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 365,
    "question": "شقائق، شقيق",
    "heirs": [
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 366,
    "question": "زوج، شقائق، عم",
    "heirs": [
      "زوج",
      "شقائق",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 367,
    "question": "زوجة، شقائق، عم",
    "heirs": [
      "زوجة",
      "شقائق",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 368,
    "question": "زوج، شقائق، شقيق",
    "heirs": [
      "زوج",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 369,
    "question": "زوجة، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 370,
    "question": "شقائق، أم، عم",
    "heirs": [
      "شقائق",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 371,
    "question": "شقائق، أم، شقيق",
    "heirs": [
      "شقائق",
      "أم",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 372,
    "question": "شقائق، جد",
    "heirs": [
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 373,
    "question": "شقائق، جد، شقيق",
    "heirs": [
      "شقائق",
      "جد",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 374,
    "question": "شقائق، جدة، عم",
    "heirs": [
      "شقائق",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 375,
    "question": "شقائق، جدة، شقيق",
    "heirs": [
      "شقائق",
      "جدة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 376,
    "question": "زوج، أم، شقائق، عم",
    "heirs": [
      "زوج",
      "أم",
      "شقائق",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 377,
    "question": "زوج، أم، شقائق، شقيق",
    "heirs": [
      "زوج",
      "أم",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 378,
    "question": "زوجة، أم، شقائق، عم",
    "heirs": [
      "زوجة",
      "أم",
      "شقائق",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 379,
    "question": "زوجة، أم، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "أم",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 380,
    "question": "زوج، شقائق، جد",
    "heirs": [
      "زوج",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 381,
    "question": "زوج، جد، شقائق، شقيق",
    "heirs": [
      "زوج",
      "جد",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 382,
    "question": "زوجة، شقائق، جد",
    "heirs": [
      "زوجة",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 383,
    "question": "زوجة، جد، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "جد",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 384,
    "question": "زوج، جدة، شقائق، عم",
    "heirs": [
      "زوج",
      "جدة",
      "شقائق",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 385,
    "question": "زوج، جدة، شقائق، شقيق",
    "heirs": [
      "زوج",
      "جدة",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 386,
    "question": "زوجة، جدة، شقائق، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "شقائق",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 387,
    "question": "زوجة، جدة، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "جدة",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 388,
    "question": "زوج، أم، أب، شقائق، شقيق",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 389,
    "question": "زوجة، أم، أب، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 390,
    "question": "زوج، أم، شقائق، جد",
    "heirs": [
      "زوج",
      "أم",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 391,
    "question": "زوج، أم، جد، شقائق، شقيق",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 392,
    "question": "زوجة، أم، شقائق، جد",
    "heirs": [
      "زوجة",
      "أم",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 393,
    "question": "زوجة، أم، جد، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 394,
    "question": "زوج، جدة، أب، شقائق، شقيق",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 395,
    "question": "زوجة، جدة، أب، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 396,
    "question": "زوج، جدة، شقائق، جد",
    "heirs": [
      "زوج",
      "جدة",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 397,
    "question": "زوج، جدة، جد، شقائق، شقيق",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 398,
    "question": "زوجة، جدة، شقائق، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 399,
    "question": "زوجة، جدة، جد، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 400,
    "question": "بنت، شقائق",
    "heirs": [
      "بنت",
      "شقائق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 401,
    "question": "بنت، شقائق، شقيق",
    "heirs": [
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 402,
    "question": "زوج، بنت،  شقائق",
    "heirs": [
      "زوج",
      "بنت",
      "شقائق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 403,
    "question": "زوجة، بنت، شقائق",
    "heirs": [
      "زوجة",
      "بنت",
      "شقائق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 404,
    "question": "زوج، بنت، شقائق، شقيق",
    "heirs": [
      "زوج",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 405,
    "question": "زوجة، بنت، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 406,
    "question": "شقائق، بنت، أم",
    "heirs": [
      "شقائق",
      "بنت",
      "أم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 407,
    "question": "بنت، شقائق، أم، شقيق",
    "heirs": [
      "بنت",
      "شقائق",
      "أم",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 408,
    "question": "بنت، شقائق، جد",
    "heirs": [
      "بنت",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 409,
    "question": "بنت، شقائق، جد، شقيق",
    "heirs": [
      "بنت",
      "شقائق",
      "جد",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 410,
    "question": "بنت، شقائق، جدة",
    "heirs": [
      "بنت",
      "شقائق",
      "جدة"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 411,
    "question": "بنت، شقائق، جدة، شقيق",
    "heirs": [
      "بنت",
      "شقائق",
      "جدة",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 412,
    "question": "زوج، أم، بنت، شقائق",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "شقائق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 413,
    "question": "زوج، أم، بنت، شقائق، شقيق",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 414,
    "question": "زوجة، أم، بنت، شقائق",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "شقائق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 415,
    "question": "زوجة، أم، بنت، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 416,
    "question": "زوج، بنت، شقائق، جد",
    "heirs": [
      "زوج",
      "بنت",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 417,
    "question": "زوج، جد، بنت، شقائق، شقيق",
    "heirs": [
      "زوج",
      "جد",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 418,
    "question": "زوجة، بنت، شقائق، جد",
    "heirs": [
      "زوجة",
      "بنت",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 419,
    "question": "زوجة، جد، بنت، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "جد",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 420,
    "question": "زوج، جدة، بنت، شقائق، عم",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "شقائق",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 421,
    "question": "زوج، جدة، بنت، شقائق، شقيق",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 422,
    "question": "زوجة، جدة، بنت، شقائق",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "شقائق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 423,
    "question": "زوجة، جدة، بنت، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 424,
    "question": "زوج، أم، بنت، شقائق، جد",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 425,
    "question": "زوج، أم، بنت، جد، شقائق، شقيق",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "جد",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 426,
    "question": "زوجة، أم، بنت، شقائق، جد",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 427,
    "question": "زوجة، أم، جد، بنت، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 428,
    "question": "زوج، جدة، بنت، شقائق، جد",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 429,
    "question": "زوج، جدة، جد، بنت، شقائق، شقيق",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 430,
    "question": "زوجة، جدة، بنت، شقائق، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "شقائق",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 431,
    "question": "زوجة، جدة، جد، بنت، شقائق، شقيق",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "بنت",
      "شقائق",
      "شقيق"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقائق",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "شقيق",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 432,
    "question": "أخت لأب/أخوات لأب",
    "heirs": [
      "أخت لأب/أخوات لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب/أخوات لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 433,
    "question": "أخت لأب/أخوات لأب",
    "heirs": [
      "أخت لأب/أخوات لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب/أخوات لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 434,
    "question": "أخت لأب، عم",
    "heirs": [
      "أخت لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 435,
    "question": "أخت لأب، أخ لأب",
    "heirs": [
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 436,
    "question": "زوج، أخت لأب، عم",
    "heirs": [
      "زوج",
      "أخت لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 437,
    "question": "زوجة، أخت لأب، عم",
    "heirs": [
      "زوجة",
      "أخت لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 438,
    "question": "زوج، أخت لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 439,
    "question": "زوجة، أخت لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 440,
    "question": "أخت لأب، أم، عم",
    "heirs": [
      "أخت لأب",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 441,
    "question": "أخت لأب، أم، أخ لأب",
    "heirs": [
      "أخت لأب",
      "أم",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 442,
    "question": "أخت لأب، جد",
    "heirs": [
      "أخت لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 443,
    "question": "أخت لأب، جد، أخ لأب",
    "heirs": [
      "أخت لأب",
      "جد",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 444,
    "question": "أخت لأب، جدة، عم",
    "heirs": [
      "أخت لأب",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 445,
    "question": "أخت لأب، جدة، أخ لأب",
    "heirs": [
      "أخت لأب",
      "جدة",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 446,
    "question": "زوج، أم، أخت لأب، عم",
    "heirs": [
      "زوج",
      "أم",
      "أخت لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 447,
    "question": "زوج، أم، أخت لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أم",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 448,
    "question": "زوجة، أم، أخت لأب، عم",
    "heirs": [
      "زوجة",
      "أم",
      "أخت لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 449,
    "question": "زوجة، أم، أخت لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أم",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 450,
    "question": "زوج، أخت لأب، جد",
    "heirs": [
      "زوج",
      "أخت لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 451,
    "question": "زوج، جد، أخت لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جد",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 452,
    "question": "زوجة، أخت لأب، جد",
    "heirs": [
      "زوجة",
      "أخت لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 453,
    "question": "زوجة، جد، أخت لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جد",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 454,
    "question": "زوج، جدة، أخت لأب، عم",
    "heirs": [
      "زوج",
      "جدة",
      "أخت لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 455,
    "question": "زوج، جدة، أخت لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جدة",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 456,
    "question": "زوجة، جدة، أخت لأب، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "أخت لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 457,
    "question": "زوجة، جدة، أخت لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جدة",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 458,
    "question": "زوج، أم، أخت لأب، جد",
    "heirs": [
      "زوج",
      "أم",
      "أخت لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 459,
    "question": "زوج، أم، جد، أخت لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 460,
    "question": "زوجة، أم، أخت لأب، جد",
    "heirs": [
      "زوجة",
      "أم",
      "أخت لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 461,
    "question": "زوجة، أم، جد، أخت لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 462,
    "question": "زوج، جدة، أخت لأب، جد",
    "heirs": [
      "زوج",
      "جدة",
      "أخت لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 463,
    "question": "زوج، جدة، جد، أخت لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 464,
    "question": "زوجة، جدة، أخت لأب، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "أخت لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 465,
    "question": "زوجة، جدة، جد، أخت لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "أخت لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخت لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 466,
    "question": "أخوات لأب، عم",
    "heirs": [
      "أخوات لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 467,
    "question": "أخوات لأب، أخ لأب",
    "heirs": [
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 468,
    "question": "زوج، أخوات لأب، عم",
    "heirs": [
      "زوج",
      "أخوات لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 469,
    "question": "زوجة، أخوات لأب، عم",
    "heirs": [
      "زوجة",
      "أخوات لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 470,
    "question": "زوج، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 471,
    "question": "زوجة، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 472,
    "question": "أخوات لأب، أم، عم",
    "heirs": [
      "أخوات لأب",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 473,
    "question": "أخوات لأب، أم، أخ لأب",
    "heirs": [
      "أخوات لأب",
      "أم",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 474,
    "question": "أخوات لأب، جد",
    "heirs": [
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 475,
    "question": "أخوات لأب، جد، أخ لأب",
    "heirs": [
      "أخوات لأب",
      "جد",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 476,
    "question": "أخوات لأب، جدة، عم",
    "heirs": [
      "أخوات لأب",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 477,
    "question": "أخوات لأب، جدة، أخ لأب",
    "heirs": [
      "أخوات لأب",
      "جدة",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 478,
    "question": "زوج، أب، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أب",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 479,
    "question": "زوج، أم، أخوات لأب، عم",
    "heirs": [
      "زوج",
      "أم",
      "أخوات لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 480,
    "question": "زوج، أم، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أم",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 481,
    "question": "زوجة، أم، أخوات لأب، عم",
    "heirs": [
      "زوجة",
      "أم",
      "أخوات لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 482,
    "question": "زوجة، أم، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أم",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 483,
    "question": "زوج، أخوات لأب، جد",
    "heirs": [
      "زوج",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 484,
    "question": "زوج، جد، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جد",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 485,
    "question": "زوجة، أخوات لأب، جد",
    "heirs": [
      "زوجة",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 486,
    "question": "زوجة، جد، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جد",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 487,
    "question": "زوج، جدة، أخوات لأب، عم",
    "heirs": [
      "زوج",
      "جدة",
      "أخوات لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 488,
    "question": "زوج، جدة، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جدة",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 489,
    "question": "زوجة، جدة، أخوات لأب، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "أخوات لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 490,
    "question": "زوجة، جدة، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جدة",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 491,
    "question": "زوج، أم، أب، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أم",
      "أب",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 492,
    "question": "زوجة، أم، أب، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أم",
      "أب",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 493,
    "question": "زوج، أم، أخوات لأب، جد",
    "heirs": [
      "زوج",
      "أم",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 494,
    "question": "زوج، أم، جد، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أم",
      "جد",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 495,
    "question": "زوجة، أم، أخوات لأب، جد",
    "heirs": [
      "زوجة",
      "أم",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 496,
    "question": "زوجة، أم، جد، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 497,
    "question": "زوج، جدة، أب، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جدة",
      "أب",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 498,
    "question": "زوجة، جدة، أب، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جدة",
      "أب",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 499,
    "question": "زوج، جدة، أخوات لأب، جد",
    "heirs": [
      "زوج",
      "جدة",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 500,
    "question": "زوج، جدة، جد، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 501,
    "question": "زوجة، جدة، أخوات لأب، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 502,
    "question": "زوجة، جدة، جد، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 503,
    "question": "بنت، أخوات لأب",
    "heirs": [
      "بنت",
      "أخوات لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 504,
    "question": "بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 505,
    "question": "زوج، بنت،  أخوات لأب",
    "heirs": [
      "زوج",
      "بنت",
      "أخوات لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 506,
    "question": "زوجة، بنت، أخوات لأب",
    "heirs": [
      "زوجة",
      "بنت",
      "أخوات لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 507,
    "question": "زوج، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 508,
    "question": "زوجة، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 509,
    "question": "أخوات لأب، بنت، أم",
    "heirs": [
      "أخوات لأب",
      "بنت",
      "أم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 510,
    "question": "بنت، أخوات لأب، أم، أخ لأب",
    "heirs": [
      "بنت",
      "أخوات لأب",
      "أم",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 511,
    "question": "بنت، أخوات لأب، جد",
    "heirs": [
      "بنت",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 512,
    "question": "بنت، أخوات لأب، جد، أخ لأب",
    "heirs": [
      "بنت",
      "أخوات لأب",
      "جد",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 513,
    "question": "بنت، أخوات لأب، جدة",
    "heirs": [
      "بنت",
      "أخوات لأب",
      "جدة"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 514,
    "question": "بنت، أخوات لأب، جدة، أخ لأب",
    "heirs": [
      "بنت",
      "أخوات لأب",
      "جدة",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 515,
    "question": "زوج، أم، بنت، أخوات لأب",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "أخوات لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 516,
    "question": "زوج، أم، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 517,
    "question": "زوجة، أم، بنت، أخوات لأب",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "أخوات لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 518,
    "question": "زوجة، أم، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 519,
    "question": "زوج، بنت، أخوات لأب، جد",
    "heirs": [
      "زوج",
      "بنت",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 520,
    "question": "زوج، جد، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جد",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 521,
    "question": "زوجة، بنت، أخوات لأب، جد",
    "heirs": [
      "زوجة",
      "بنت",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 522,
    "question": "زوجة، جد، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جد",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 523,
    "question": "زوج، جدة، بنت، أخوات لأب، عم",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "أخوات لأب",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 524,
    "question": "زوج، جدة، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 525,
    "question": "زوجة، جدة، بنت، أخوات لأب",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "أخوات لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 526,
    "question": "زوجة، جدة، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 527,
    "question": "زوج، أم، بنت، أخوات لأب، جد",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 528,
    "question": "زوج، أم، بنت، جد، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "أم",
      "بنت",
      "جد",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 529,
    "question": "زوجة، أم، بنت، أخوات لأب، جد",
    "heirs": [
      "زوجة",
      "أم",
      "بنت",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 530,
    "question": "زوجة، أم، جد، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "أم",
      "جد",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 531,
    "question": "زوج، جدة، بنت، أخوات لأب، جد",
    "heirs": [
      "زوج",
      "جدة",
      "بنت",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 532,
    "question": "زوج، جدة، جد، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوج",
      "جدة",
      "جد",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 533,
    "question": "زوجة، جدة، بنت، أخوات لأب، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "بنت",
      "أخوات لأب",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 534,
    "question": "زوجة، جدة، جد، بنت، أخوات لأب، أخ لأب",
    "heirs": [
      "زوجة",
      "جدة",
      "جد",
      "بنت",
      "أخوات لأب",
      "أخ لأب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخوات لأب",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أخ لأب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 535,
    "question": "ولد الأم/أولاد الأم",
    "heirs": [
      "ولد الأم/أولاد الأم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "ولد الأم/أولاد الأم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 536,
    "question": "ولد الأم، عم",
    "heirs": [
      "ولد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 537,
    "question": "زوج، ولد الأم، عم",
    "heirs": [
      "زوج",
      "ولد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 538,
    "question": "زوجة، ولد الأم، عم",
    "heirs": [
      "زوجة",
      "ولد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 539,
    "question": "ولد الأم، أم، عم",
    "heirs": [
      "ولد الأم",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 540,
    "question": "ولد الأم، جد",
    "heirs": [
      "ولد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 541,
    "question": "ولد الأم، جدة، عم",
    "heirs": [
      "ولد الأم",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 542,
    "question": "زوج، أم، ولد الأم، عم",
    "heirs": [
      "زوج",
      "أم",
      "ولد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 543,
    "question": "زوجة، أم، ولد الأم، عم",
    "heirs": [
      "زوجة",
      "أم",
      "ولد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 544,
    "question": "زوج، ولد الأم، جد",
    "heirs": [
      "زوج",
      "ولد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 545,
    "question": "زوجة، ولد الأم، جد",
    "heirs": [
      "زوجة",
      "ولد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 546,
    "question": "زوج، جدة، ولد الأم، عم",
    "heirs": [
      "زوج",
      "جدة",
      "ولد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 547,
    "question": "زوجة، جدة، ولد الأم، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "ولد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 548,
    "question": "زوج، أم، ولد الأم، جد",
    "heirs": [
      "زوج",
      "أم",
      "ولد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 549,
    "question": "زوجة، أم، ولد الأم، جد",
    "heirs": [
      "زوجة",
      "أم",
      "ولد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 550,
    "question": "زوج، جدة، ولد الأم، جد",
    "heirs": [
      "زوج",
      "جدة",
      "ولد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 551,
    "question": "زوجة، جدة، ولد الأم، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "ولد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "ولد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 552,
    "question": "أولاد الأم، عم",
    "heirs": [
      "أولاد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 553,
    "question": "زوج، أولاد الأم، عم",
    "heirs": [
      "زوج",
      "أولاد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 554,
    "question": "زوجة، أولاد الأم، عم",
    "heirs": [
      "زوجة",
      "أولاد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 555,
    "question": "أولاد الأم، أم، عم",
    "heirs": [
      "أولاد الأم",
      "أم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 556,
    "question": "أولاد الأم، جد",
    "heirs": [
      "أولاد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 557,
    "question": "أولاد الأم، جدة، عم",
    "heirs": [
      "أولاد الأم",
      "جدة",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 558,
    "question": "زوج، أم، أولاد الأم، عم",
    "heirs": [
      "زوج",
      "أم",
      "أولاد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 559,
    "question": "زوجة، أم، أولاد الأم، عم",
    "heirs": [
      "زوجة",
      "أم",
      "أولاد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 560,
    "question": "زوج، أولاد الأم، جد",
    "heirs": [
      "زوج",
      "أولاد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 561,
    "question": "زوجة، أولاد الأم، جد",
    "heirs": [
      "زوجة",
      "أولاد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 562,
    "question": "زوج، جدة، أولاد الأم، عم",
    "heirs": [
      "زوج",
      "جدة",
      "أولاد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 563,
    "question": "زوجة، جدة، أولاد الأم، عم",
    "heirs": [
      "زوجة",
      "جدة",
      "أولاد الأم",
      "عم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "عم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 564,
    "question": "زوج، أم، أولاد الأم، جد",
    "heirs": [
      "زوج",
      "أم",
      "أولاد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 565,
    "question": "زوجة، أم، أولاد الأم، جد",
    "heirs": [
      "زوجة",
      "أم",
      "أولاد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 566,
    "question": "زوج، جدة، أولاد الأم، أب",
    "heirs": [
      "زوج",
      "جدة",
      "أولاد الأم",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 567,
    "question": "زوجة، جدة، أولاد الأم، أب",
    "heirs": [
      "زوجة",
      "جدة",
      "أولاد الأم",
      "أب"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أب",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 568,
    "question": "زوج، جدة، أولاد الأم، جد",
    "heirs": [
      "زوج",
      "جدة",
      "أولاد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 569,
    "question": "زوجة، جدة، أولاد الأم، جد",
    "heirs": [
      "زوجة",
      "جدة",
      "أولاد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 570,
    "question": "بنت، أولاد الأم",
    "heirs": [
      "بنت",
      "أولاد الأم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 571,
    "question": "زوج، بنت،  أولاد الأم",
    "heirs": [
      "زوج",
      "بنت",
      "أولاد الأم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوج",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 572,
    "question": "زوجة، بنت، أولاد الأم",
    "heirs": [
      "زوجة",
      "بنت",
      "أولاد الأم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "زوجة",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 573,
    "question": "أولاد الأم، بنت، أم",
    "heirs": [
      "أولاد الأم",
      "بنت",
      "أم"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أم",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 574,
    "question": "بنت، أولاد الأم، جد",
    "heirs": [
      "بنت",
      "أولاد الأم",
      "جد"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جد",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  },
  {
    "id": 575,
    "question": "بنت، أولاد الأم، جدة",
    "heirs": [
      "بنت",
      "أولاد الأم",
      "جدة"
    ],
    "asalMasalah": null,
    "answers": [
      {
        "heir": "بنت",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "أولاد الأم",
        "fardh": null,
        "sahm": null
      },
      {
        "heir": "جدة",
        "fardh": null,
        "sahm": null
      }
    ],
    "explanation": null
  }
];
