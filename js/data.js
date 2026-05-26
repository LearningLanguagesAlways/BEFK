/* ═══════════════════════════════════════════════════════
   영어의 문 · Gateway to English
   data.js — Course Data Library
   All vocabulary, phonics, alphabet, and course metadata
   ═══════════════════════════════════════════════════════ */

const COURSE_DATA = {

  /* ─── 10-Week Schedule ──────────────────────────── */
  weeks: [
    {
      number: 1, date: "06/01",
      titleKo: "소개 + 알파벳 + 발음",
      titleEn: "Introductions + Alphabet + Phonics",
      topics: ["알파벳", "인사말", "발음"],
      file: "weeks/week1.html", active: true
    },
    {
      number: 2, date: "06/08",
      titleKo: "복습 + 문장 구조 + 대명사 + 어휘",
      titleEn: "Review + Sentence Structure + Pronouns + Vocab",
      topics: ["복습", "문장 구조", "대명사"],
      file: "weeks/week2.html", active: false
    },
    {
      number: 3, date: "06/15",
      titleKo: "복습 + Be 동사 + 질문 + 어휘",
      titleEn: "Review + Be Verbs + Questions + Vocab",
      topics: ["Be 동사", "질문", "어휘"],
      file: "weeks/week3.html", active: false
    },
    {
      number: 4, date: "06/22",
      titleKo: "복습 + 현재 단순 시제 + 어휘",
      titleEn: "Review + Present Simple Tense + Vocab",
      topics: ["현재 시제", "일상 동사", "어휘"],
      file: "weeks/week4.html", active: false
    },
    {
      number: 5, date: "06/29",
      titleKo: "복습 + 관사 + 복수형 + 어휘",
      titleEn: "Review + Articles (a/an/the) + Plurals + Vocab",
      topics: ["관사", "복수형", "명사"],
      file: "weeks/week5.html", active: false
    },
    {
      number: 6, date: "07/06",
      titleKo: "복습 + 숫자/시간/날짜 + 어휘",
      titleEn: "Review + Numbers / Time / Dates + Vocab",
      topics: ["숫자", "시간", "날짜"],
      file: "weeks/week6.html", active: false
    },
    {
      number: 7, date: "07/13",
      titleKo: "복습 + 과거 시제 + 어휘",
      titleEn: "Review + Past Tense + Vocab",
      topics: ["과거 시제", "불규칙 동사", "이야기"],
      file: "weeks/week7.html", active: false
    },
    {
      number: 8, date: "07/20",
      titleKo: "복습 + 전치사 (in/on/at) + 어휘",
      titleEn: "Review + Prepositions (in, on, at) + Vocab",
      topics: ["전치사", "장소", "시간 표현"],
      file: "weeks/week8.html", active: false
    },
    {
      number: 9, date: "07/27",
      titleKo: "전체 내용 복습",
      titleEn: "Full Content Review",
      topics: ["총복습", "시험 준비", "어휘 총정리"],
      file: "weeks/week9.html", active: false
    },
    {
      number: 10, date: "08/03",
      titleKo: "회화의 날! 🎉",
      titleEn: "Conversation Day! 🎉",
      topics: ["자유 대화", "발표", "축하"],
      file: "weeks/week10.html", active: false
    }
  ],

  /* ─── WEEK 1 CONTENT ────────────────────────────── */
  week1: {

    /* 알파벳 (Alphabet) — 26 letters
       Special notes for Korean learners on tricky letters */
    alphabet: [
      { upper:"A", lower:"a", name:"에이",   ipa:"/eɪ/",   example:"apple",    exKo:"사과",    tricky:false },
      { upper:"B", lower:"b", name:"비",     ipa:"/biː/",  example:"book",     exKo:"책",      tricky:false },
      { upper:"C", lower:"c", name:"씨",     ipa:"/siː/",  example:"coffee",   exKo:"커피",    tricky:false },
      { upper:"D", lower:"d", name:"디",     ipa:"/diː/",  example:"door",     exKo:"문",      tricky:false },
      { upper:"E", lower:"e", name:"이",     ipa:"/iː/",   example:"egg",      exKo:"달걀",    tricky:false },
      { upper:"F", lower:"f", name:"에프",   ipa:"/ɛf/",   example:"fish",     exKo:"물고기",  tricky:true,  trickyNote:"한국어에 없는 소리! 윗니+아랫입술" },
      { upper:"G", lower:"g", name:"지",     ipa:"/dʒiː/", example:"good",     exKo:"좋은",    tricky:false },
      { upper:"H", lower:"h", name:"에이치", ipa:"/eɪtʃ/", example:"hello",    exKo:"안녕",    tricky:false },
      { upper:"I", lower:"i", name:"아이",   ipa:"/aɪ/",   example:"ice",      exKo:"얼음",    tricky:false },
      { upper:"J", lower:"j", name:"제이",   ipa:"/dʒeɪ/", example:"job",      exKo:"직업",    tricky:false },
      { upper:"K", lower:"k", name:"케이",   ipa:"/keɪ/",  example:"Korea",    exKo:"한국",    tricky:false },
      { upper:"L", lower:"l", name:"엘",     ipa:"/ɛl/",   example:"love",     exKo:"사랑",    tricky:true,  trickyNote:"혀끝을 위 잇몸에 붙이세요" },
      { upper:"M", lower:"m", name:"엠",     ipa:"/ɛm/",   example:"morning",  exKo:"아침",    tricky:false },
      { upper:"N", lower:"n", name:"엔",     ipa:"/ɛn/",   example:"name",     exKo:"이름",    tricky:false },
      { upper:"O", lower:"o", name:"오",     ipa:"/oʊ/",   example:"open",     exKo:"열다",    tricky:false },
      { upper:"P", lower:"p", name:"피",     ipa:"/piː/",  example:"please",   exKo:"제발",    tricky:false },
      { upper:"Q", lower:"q", name:"큐",     ipa:"/kjuː/", example:"question", exKo:"질문",    tricky:false },
      { upper:"R", lower:"r", name:"알",     ipa:"/ɑːr/",  example:"rice",     exKo:"쌀",      tricky:true,  trickyNote:"혀가 입천장에 닿지 않아요!" },
      { upper:"S", lower:"s", name:"에스",   ipa:"/ɛs/",   example:"school",   exKo:"학교",    tricky:false },
      { upper:"T", lower:"t", name:"티",     ipa:"/tiː/",  example:"teacher",  exKo:"선생님",  tricky:false },
      { upper:"U", lower:"u", name:"유",     ipa:"/juː/",  example:"understand",exKo:"이해하다",tricky:false },
      { upper:"V", lower:"v", name:"브이",   ipa:"/viː/",  example:"very",     exKo:"매우",    tricky:true,  trickyNote:"윗니+아랫입술, 진동! (B와 달라요)" },
      { upper:"W", lower:"w", name:"더블유", ipa:"/ˈdʌbljuː/",example:"water", exKo:"물",      tricky:false },
      { upper:"X", lower:"x", name:"엑스",   ipa:"/ɛks/",  example:"box",      exKo:"상자",    tricky:false },
      { upper:"Y", lower:"y", name:"와이",   ipa:"/waɪ/",  example:"yes",      exKo:"네",      tricky:false },
      { upper:"Z", lower:"z", name:"지이",   ipa:"/ziː/",  example:"zero",     exKo:"영",      tricky:false }
    ],

    /* 발음 (Phonics) — 4 tricky areas for Korean speakers */
    phonics: [
      {
        id: "fp",
        title: "F vs P 소리",
        titleEn: "The F vs P Sound",
        tipKo: "한국어에는 'F' 소리가 없어요! 윗니를 아랫입술에 살짝 대고 바람을 내보내세요. 'P'는 입술을 닫았다가 터뜨리는 소리예요.",
        tipEn: "Korean has no 'F' sound. For 'F': touch your upper teeth to your lower lip and blow. 'P' is a lip-pop.",
        pairs: [
          { word:"fish",  ko:"물고기", real:true  },
          { word:"fan",   ko:"선풍기", real:true  },
          { word:"face",  ko:"얼굴",  real:true  },
          { word:"fire",  ko:"불",    real:true  }
        ]
      },
      {
        id: "rl",
        title: "R vs L 소리",
        titleEn: "The R vs L Sound",
        tipKo: "'L'은 혀끝을 윗 잇몸(위 앞니 바로 뒤)에 붙여요. 'R'은 혀가 아무데도 닿지 않아요 — 공중에 떠 있어요!",
        tipEn: "For 'L': tongue tip touches the ridge behind your upper front teeth. For 'R': tongue floats — touches nothing!",
        pairs: [
          { word:"rice",  ko:"쌀",    real:true  },
          { word:"light", ko:"빛",    real:true  },
          { word:"road",  ko:"도로",  real:true  },
          { word:"love",  ko:"사랑",  real:true  }
        ]
      },
      {
        id: "th",
        title: "TH 소리",
        titleEn: "The TH Sound",
        tipKo: "혀를 이 사이에 살짝 내밀고 바람을 불어요. 한국어에 없는 소리라서 처음엔 어색해요 — 연습하면 돼요!",
        tipEn: "Stick your tongue gently between your teeth and blow air out. This doesn't exist in Korean — practice makes perfect!",
        pairs: [
          { word:"this",  ko:"이것",  real:true  },
          { word:"think", ko:"생각",  real:true  },
          { word:"the",   ko:"(관사)",real:true  },
          { word:"thank", ko:"감사",  real:true  }
        ]
      },
      {
        id: "vb",
        title: "V vs B 소리",
        titleEn: "The V vs B Sound",
        tipKo: "'V'는 윗니+아랫입술로 진동을 만들어요. 'B'는 두 입술을 닫았다가 터뜨려요. 손가락을 목에 대면 V에서 진동이 느껴져요!",
        tipEn: "V: vibration between upper teeth and lower lip. B: both lips close and pop. Put your finger on your throat — feel the buzz for V!",
        pairs: [
          { word:"very",  ko:"매우",  real:true  },
          { word:"voice", ko:"목소리",real:true  },
          { word:"video", ko:"비디오",real:true  },
          { word:"visit", ko:"방문",  real:true  }
        ]
      }
    ],

    /* 어휘 (Vocabulary) — 20 essential greetings & introductions */
    vocabulary: [
      { en:"Hello",             ko:"안녕하세요",            pron:"hel-OH",          example:"Hello! My name is Ji-ho.",               exKo:"안녕하세요! 제 이름은 지호예요." },
      { en:"Hi",                ko:"안녕 (친한 사이)",       pron:"HY",              example:"Hi! How are you?",                        exKo:"안녕! 어떻게 지내?" },
      { en:"Good morning",      ko:"좋은 아침이에요",        pron:"good MOR-ning",   example:"Good morning, teacher!",                  exKo:"좋은 아침이에요, 선생님!" },
      { en:"Good afternoon",    ko:"안녕하세요 (오후)",      pron:"good af-ter-NOON",example:"Good afternoon, everyone.",               exKo:"안녕하세요, 여러분." },
      { en:"Good evening",      ko:"안녕하세요 (저녁)",      pron:"good EEV-ning",   example:"Good evening! Please sit down.",          exKo:"안녕하세요! 앉아 주세요." },
      { en:"Goodbye",           ko:"안녕히 가세요",          pron:"good-BY",         example:"Goodbye! See you next week!",             exKo:"안녕히 가세요! 다음 주에 봐요!" },
      { en:"See you later",     ko:"나중에 봐요",            pron:"see you LAY-ter", example:"See you later, friends!",                 exKo:"나중에 봐요, 여러분!" },
      { en:"Nice to meet you",  ko:"만나서 반갑습니다",       pron:"nice to MEET you",example:"Nice to meet you. I'm Sarah.",            exKo:"만나서 반갑습니다. 저는 사라예요." },
      { en:"How are you?",      ko:"어떻게 지내세요?",        pron:"how are YOU",     example:"How are you today?",                      exKo:"오늘 어떻게 지내세요?" },
      { en:"I'm fine, thank you",ko:"잘 지냅니다, 감사합니다",pron:"I'm FINE THANK you",example:"I'm fine, thank you. And you?",        exKo:"잘 지냅니다, 감사합니다. 당신은요?" },
      { en:"Thank you",         ko:"감사합니다",             pron:"THANK you",       example:"Thank you very much!",                    exKo:"정말 감사합니다!" },
      { en:"You're welcome",    ko:"천만에요",               pron:"your WEL-come",   example:"You're welcome! Happy to help.",          exKo:"천만에요! 도와드려서 기뻐요." },
      { en:"Please",            ko:"부탁드려요",             pron:"PLEEZ",           example:"Please sit down.",                        exKo:"앉아 주세요." },
      { en:"Excuse me",         ko:"실례합니다",             pron:"ex-KYOOZ me",     example:"Excuse me, can you repeat that?",         exKo:"실례합니다, 다시 말씀해 주세요?" },
      { en:"Sorry",             ko:"미안합니다",             pron:"SAR-ee",          example:"Sorry I'm late! Traffic was bad.",        exKo:"늦어서 미안합니다! 차가 막혔어요." },
      { en:"Yes",               ko:"네",                    pron:"YES",             example:"Yes, I understand.",                      exKo:"네, 이해합니다." },
      { en:"No",                ko:"아니요",                 pron:"NOH",             example:"No, thank you. I'm full.",                exKo:"아니요, 괜찮아요. 배불러요." },
      { en:"My name is...",     ko:"제 이름은 ...입니다",    pron:"my NAME is",      example:"My name is Min-jun. Nice to meet you!", exKo:"제 이름은 민준입니다. 만나서 반갑습니다!" },
      { en:"I am from...",      ko:"저는 ...에서 왔습니다",  pron:"I am FROM",       example:"I am from Busan, Korea.",                 exKo:"저는 한국 부산에서 왔습니다." },
      { en:"I don't understand",ko:"이해가 안 돼요",         pron:"I dont un-der-STAND",example:"Sorry, I don't understand. Please say again.", exKo:"죄송합니다, 이해가 안 돼요. 다시 말씀해 주세요." }
    ],

    /* 자기소개 (Introduction Builder) */
    intro: {
      templates: [
        "Hello! My name is {name}.",
        "I am from {city}, Korea.",
        "I am {age} years old.",
        "I am a {job}.",
        "Nice to meet you!"
      ],
      jobs: [
        "teacher","student","nurse","office worker","business owner",
        "homemaker","engineer","chef","driver","artist","doctor",
        "pharmacist","salesperson","hair stylist","accountant"
      ],
      cities: [
        "Seoul","Busan","Incheon","Daegu","Gwangju",
        "Daejeon","Suwon","Ulsan","Jeju","Gyeongju"
      ]
    },

    /* 단어 게임 (Matching Game) — 10 pairs */
    matchPairs: [
      { en:"Hello",         ko:"안녕하세요" },
      { en:"Thank you",     ko:"감사합니다" },
      { en:"Sorry",         ko:"미안합니다" },
      { en:"Yes",           ko:"네" },
      { en:"No",            ko:"아니요" },
      { en:"Goodbye",       ko:"안녕히 가세요" },
      { en:"Please",        ko:"부탁드려요" },
      { en:"Morning",       ko:"아침" },
      { en:"Name",          ko:"이름" },
      { en:"Nice to meet you", ko:"만나서 반갑습니다" }
    ],

    /* 대화 (Dialogue scenarios) */
    dialogues: [
      {
        icon: "☕",
        titleKo: "카페에서 처음 만나기",
        titleEn: "Meeting Someone for the First Time at a Café",
        lines: [
          { speaker:"A", en:"Hi! Are you Ji-soo?",            ko:"안녕하세요! 지수 씨이신가요?" },
          { speaker:"B", en:"Yes! Hello! I'm Ji-soo.",        ko:"네! 안녕하세요! 저는 지수예요." },
          { speaker:"A", en:"Nice to meet you. I'm David.",   ko:"만나서 반갑습니다. 저는 데이빗이에요." },
          { speaker:"B", en:"Nice to meet you too, David!",   ko:"저도 만나서 반가워요, 데이빗 씨!" },
          { speaker:"A", en:"How are you today?",             ko:"오늘 어떻게 지내세요?" },
          { speaker:"B", en:"I'm fine, thank you. And you?",  ko:"잘 지냅니다, 감사합니다. 당신은요?" }
        ]
      },
      {
        icon: "🏫",
        titleKo: "교실에서 첫날",
        titleEn: "First Day in Class",
        lines: [
          { speaker:"T", en:"Good morning, everyone!",        ko:"좋은 아침이에요, 여러분!" },
          { speaker:"S", en:"Good morning, teacher!",         ko:"좋은 아침이에요, 선생님!" },
          { speaker:"T", en:"My name is _____. What's your name?", ko:"제 이름은 _____입니다. 이름이 뭐예요?" },
          { speaker:"S", en:"My name is _____.",              ko:"제 이름은 _____입니다." },
          { speaker:"T", en:"Nice to meet you!",              ko:"만나서 반갑습니다!" },
          { speaker:"S", en:"Nice to meet you too!",          ko:"저도 만나서 반가워요!" }
        ]
      },
      {
        icon: "🏪",
        titleKo: "가게에서 인사하기",
        titleEn: "Greeting at a Store",
        lines: [
          { speaker:"S", en:"Hello! Good afternoon.",         ko:"안녕하세요! 좋은 오후예요." },
          { speaker:"C", en:"Good afternoon! How are you?",   ko:"안녕하세요! 어떻게 지내세요?" },
          { speaker:"S", en:"I'm great, thank you! And you?", ko:"잘 지내요, 감사합니다! 당신은요?" },
          { speaker:"C", en:"I'm good too. Thank you!",       ko:"저도 잘 지내요. 감사합니다!" },
          { speaker:"S", en:"Excuse me, can I help you?",     ko:"실례합니다, 도와드릴까요?" },
          { speaker:"C", en:"Yes, please! Thank you!",        ko:"네, 부탁드려요! 감사합니다!" }
        ]
      }
    ]
  } // end week1

}; // end COURSE_DATA
