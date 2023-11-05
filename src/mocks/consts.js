const BASE_URL = "http://localhost:3000/api";
const PROVINCES = [
  {
    id: 1,
    name: "اصفهان",
  },
  {
    id: 2,
    name: "تهران",
  },
  {
    id: 3,
    name: "خراسان رضوی",
  },
  {
    id: 4,
    name: "فارس",
  },
  {
    id: 5,
    name: "گیلان",
  },
  {
    id: 6,
    name: "یزد",
  },
];
const CITIES = {
  1: [
    {
      id: 24,
      name: "آران وبیدگل",
      city_postal_code: null,
    },
    {
      id: 49,
      name: "ابریشم",
      city_postal_code: null,
    },
    {
      id: 51,
      name: "ابوزیدآباد",
      city_postal_code: null,
    },
    {
      id: 77,
      name: "اردستان",
      city_postal_code: null,
    },
    {
      id: 98,
      name: "اژیه",
      city_postal_code: null,
    },
    {
      id: 123,
      name: "اصغرآباد",
      city_postal_code: null,
    },
    {
      id: 124,
      name: "اصفهان",
      city_postal_code: null,
    },
    {
      id: 143,
      name: "افوس",
      city_postal_code: null,
    },
    {
      id: 163,
      name: "انارک",
      city_postal_code: null,
    },
    {
      id: 189,
      name: "ایمانشهر",
      city_postal_code: null,
    },
    {
      id: 206,
      name: "بادرود",
      city_postal_code: null,
    },
    {
      id: 215,
      name: "باغ بهادران",
      city_postal_code: null,
    },
    {
      id: 218,
      name: "باغشاد",
      city_postal_code: null,
    },
    {
      id: 221,
      name: "بافران",
      city_postal_code: null,
    },
    {
      id: 243,
      name: "برزک",
      city_postal_code: null,
    },
  ],
  2: [
    {
      id: 13,
      name: "آبسرد",
      city_postal_code: null,
    },
    {
      id: 15,
      name: "آبعلی",
      city_postal_code: null,
    },
    {
      id: 55,
      name: "احمد آباد مستوفی",
      city_postal_code: null,
    },
    {
      id: 68,
      name: "ارجمند",
      city_postal_code: null,
    },
    {
      id: 114,
      name: "اسلامشهر",
      city_postal_code: null,
    },
    {
      id: 166,
      name: "اندیشه",
      city_postal_code: null,
    },
    {
      id: 217,
      name: "باغستان",
      city_postal_code: null,
    },
    {
      id: 223,
      name: "باقرشهر",
      city_postal_code: null,
    },
    {
      id: 301,
      name: "بومهن",
      city_postal_code: null,
    },
    {
      id: 336,
      name: "پاکدشت",
      city_postal_code: null,
    },
    {
      id: 340,
      name: "پردیس",
      city_postal_code: null,
    },
    {
      id: 341,
      name: "پرند",
      city_postal_code: null,
    },
    {
      id: 356,
      name: "پیشوا",
      city_postal_code: null,
    },
    {
      id: 377,
      name: "تجریش",
      city_postal_code: null,
    },
    {
      id: 399,
      name: "تهران",
      city_postal_code: null,
    },
  ],
  3: [
    {
      id: 57,
      name: "احمدابادصولت",
      city_postal_code: null,
    },
    {
      id: 160,
      name: "انابد",
      city_postal_code: null,
    },
    {
      id: 204,
      name: "باجگیران",
      city_postal_code: null,
    },
    {
      id: 205,
      name: "باخرز",
      city_postal_code: null,
    },
    {
      id: 208,
      name: "بار",
      city_postal_code: null,
    },
    {
      id: 228,
      name: "بایک",
      city_postal_code: null,
    },
    {
      id: 230,
      name: "بجستان",
      city_postal_code: null,
    },
    {
      id: 240,
      name: "بردسکن",
      city_postal_code: null,
    },
    {
      id: 317,
      name: "بیدخت",
      city_postal_code: null,
    },
    {
      id: 365,
      name: "تایباد",
      city_postal_code: null,
    },
    {
      id: 379,
      name: "تربت جام",
      city_postal_code: null,
    },
    {
      id: 380,
      name: "تربت حیدریه",
      city_postal_code: null,
    },
    {
      id: 437,
      name: "جغتای",
      city_postal_code: null,
    },
  ],
  4: [
    {
      id: 8,
      name: "آباده",
      city_postal_code: null,
    },
    {
      id: 9,
      name: "آباده طشک",
      city_postal_code: null,
    },
    {
      id: 69,
      name: "ارد",
      city_postal_code: null,
    },
    {
      id: 78,
      name: "اردکان",
      city_postal_code: null,
    },
    {
      id: 142,
      name: "افزر",
      city_postal_code: null,
    },
    {
      id: 172,
      name: "اهل",
      city_postal_code: null,
    },
    {
      id: 182,
      name: "ایج",
      city_postal_code: null,
    },
    {
      id: 185,
      name: "ایزدخواست",
      city_postal_code: null,
    },
    {
      id: 195,
      name: "باب انار",
      city_postal_code: null,
    },
    {
      id: 198,
      name: "بابامنیر",
      city_postal_code: null,
    },
    {
      id: 224,
      name: "بالاده",
      city_postal_code: null,
    },
    {
      id: 271,
      name: "بنارویه",
      city_postal_code: null,
    },
    {
      id: 294,
      name: "شیراز",
      city_postal_code: null,
    },
  ],
  5: [
    {
      id: 30,
      name: "آستارا",
      city_postal_code: null,
    },
    {
      id: 32,
      name: "آستانه اشرفیه",
      city_postal_code: null,
    },
    {
      id: 58,
      name: "احمدسرگوراب",
      city_postal_code: null,
    },
    {
      id: 99,
      name: "اسالم",
      city_postal_code: null,
    },
    {
      id: 141,
      name: "اطاقور",
      city_postal_code: null,
    },
    {
      id: 155,
      name: "املش",
      city_postal_code: null,
    },
    {
      id: 210,
      name: "بازار جمعه",
      city_postal_code: null,
    },
    {
      id: 251,
      name: "بره سر",
      city_postal_code: null,
    },
    {
      id: 275,
      name: "بندرانزلی",
      city_postal_code: null,
    },
    {
      id: 343,
      name: "پره سر",
      city_postal_code: null,
    },
    {
      id: 394,
      name: "توتکابن",
      city_postal_code: null,
    },
    {
      id: 462,
      name: "جیرنده",
      city_postal_code: null,
    },
    {
      id: 463,
      name: "چابکسر",
      city_postal_code: null,
    },
    {
      id: 467,
      name: "چاف و چمخاله",
      city_postal_code: null,
    },
    {
      id: 496,
      name: "چوبر",
      city_postal_code: null,
    },
    {
      id: 523,
      name: "حویق",
      city_postal_code: null,
    },
  ],
  6: [
    {
      id: 48,
      name: "ابرکوه",
      city_postal_code: null,
    },
    {
      id: 56,
      name: "احمدآباد",
      city_postal_code: null,
    },
    {
      id: 79,
      name: "اردکان",
      city_postal_code: null,
    },
    {
      id: 120,
      name: "اشکذر",
      city_postal_code: null,
    },
    {
      id: 222,
      name: "بافق",
      city_postal_code: null,
    },
    {
      id: 234,
      name: "بخ",
      city_postal_code: null,
    },
    {
      id: 259,
      name: "بفروییه",
      city_postal_code: null,
    },
    {
      id: 305,
      name: "بهاباد",
      city_postal_code: null,
    },
    {
      id: 386,
      name: "تفت",
      city_postal_code: null,
    },
    {
      id: 519,
      name: "حمیدیا",
      city_postal_code: null,
    },
    {
      id: 551,
      name: "خضرآباد",
      city_postal_code: null,
    },
  ],
};

export { BASE_URL, PROVINCES, CITIES };
