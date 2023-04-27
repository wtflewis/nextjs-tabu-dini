const data = [

      {
        "id": 1,
        "kelime": "Namaz",
        "description": "İslam dininde önemli bir ibadet olan namaz hakkında bilgi.",
        "yasakliKelimeler": ["Cami", "Mescid", "Abdest", "İmam", "Kıble"]
      },
      {
        "id": 2,
        "kelime": "Kur'an",
        "description": "Müslümanların kutsal kitabı olan Kur'an hakkında bilgi.",
        "yasakliKelimeler": ["Ayat", "Tefsir", "Meal", "Fatiha", "Kıraat", "son", "kitap"]
      },
      {
        "id": 3,
        "kelime": "Hac",
        "description": "Müslümanların, Mekke'deki Kabe'yi ziyaret etmek için yaptığı hac ibadeti hakkında bilgi.",
        "yasakliKelimeler": ["Arafat", "Tavaf", "Zemzem", "Hacerül-esved", "Kabe"]
      },

      {
        "id": 4,
        "kelime": "Hz. Muhammed",
        "description": "İslam dininin peygamberi olan Hz. Muhammed hakkında bilgi.",
        "yasakliKelimeler": ["Sahabe", "Hadis", "Ashab-ı Kiram", "Hicret", "Peygamber", "Son"]
      },
      {
        "id": 5,
        "kelime": "Cennet",
        "description": "Müslümanların inandığı, güzel ve sonsuz bir hayatın olduğu yer hakkında bilgi.",
        "yasakliKelimeler": ["Cehennem", "Münker", "Nekir", "İslah", "Kıyamet"]
      },
      {
        "id": 6,
        "kelime": "İman",
        "description": "Müslümanların inandığı şeylere inanma, kalp ile tasdik etme hakkında bilgi.",
        "yasakliKelimeler": ["Tevhid", "Şirk", "Küfür", "Mümin", "Kâfir"]
      },
      {
        "id": 7,
        "kelime": "Sadaka",
        "description": "İslam dininde, malın belirli bir bölümünü fakirlere veya başka hayır kurumlarına verme hakkında bilgi.",
        "yasakliKelimeler": ["Zekat", "Fitre", "Fakir", "Fukara", "Miskin"]
      },




      {
        "id": 8,
        "kelime": "Zekat",
        "description": "İslam dinindeki zekat hakkında bilgi.",
        "yasakliKelimeler": ["para", "bağış", "yardım", "zekat vermek", "fakir"]
      },
      {
        "id": 9,
        "kelime": "Kurban Bayramı",
        "description": "İslam dinindeki kurban bayramı hakkında bilgi.",
        "yasakliKelimeler": ["kurban", "kesmek", "bayram", "Allah", "hac"]
      },
      {
        "id": 10,
        "kelime": "Namaz",
        "description": "İslam dinindeki namaz hakkında bilgi.",
        "yasakliKelimeler": ["ibadet", "camii", "Rükû", "secde", "dua"]
      },
      {
        "id": 11,
        "kelime": "Cennet",
        "description": "İslam dinindeki cennet hakkında bilgi.",
        "yasakliKelimeler": ["Ahiret", "nimet", "Allah", "peygamber", "iman"]
      },
      {
        "id": 12,
        "kelime": "Peygamber",
        "description": "İslam dinindeki peygamberler hakkında bilgi.",
        "yasakliKelimeler": ["Kuran", "Allah", "Hz. Muhammed", "din", "tebliğ"]
      },
      {
        "id": 13,
        "kelime": "Hac",
        "description": "İslam dinindeki hac ibadeti hakkında bilgi.",
        "yasakliKelimeler": ["Mekke", "Medine", "Kabe", "tavaf", "Arafat"]
      },
      {
        "id": 14,
        "kelime": "Sahabe",
        "description": "İslam dinindeki sahabeler hakkında bilgi.",
        "yasakliKelimeler": ["Hz. Muhammed", "ashab", "iman", "Allah", "sünnet"]
      },
      {
        "id": 15,
        "kelime": "Cuma Namazı",
        "description": "İslam dinindeki cuma namazı hakkında bilgi.",
        "yasakliKelimeler": ["cami", "imam", "cenaze namazı", "öğle namazı", "dualar"]
      },
      {
        "id": 16,
        "kelime": "Haram",
        "description": "İslam dinindeki haramlar hakkında bilgi.",
        "yasakliKelimeler": ["günah", "yakın akraba", "meşru olmayan işler", "Allah", "din"]
      },
      {
        "id": 17,
        "kelime": "Ramazan",
        "description": "İslam dinindeki Ramazan ayı hakkında bilgi.",
        "yasakliKelimeler": ["oruç", "iftar", "teravih", "Kuran", "Allah"]
      },


      {
        "id": 18,
        "kelime": "İhlas Suresi",
        "description": "Kur'an'ın 112. suresidir ve Tevhid inancının özünü anlatır.",
        "yasakliKelimeler": ["kuran", "sure", "112", "ihlas", "allah", "kitap"]
      },

      {
        "id": 19,
        "kelime": "Mescid-i Nebevi",
        "description": "Mescid-i Nebevi, Hz. Muhammed'in Medine'deki camisidir ve İslam'ın en kutsal yapılarından biridir.",
        "yasakliKelimeler": ["mekan", "mekke", "medine", "ibadet", "ilk", "mescid"]
      },

      {
        "id": 20,
        "kelime": "Miraç",
        "description": "Miraç, Hz. Muhammed'in Allah'ın huzuruna yükseldiği mucizevî bir olaydır.",
        "yasakliKelimeler": ["cami", "gece", "yükselmek", "kandil", "yasa dışı"]
      },
      {
        "id": 21,
        "kelime": "Hulefa-i Raşidin",
        "yasakliKelimeler": ["halife", "önderlik", "imamet", "şeyh"]
      },
      {
        "id": 22,
        "kelime": "Muhammed bin Abdülvehhab",
        "yasakliKelimeler": ["vahhabi", "vehhabilik", "bidat", "tevhid"]
      },
      {
        "id": 23,
        "kelime": "Müslüman Kardeşler",
        "yasakliKelimeler": ["iktidar", "darbe", "siyasi", "şiddet"]
      },
      {
        "id": 24,
        "kelime": "Mevlevilik",
        "yasakliKelimeler": ["semah", "mevlana", "çile", "zikir"]
      },
      {
        "id": 25,
        "kelime": "Sünni-Şii ayrılığı",
        "yasakliKelimeler": ["fitne", "bölünme", "çekişme", "savaş"]
      },


      {
        "id": 26,
        "kelime": "Mukabele",
        "yasakliKelimeler": ["alkol", "zina", "sigara", "uyuşturucu", "toplantı"]
      },
      {
        "id": 27,
        "kelime": "Abdest",
        "yasakliKelimeler": ["su", "5", "cami","namaz","şadırvan"]
      },
      {
        "id": 28,
        "kelime": "Tefsir",
        "yasakliKelimeler": ["hırsızlık", "iftira", "yalan", "gıybet"]
      },
      {
        "id": 29,
        "kelime": "Seyyid",
        "yasakliKelimeler": ["iktidar", "zulüm", "kibir", "fitne"]
      },
      {
        "id": 30,
        "kelime": "Nübüvvet",
        "yasakliKelimeler": ["sapkınlık", "şirk", "dinsizlik", "putperestlik"]
      },
     
      {
        "id": 31,
        "kelime": "Hira Dağı",
        "yasakliKelimeler": ["peygamber", "Allah", "Kuran", "Mekke"]
      },
      {
        "id": 32,
        "kelime": "Arafat Tepesi",
        "yasakliKelimeler": ["tavaf", "şeytan", "Hac", "kurban"]
      },
      {
        "id": 33,
        "kelime": "Nuh Tufanı",
        "yasakliKelimeler": ["gemi", "sel", "Nuh", "Hz. İbrahim"]
      },
      {
        "id": 34,
        "kelime": "Mescid-i Haram",
        "yasakliKelimeler": ["kutsal", "Kabe", "Mekke", "saat"]
      },
      {
        "id": 35,
        "kelime": "Cennet",
        "yasakliKelimeler": ["cehennem", "ölüm", "melek", "hesap"]
      },
      {
        "id": 36,
        "kelime": "Medine",
        "yasakliKelimeler": ["Peygamber", "Mescid-i Nebi", "Muhacir", "Ensar"]
      },
      {
        "id": 37,
        "kelime": "Kerbelâ",
        "yasakliKelimeler": ["Hz. Hüseyin", "şehit", "Ashura", "imam"]
      },

      {
        "id": 38,
        "kelime": "Cihad",
        "yasakliKelimeler": ["savaş", "barış", "İslam", "şehit"]
      },
      {
        "id": 39,
        "kelime": "Kıyamet",
        "yasakliKelimeler": ["mahşer", "Münker", "Nekir", "Kıyamet Suresi"]
      },
      {
        "id": 40,
        "kelime": "Kudret",
        "yasakliKelimeler": ["güç", "allah", "zati", "subuti","kuvvet"],
      }

  ];
  
  export default data;
  