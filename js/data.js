/* ═══════════════════════════════════════════════════════
   기초 영어 · Basic English for Korean Speakers
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
      file: "weeks/week2.html", active: true
    },
    {
      number: 3, date: "06/15",
      titleKo: "복습 + Be 동사 + 질문 + 어휘",
      titleEn: "Review + Be Verbs + Questions + Vocab",
      topics: ["Be 동사", "질문", "어휘"],
      file: "weeks/week3.html", active: true
    },
    {
      number: 4, date: "06/22",
      titleKo: "복습 + 현재 단순 시제 + 어휘",
      titleEn: "Review + Present Simple Tense + Vocab",
      topics: ["현재 시제", "일상 동사", "어휘"],
      file: "weeks/week4.html", active: true
    },
    {
      number: 5, date: "06/29",
      titleKo: "복습 + 관사 + 복수형 + 어휘",
      titleEn: "Review + Articles (a/an/the) + Plurals + Vocab",
      topics: ["관사", "복수형", "명사"],
      file: "weeks/week5.html", active: true
    },
    {
      number: 6, date: "07/06",
      titleKo: "복습 + 숫자/시간/날짜 + 어휘",
      titleEn: "Review + Numbers / Time / Dates + Vocab",
      topics: ["숫자", "시간", "날짜"],
      file: "weeks/week6.html", active: true
    },
    {
      number: 7, date: "07/13",
      titleKo: "복습 + 과거 시제 + 어휘",
      titleEn: "Review + Past Tense + Vocab",
      topics: ["과거 시제", "불규칙 동사", "이야기"],
      file: "weeks/week7.html", active: true
    },
    {
      number: 8, date: "07/20",
      titleKo: "복습 + 전치사 (in/on/at) + 어휘",
      titleEn: "Review + Prepositions (in, on, at) + Vocab",
      topics: ["전치사", "장소", "시간 표현"],
      file: "weeks/week8.html", active: true
    },
    {
      number: 9, date: "07/27",
      titleKo: "전체 내용 복습",
      titleEn: "Full Content Review",
      topics: ["총복습", "시험 준비", "어휘 총정리"],
      file: "weeks/week9.html", active: true
    },
    {
      number: 10, date: "08/03",
      titleKo: "회화의 날!",
      titleEn: "Conversation Day!",
      topics: ["자유 대화", "발표", "축하"],
      file: "weeks/week10.html", active: true
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
        tipKo: "'L'은 혀끝을 윗잇몸(위 앞니 바로 뒤)에 붙여요. 'R'은 혀가 아무데도 닿지 않아요 — 공중에 떠 있어요!",
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
      { en:"Excuse me",         ko:"실례합니다",             pron:"ex-KYOOZ me",     example:"Excuse me, can you repeat that?",         exKo:"실례합니다, 다시 말씀해 주시겠어요?" },
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
        "I am from {city}.",
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
        "South Korea",
        "Georgia",
        "Atlanta",
        "Norcross",
        "Gwinnett County"
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
        icon: "",
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
        icon: "",
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
        icon: "",
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
    ],

    /* 수업 어휘 (Classroom Vocabulary) — 24 words
       Requested set: letter, word, sound, vowel, consonant,
       short, long, silent, read, write, speak, repeat,
       name, from, Korea, country, live, student, teacher,
       friend, year, where, what, how                        */
    classVocab: [
      { en:"letter",    ko:"글자",      pron:"LET-ter",     example:"A, B, and C are letters.",              exKo:"A, B, C는 글자예요." },
      { en:"word",      ko:"단어",      pron:"WERD",        example:"'Hello' is an English word.",           exKo:"'Hello'는 영어 단어예요." },
      { en:"sound",     ko:"소리",      pron:"SOWND",       example:"What sound does 'F' make?",             exKo:"'F'는 어떤 소리예요?" },
      { en:"vowel",     ko:"모음",      pron:"VOW-el",      example:"A, E, I, O, U are vowels.",             exKo:"A, E, I, O, U는 모음이에요." },
      { en:"consonant", ko:"자음",      pron:"KON-so-nant", example:"B, C, D are consonants.",              exKo:"B, C, D는 자음이에요." },
      { en:"short",     ko:"짧은",      pron:"SHORT",       example:"'A' has a short sound in 'apple'.",     exKo:"'apple'의 'A'는 짧은 소리예요." },
      { en:"long",      ko:"긴",        pron:"LAWNG",       example:"'A' has a long sound in 'name'.",       exKo:"'name'의 'A'는 긴 소리예요." },
      { en:"silent",    ko:"묵음",    pron:"SY-lent",     example:"The 'e' in 'love' is silent.",          exKo:"'love'의 'e'는 묵음이에요." },
      { en:"read",      ko:"읽다",      pron:"REED",        example:"I read English every day.",             exKo:"저는 매일 영어를 읽어요." },
      { en:"write",     ko:"쓰다",      pron:"RYT",         example:"Please write your name here.",          exKo:"여기에 이름을 써 주세요." },
      { en:"speak",     ko:"말하다",    pron:"SPEEK",       example:"I want to speak English well.",         exKo:"저는 영어를 잘 말하고 싶어요." },
      { en:"repeat",    ko:"반복하다",  pron:"ri-PEET",     example:"Please repeat after me.",               exKo:"저를 따라 말해 주세요." },
      { en:"name",      ko:"이름",      pron:"NAYM",        example:"My name is Ji-ho. What is your name?",  exKo:"제 이름은 지호예요. 이름이 뭐예요?" },
      { en:"from",      ko:"~에서 (온)", pron:"FRUM",       example:"I am from Seoul, Korea.",               exKo:"저는 한국 서울에서 왔어요." },
      { en:"Korea",     ko:"한국",      pron:"ko-REE-ah",   example:"I am from Korea.",                      exKo:"저는 한국에서 왔어요." },
      { en:"country",   ko:"나라",      pron:"KUN-tree",    example:"Korea is a beautiful country.",         exKo:"한국은 아름다운 나라예요." },
      { en:"live",      ko:"살다",      pron:"LIV",         example:"I live in Seoul.",                      exKo:"저는 서울에 살아요." },
      { en:"student",   ko:"학생",      pron:"STOO-dent",   example:"I am a student. I study English.",      exKo:"저는 학생이에요. 영어를 공부해요." },
      { en:"teacher",   ko:"선생님",    pron:"TEE-cher",    example:"She is my English teacher.",            exKo:"그녀는 제 영어 선생님이에요." },
      { en:"friend",    ko:"친구",      pron:"FREND",       example:"He is my good friend.",                 exKo:"그는 제 좋은 친구예요." },
      { en:"year",      ko:"년 / 살",   pron:"YEER",        example:"I am thirty-five years old.",           exKo:"저는 서른다섯 살이에요." },
      { en:"where",     ko:"어디",      pron:"WAIR",        example:"Where are you from?",                   exKo:"어디에서 오셨나요?" },
      { en:"what",      ko:"무엇",      pron:"WUT",         example:"What is your name?",                    exKo:"이름이 무엇인가요?" },
      { en:"how",       ko:"어떻게",    pron:"HOW",         example:"How are you today?",                    exKo:"오늘 어떻게 지내세요?" }
    ]


  } // end week1

  /* ═══════════════════════════════════════════════
     WEEK 2 — Review + Sentence Structure + Pronouns + Vocab
     Scope: Intermediate learner
  ═══════════════════════════════════════════════ */
  ,week2: {

    vocabulary: [
      { en:"sentence",  ko:"문장",            example:"Please write a complete sentence.",          exKo:"완전한 문장을 써 주세요." },
      { en:"subject",   ko:"주어",            example:"Every English sentence needs a subject.",    exKo:"영어 문장에는 항상 주어가 필요해요." },
      { en:"verb",      ko:"동사",            example:"'Work' and 'study' are verbs.",              exKo:"'일하다'와 '공부하다'는 동사예요." },
      { en:"object",    ko:"목적어",          example:"In 'I like coffee,' coffee is the object.",  exKo:"'I like coffee'에서 coffee가 목적어예요." },
      { en:"pronoun",   ko:"대명사",          example:"He, she, and they are pronouns.",            exKo:"He, she, they는 대명사예요." },
      { en:"always",    ko:"항상",            example:"I always drink coffee in the morning.",      exKo:"저는 항상 아침에 커피를 마셔요." },
      { en:"usually",   ko:"보통",            example:"She usually drives to work.",                exKo:"그녀는 보통 운전해서 출근해요." },
      { en:"sometimes", ko:"때때로",          example:"We sometimes eat at Korean restaurants.",    exKo:"저희는 때때로 한식당에서 먹어요." },
      { en:"often",     ko:"자주",            example:"He often calls his family in Korea.",        exKo:"그는 자주 한국 가족에게 전화해요." },
      { en:"never",     ko:"절대로",          example:"I never miss my English class.",             exKo:"저는 절대로 영어 수업에 빠지지 않아요." },
      { en:"work",      ko:"일하다 / 직장",   example:"Where do you work? I work in Atlanta.",     exKo:"어디서 일하세요? 저는 애틀랜타에서 일해요." },
      { en:"schedule",  ko:"일정",            example:"What is your schedule this week?",          exKo:"이번 주 일정이 어떻게 되세요?" },
      { en:"meeting",   ko:"회의",            example:"I have a meeting at nine o'clock.",         exKo:"저는 9시에 회의가 있어요." },
      { en:"busy",      ko:"바쁜",            example:"I am very busy on Mondays.",                exKo:"저는 월요일마다 매우 바빠요." },
      { en:"tired",     ko:"피곤한",          example:"She is tired after a long day at work.",    exKo:"그녀는 긴 하루 일과 후에 피곤해요." },
      { en:"drive",     ko:"운전하다",        example:"He drives to Norcross every morning.",      exKo:"그는 매일 아침 노크로스로 운전해요." },
      { en:"explain",   ko:"설명하다",        example:"Can you explain that again, please?",       exKo:"다시 설명해 주시겠어요?" },
      { en:"agree",     ko:"동의하다",        example:"I agree with you. That is a good idea.",    exKo:"동의해요. 좋은 생각이에요." },
      { en:"need",      ko:"필요하다",        example:"We need more time to finish this.",         exKo:"이걸 끝내려면 시간이 더 필요해요." },
      { en:"help",      ko:"돕다 / 도움",     example:"Can you help me? I do not understand.",     exKo:"도와주시겠어요? 이해가 안 돼요." },
      { en:"because",   ko:"왜냐하면",        example:"I study hard because I want to improve.",   exKo:"실력을 키우고 싶기 때문에 열심히 공부해요." },
      { en:"but",       ko:"그런데 / 하지만", example:"I want to go, but I am too busy.",          exKo:"가고 싶은데 너무 바빠요." },
      { en:"so",        ko:"그래서",          example:"She was tired, so she went home early.",    exKo:"그녀는 피곤해서 일찍 집에 갔어요." },
      { en:"ready",     ko:"준비된",          example:"Are you ready to start?",                  exKo:"시작할 준비가 됐나요?" },
      { en:"every day", ko:"매일",            example:"I practice English every day.",             exKo:"저는 매일 영어를 연습해요." }
    ],

    pronouns: [
      { subject:"I",    object:"me",   possAdj:"my",    possPron:"mine",   ko:"나/저" },
      { subject:"you",  object:"you",  possAdj:"your",  possPron:"yours",  ko:"당신/너" },
      { subject:"he",   object:"him",  possAdj:"his",   possPron:"his",    ko:"그" },
      { subject:"she",  object:"her",  possAdj:"her",   possPron:"hers",   ko:"그녀" },
      { subject:"it",   object:"it",   possAdj:"its",   possPron:"its",    ko:"그것" },
      { subject:"we",   object:"us",   possAdj:"our",   possPron:"ours",   ko:"우리" },
      { subject:"they", object:"them", possAdj:"their", possPron:"theirs", ko:"그들" }
    ],

    scramble: [
      { ko:"저는 매일 영어를 공부해요.", correct:["I","study","English","every","day"], hint:"S + V + O + Frequency adverb" },
      { ko:"그녀는 병원에서 일하지 않아요.", correct:["She","does","not","work","at","the","hospital"], hint:"She/He/It + does not + base verb" },
      { ko:"오늘 회의가 있어요?", correct:["Do","you","have","a","meeting","today"], hint:"Do/Does + S + V?" },
      { ko:"그는 어디서 일해요?", correct:["Where","does","he","work"], hint:"Wh- word + does + S + V?" },
      { ko:"저는 피곤했어요, 그래서 일찍 집에 갔어요.", correct:["I","was","tired","so","I","went","home","early"], hint:"Use 'so' to connect cause and result" },
      { ko:"당신의 도움이 필요해요.", correct:["I","need","your","help"], hint:"S + V + possessive adjective + noun" },
      { ko:"그녀는 보통 오전 8시에 애틀랜타로 운전해서 출근해요.", correct:["She","usually","drives","to","Atlanta","at","eight","in","the","morning"], hint:"Frequency adverb (usually) comes before the main verb" }
    ],

    errorCorrection: [
      { wrong:"Korean food I like very much.",  right:"I like Korean food very much.",     rule:"영어 어순: 주어 + 동사 + 목적어 (SOV가 아닌 SVO)  /  English is SVO, not SOV like Korean." },
      { wrong:"Is very busy today.",            right:"She is very busy today.",           rule:"영어는 주어를 생략할 수 없어요!  /  English always requires a subject — you cannot drop it!" },
      { wrong:"Give the document to I.",        right:"Give the document to me.",          rule:"전치사 뒤에는 목적격 대명사  /  After prepositions use object pronouns: to me, with him, for her." },
      { wrong:"You are from where?",            right:"Where are you from?",              rule:"의문사는 문장 맨 앞에 와요  /  Question words (where, what, how) always come first." },
      { wrong:"This is she bag.",               right:"This is her bag.",                 rule:"명사 앞에는 소유 형용사  /  Before a noun use possessive adjectives: my, your, his, her, our, their." }
    ],

    pronounFill: [
      { sentence:"___ am a student at the English school.",          options:["I","Me","My"],       answer:"I",    hint:"주어 자리  /  Subject position" },
      { sentence:"Ji-young is my teacher. ___ is very kind.",        options:["He","She","They"],   answer:"She",  hint:"Ji-young은 여성이에요  /  Ji-young is female" },
      { sentence:"My husband works late. I call ___ every evening.", options:["he","him","his"],    answer:"him",  hint:"동사 뒤 목적격  /  Object pronoun after the verb" },
      { sentence:"Please give the form to ___.",                     options:["I","me","my"],       answer:"me",   hint:"'to' 뒤에는 목적격  /  After 'to' use object pronoun" },
      { sentence:"___ teacher explains everything clearly.",         options:["Our","We","Us"],     answer:"Our",  hint:"명사 앞 소유격  /  Possessive adjective before noun" },
      { sentence:"Do you know Ji-ho and Min-jun? ___ are my coworkers.", options:["He","She","They"], answer:"They", hint:"두 사람 이상 → they  /  More than one person → they" },
      { sentence:"I cannot find ___ phone. Have you seen it?",       options:["I","me","my"],       answer:"my",   hint:"'phone' 앞 소유격  /  Possessive adjective before 'phone'" },
      { sentence:"The children are hungry. Can you help ___?",       options:["they","them","their"],answer:"them", hint:"'help' 뒤 목적격  /  Object pronoun after verb" },
      { sentence:"Su-jin is tired today. ___ does not want to work.",options:["He","She","It"],     answer:"She",  hint:"Su-jin은 여성  /  Su-jin is female" },
      { sentence:"___ all study English together every week.",       options:["We","Us","Our"],     answer:"We",   hint:"주어 자리 주격  /  Subject position — subject pronoun" }
    ],

    dialogues: [
      {
        titleKo:"직장 동료 소개받기",
        titleEn:"Being Introduced to a Coworker",
        lines:[
          { speaker:"M", en:"Ji-ho, this is Sarah. She works in our accounting department.", ko:"지호 씨, 사라예요. 우리 회계팀에서 일해요." },
          { speaker:"J", en:"Hi Sarah! Nice to meet you. How long have you worked here?",    ko:"안녕하세요, 사라 씨! 반가워요. 여기서 얼마나 일하셨어요?" },
          { speaker:"S", en:"I have worked here for three years. And you? Is this your first week?", ko:"3년 됐어요. 지호 씨는요? 첫 주예요?" },
          { speaker:"J", en:"Yes, it is! I am still learning the schedule.",                 ko:"네, 맞아요! 아직 일정을 익히는 중이에요." },
          { speaker:"S", en:"Do not worry. Our team always helps new employees.",            ko:"걱정 마세요. 저희 팀은 항상 새 직원을 도와요." },
          { speaker:"J", en:"That is so kind. Thank you, Sarah!",                           ko:"정말 친절하시네요. 감사합니다, 사라 씨!" }
        ]
      },
      {
        titleKo:"일정에 대해 이야기하기",
        titleEn:"Talking About Your Weekly Schedule",
        lines:[
          { speaker:"A", en:"You look tired today. Are you okay?",                          ko:"오늘 피곤해 보여요. 괜찮아요?" },
          { speaker:"B", en:"I am okay, just busy. I usually work until seven on Tuesdays.",ko:"괜찮아요, 그냥 바빠요. 화요일에는 보통 7시까지 일해요." },
          { speaker:"A", en:"That is a long day. Do you always drive home?",                ko:"하루가 기네요. 항상 운전해서 귀가하나요?" },
          { speaker:"B", en:"Yes. I drive from Atlanta to Norcross. It takes about forty minutes.", ko:"네. 애틀랜타에서 노크로스까지 운전해요. 40분쯤 걸려요." },
          { speaker:"A", en:"What does your schedule look like tomorrow?",                  ko:"내일 일정은 어때요?" },
          { speaker:"B", en:"I have a meeting in the morning, but I am free after lunch.",  ko:"오전에 회의가 있는데, 점심 이후에는 시간이 있어요." },
          { speaker:"A", en:"Perfect. Can we meet at two o'clock?",                        ko:"좋아요. 2시에 만날 수 있어요?" },
          { speaker:"B", en:"Yes, I am ready. See you tomorrow!",                          ko:"네, 준비됐어요. 내일 봐요!" }
        ]
      },
      {
        titleKo:"커뮤니티 센터에서 도움 요청하기",
        titleEn:"Asking for Help at the Community Center",
        lines:[
          { speaker:"Y", en:"Excuse me. Can you help me? I need to fill out this form.",    ko:"실례합니다. 도와주시겠어요? 이 양식을 작성해야 해요." },
          { speaker:"S", en:"Of course! What part do you not understand?",                  ko:"물론이죠! 어느 부분을 이해 못 하시겠어요?" },
          { speaker:"Y", en:"It asks for my employer. What does that mean?",               ko:"'employer'를 묻는데요. 그게 무슨 뜻이에요?" },
          { speaker:"S", en:"Your employer is the company or person you work for.",         ko:"'employer'는 당신이 일하는 회사나 고용주예요." },
          { speaker:"Y", en:"Oh, I understand now. So I write the name of my company?",    ko:"아, 이제 이해했어요. 그럼 회사 이름을 쓰면 되나요?" },
          { speaker:"S", en:"Exactly! And in the next line, write your job title.",         ko:"맞아요! 그 다음 줄에는 직책을 쓰세요." },
          { speaker:"Y", en:"Thank you so much. You explained it very clearly.",            ko:"정말 감사합니다. 정말 명확하게 설명해 주셨어요." },
          { speaker:"S", en:"You are welcome. Do not hesitate to ask if you need more help.", ko:"천만에요. 더 도움이 필요하면 주저 말고 물어보세요." }
        ]
      }
    ]


  } // end week2

  /* ═══════════════════════════════════════════════
     WEEK 3 — Review + Be Verbs + Questions + Vocab
     Scope: Intermediate learner
  ═══════════════════════════════════════════════ */
  ,week3: {

    vocabulary: [
      { en:"happy",      ko:"행복한",          example:"I am happy to see you.",                  exKo:"당신을 만나서 행복해요." },
      { en:"sad",        ko:"슬픈",            example:"She is sad because her friend moved away.", exKo:"친구가 이사 가서 그녀는 슬퍼요." },
      { en:"angry",      ko:"화난",            example:"He is angry about the traffic.",          exKo:"그는 교통체증 때문에 화가 났어요." },
      { en:"hungry",     ko:"배고픈",          example:"Are you hungry? Let us eat lunch.",       exKo:"배고프세요? 점심 먹어요." },
      { en:"thirsty",    ko:"목마른",          example:"The children are thirsty after playing.", exKo:"아이들이 놀고 나서 목말라해요." },
      { en:"excited",    ko:"신난 / 들뜬",     example:"We are excited about the trip.",          exKo:"우리는 여행 때문에 들떠 있어요." },
      { en:"worried",    ko:"걱정하는",        example:"My mother is worried about my health.",   exKo:"어머니가 제 건강을 걱정하세요." },
      { en:"sick",       ko:"아픈",            example:"I am sick today, so I cannot come.",      exKo:"오늘 아파서 갈 수 없어요." },
      { en:"married",    ko:"결혼한",          example:"They are married and have two children.", exKo:"그들은 결혼했고 아이가 둘 있어요." },
      { en:"single",     ko:"미혼의",          example:"He is single and lives alone.",           exKo:"그는 미혼이고 혼자 살아요." },
      { en:"early",      ko:"이른 / 일찍",     example:"She is always early for meetings.",       exKo:"그녀는 항상 회의에 일찍 와요." },
      { en:"late",       ko:"늦은 / 늦게",     example:"Sorry, I am late! The bus was slow.",     exKo:"늦어서 죄송해요! 버스가 느렸어요." },
      { en:"right",      ko:"맞는 / 옳은",     example:"You are right. That is the correct answer.", exKo:"맞아요. 그게 정답이에요." },
      { en:"wrong",      ko:"틀린",            example:"This address is wrong. Let me check it.", exKo:"이 주소는 틀려요. 확인해 볼게요." },
      { en:"open",       ko:"열린 / 영업 중인", example:"Is the store open on Sundays?",          exKo:"그 가게는 일요일에 열어요?" },
      { en:"closed",     ko:"닫힌",            example:"The bank is closed right now.",           exKo:"은행은 지금 닫혀 있어요." },
      { en:"expensive",  ko:"비싼",            example:"This restaurant is too expensive.",       exKo:"이 식당은 너무 비싸요." },
      { en:"cheap",      ko:"싼",              example:"That market is cheap and very good.",     exKo:"저 시장은 싸고 아주 좋아요." },
      { en:"beautiful",  ko:"아름다운",        example:"Atlanta is beautiful in the spring.",     exKo:"애틀랜타는 봄에 아름다워요." },
      { en:"difficult",  ko:"어려운",          example:"English grammar is difficult but fun.",   exKo:"영어 문법은 어렵지만 재미있어요." },
      { en:"easy",       ko:"쉬운",            example:"This exercise is easy for me now.",       exKo:"이 연습은 이제 저에게 쉬워요." },
      { en:"important",  ko:"중요한",          example:"It is important to practice every day.",  exKo:"매일 연습하는 것이 중요해요." },
      { en:"afraid",     ko:"두려운 / 무서운", example:"Do not be afraid to make mistakes.",     exKo:"실수하는 것을 두려워하지 마세요." },
      { en:"sure",       ko:"확신하는",        example:"Are you sure? I think you are correct.",  exKo:"확실해요? 당신이 맞는 것 같아요." },
      { en:"available",  ko:"시간이 되는 / 이용 가능한", example:"Is the doctor available this afternoon?", exKo:"의사 선생님이 오늘 오후에 시간이 되세요?" }
    ],

    /* ── Be-verb conjugation reference ───────── */
    beVerbs: [
      { subject:"I",         be:"am",  contraction:"I'm",     negative:"I'm not",      ko:"나는 ~이다" },
      { subject:"You",       be:"are", contraction:"You're",  negative:"You aren't",   ko:"너는 ~이다" },
      { subject:"He",        be:"is",  contraction:"He's",    negative:"He isn't",     ko:"그는 ~이다" },
      { subject:"She",       be:"is",  contraction:"She's",   negative:"She isn't",    ko:"그녀는 ~이다" },
      { subject:"It",        be:"is",  contraction:"It's",    negative:"It isn't",     ko:"그것은 ~이다" },
      { subject:"We",        be:"are", contraction:"We're",   negative:"We aren't",    ko:"우리는 ~이다" },
      { subject:"They",      be:"are", contraction:"They're", negative:"They aren't",  ko:"그들은 ~이다" }
    ],

    /* ── Be-verb fill-in (am/is/are) ─────────── */
    beFill: [
      { sentence:"I ___ a student at the English school.",         answer:"am",  hint:"I → am" },
      { sentence:"She ___ very busy on Mondays.",                  answer:"is",  hint:"She → is" },
      { sentence:"They ___ my coworkers from the restaurant.",     answer:"are", hint:"They → are" },
      { sentence:"My name ___ Ji-ho. Nice to meet you.",           answer:"is",  hint:"name (one thing) → is" },
      { sentence:"We ___ from South Korea.",                       answer:"are", hint:"We → are" },
      { sentence:"He ___ a kind and patient teacher.",             answer:"is",  hint:"He → is" },
      { sentence:"You ___ right! That is the correct answer.",     answer:"are", hint:"You → are" },
      { sentence:"The bank ___ closed on Sundays.",                answer:"is",  hint:"The bank (one thing) → is" },
      { sentence:"My children ___ at school right now.",           answer:"are", hint:"children (plural) → are" },
      { sentence:"It ___ important to practice every day.",        answer:"is",  hint:"It → is" }
    ],

    /* ── Question transformation (statement -> question) */
    questionTransform: [
      { statement:"She is a nurse.",            question:"Is she a nurse?",            ko:"그녀는 간호사예요. → 그녀는 간호사예요?" },
      { statement:"They are ready.",            question:"Are they ready?",            ko:"그들은 준비됐어요. → 그들은 준비됐어요?" },
      { statement:"You are from Busan.",        question:"Are you from Busan?",        ko:"당신은 부산에서 왔어요. → 부산에서 왔어요?" },
      { statement:"He is at work now.",         question:"Is he at work now?",         ko:"그는 지금 직장에 있어요. → 그는 지금 직장에 있어요?" },
      { statement:"The store is open today.",   question:"Is the store open today?",   ko:"가게는 오늘 열려 있어요. → 가게는 오늘 열려 있어요?" }
    ],

    /* ── Wh-question matching (question -> answer) */
    whQuestions: [
      { q:"What is your name?",        a:"My name is Min-jun.",            wh:"What" },
      { q:"Where are you from?",       a:"I am from South Korea.",         wh:"Where" },
      { q:"How are you today?",        a:"I am fine, thank you.",          wh:"How" },
      { q:"Who is your teacher?",      a:"Ji-young is my teacher.",        wh:"Who" },
      { q:"When is the meeting?",      a:"It is at three o'clock.",        wh:"When" },
      { q:"Why are you happy?",        a:"Because today is my birthday.",  wh:"Why" }
    ],

    /* ── Short answer practice ───────────────── */
    shortAnswers: [
      { question:"Are you a teacher?",          yes:"Yes, I am.",       no:"No, I am not." },
      { question:"Is she from Korea?",          yes:"Yes, she is.",     no:"No, she isn't." },
      { question:"Are they married?",           yes:"Yes, they are.",   no:"No, they aren't." },
      { question:"Is the store open?",          yes:"Yes, it is.",      no:"No, it isn't." },
      { question:"Are you ready?",              yes:"Yes, I am.",       no:"No, I'm not." }
    ],

    dialogues: [
      {
        titleKo:"새 직장에서 자기소개",
        titleEn:"Introducing Yourself at a New Job",
        lines:[
          { speaker:"M", en:"Welcome! You are the new team member, right?",          ko:"환영해요! 새 팀원이시죠?" },
          { speaker:"Y", en:"Yes, I am. My name is Soo-jin. I am happy to be here.", ko:"네, 맞아요. 제 이름은 수진이에요. 여기서 일하게 되어 기뻐요." },
          { speaker:"M", en:"Where are you from, Soo-jin?",                          ko:"수진 씨, 어디서 오셨어요?" },
          { speaker:"Y", en:"I am from South Korea, but I live in Norcross now.",    ko:"한국에서 왔는데, 지금은 노크로스에 살아요." },
          { speaker:"M", en:"Wonderful. Are you ready for your first day?",          ko:"좋아요. 첫날 준비됐어요?" },
          { speaker:"Y", en:"Yes, I am! I am a little nervous, but very excited.",   ko:"네! 조금 긴장되지만 아주 신나요." },
          { speaker:"M", en:"Do not worry. Everyone here is friendly and helpful.",  ko:"걱정 마세요. 여기 사람들은 모두 친절하고 잘 도와줘요." }
        ]
      },
      {
        titleKo:"병원 예약 확인하기",
        titleEn:"Confirming a Doctor's Appointment",
        lines:[
          { speaker:"R", en:"Good morning. Is this your first visit?",              ko:"좋은 아침이에요. 첫 방문이신가요?" },
          { speaker:"P", en:"Yes, it is. I have an appointment at ten o'clock.",    ko:"네, 맞아요. 10시에 예약이 있어요." },
          { speaker:"R", en:"What is your name, please?",                           ko:"성함이 어떻게 되세요?" },
          { speaker:"P", en:"My name is Park Min-ho. P-A-R-K.",                     ko:"제 이름은 박민호예요. P-A-R-K." },
          { speaker:"R", en:"Thank you. Are you the patient, or is it for someone else?", ko:"감사합니다. 본인이세요, 아니면 다른 분을 위한 건가요?" },
          { speaker:"P", en:"It is for me. I am not feeling well today.",           ko:"저를 위한 거예요. 오늘 몸이 안 좋아요." },
          { speaker:"R", en:"I am sorry to hear that. The doctor is available now. Please come this way.", ko:"안타깝네요. 의사 선생님이 지금 시간 되세요. 이쪽으로 오세요." }
        ]
      },
      {
        titleKo:"가게에서 가격 물어보기",
        titleEn:"Asking About Prices at a Store",
        lines:[
          { speaker:"C", en:"Excuse me, is this jacket on sale?",                   ko:"실례합니다, 이 재킷 세일 중인가요?" },
          { speaker:"S", en:"Yes, it is. It is thirty percent off today.",          ko:"네, 맞아요. 오늘 30% 할인이에요." },
          { speaker:"C", en:"That is a good price. Is it available in blue?",        ko:"좋은 가격이네요. 파란색도 있나요?" },
          { speaker:"S", en:"Let me check. Yes, we have blue and black.",           ko:"확인해 볼게요. 네, 파란색과 검은색이 있어요." },
          { speaker:"C", en:"How much is it with the discount?",                    ko:"할인하면 얼마예요?" },
          { speaker:"S", en:"It is forty dollars now. Are you ready to buy it?",    ko:"지금은 40달러예요. 구매하시겠어요?" },
          { speaker:"C", en:"Yes, I am. Thank you for your help!",                  ko:"네. 도와주셔서 감사합니다!" }
        ]
      }
    ]


  } // end week3

  /* ═══════════════════════════════════════════════
     WEEK 4 — Review + Present Simple Tense + Vocab
     Scope: Intermediate learner
  ═══════════════════════════════════════════════ */
  ,week4: {

    vocabulary: [
      { en:"wake up",    ko:"일어나다",        example:"I wake up at six every morning.",          exKo:"저는 매일 아침 6시에 일어나요." },
      { en:"get up",     ko:"기상하다",        example:"She gets up early on weekdays.",           exKo:"그녀는 평일에 일찍 기상해요." },
      { en:"eat",        ko:"먹다",            example:"We eat breakfast together every day.",     exKo:"우리는 매일 함께 아침을 먹어요." },
      { en:"drink",      ko:"마시다",          example:"He drinks two cups of coffee each morning.", exKo:"그는 매일 아침 커피 두 잔을 마셔요." },
      { en:"go",         ko:"가다",            example:"They go to work by car.",                 exKo:"그들은 차로 출근해요." },
      { en:"come",       ko:"오다",            example:"My friend comes to class on Saturdays.",   exKo:"제 친구는 토요일마다 수업에 와요." },
      { en:"work",       ko:"일하다",          example:"She works at a hospital in Atlanta.",      exKo:"그녀는 애틀랜타의 병원에서 일해요." },
      { en:"study",      ko:"공부하다",        example:"I study English three times a week.",      exKo:"저는 일주일에 세 번 영어를 공부해요." },
      { en:"live",       ko:"살다",            example:"We live in Gwinnett County.",             exKo:"우리는 귀넷 카운티에 살아요." },
      { en:"like",       ko:"좋아하다",        example:"He likes Korean and American food.",       exKo:"그는 한식과 미국 음식을 좋아해요." },
      { en:"want",       ko:"원하다",          example:"I want to speak English fluently.",        exKo:"저는 영어를 유창하게 하고 싶어요." },
      { en:"need",       ko:"필요하다",        example:"She needs a new phone for work.",          exKo:"그녀는 일을 위해 새 전화기가 필요해요." },
      { en:"have",       ko:"가지다 / 있다",   example:"They have two children.",                 exKo:"그들은 아이가 둘 있어요." },
      { en:"watch",      ko:"보다 (시청)",     example:"I watch the news every evening.",          exKo:"저는 매일 저녁 뉴스를 봐요." },
      { en:"read",       ko:"읽다",            example:"He reads a book before bed.",             exKo:"그는 자기 전에 책을 읽어요." },
      { en:"cook",       ko:"요리하다",        example:"My mother cooks dinner for the family.",   exKo:"어머니가 가족을 위해 저녁을 요리하세요." },
      { en:"clean",      ko:"청소하다",        example:"We clean the house on weekends.",          exKo:"우리는 주말에 집을 청소해요." },
      { en:"shop",       ko:"쇼핑하다 / 장보다", example:"She shops for groceries on Fridays.",    exKo:"그녀는 금요일마다 장을 봐요." },
      { en:"exercise",   ko:"운동하다",        example:"I exercise at the gym three days a week.", exKo:"저는 일주일에 사흘 헬스장에서 운동해요." },
      { en:"sleep",      ko:"자다",            example:"He sleeps eight hours every night.",       exKo:"그는 매일 밤 8시간 자요." },
      { en:"start",      ko:"시작하다",        example:"My class starts at nine o'clock.",        exKo:"제 수업은 9시에 시작해요." },
      { en:"finish",     ko:"끝내다",          example:"She finishes work at five.",              exKo:"그녀는 5시에 일을 끝내요." },
      { en:"speak",      ko:"말하다",          example:"They speak Korean at home.",              exKo:"그들은 집에서 한국어를 써요." },
      { en:"understand", ko:"이해하다",        example:"I understand the lesson now.",            exKo:"저는 이제 그 수업을 이해해요." },
      { en:"every week", ko:"매주",            example:"We meet every week to practice.",          exKo:"우리는 연습하려고 매주 만나요." }
    ],

    /* ── Present simple conjugation (the -s rule) ── */
    conjugation: [
      { subject:"I",    form:"work",   note:"기본형 base form",        ko:"나는 일한다" },
      { subject:"You",  form:"work",   note:"기본형 base form",        ko:"너는 일한다" },
      { subject:"He",   form:"works",  note:"+s",                      ko:"그는 일한다" },
      { subject:"She",  form:"works",  note:"+s",                      ko:"그녀는 일한다" },
      { subject:"It",   form:"works",  note:"+s",                      ko:"그것은 작동한다" },
      { subject:"We",   form:"work",   note:"기본형 base form",        ko:"우리는 일한다" },
      { subject:"They", form:"work",   note:"기본형 base form",        ko:"그들은 일한다" }
    ],

    /* ── Spelling rules for he/she/it +s ──────── */
    spellingRules: [
      { rule:"대부분의 동사: +s",            ruleEn:"Most verbs: add -s",                 base:"work",  third:"works"  },
      { rule:"-o, -ch, -sh, -ss, -x: +es",  ruleEn:"After -o, -ch, -sh, -ss, -x: add -es", base:"watch", third:"watches" },
      { rule:"자음 + y: y를 i로 바꾸고 +es", ruleEn:"Consonant + y: change y to i, add -es", base:"study", third:"studies" },
      { rule:"불규칙: have -> has",          ruleEn:"Irregular: have becomes has",        base:"have",  third:"has"    }
    ],

    /* ── Conjugation fill (choose base or +s) ── */
    conjFill: [
      { subject:"She",  verb:"work",  options:["work","works"],   answer:"works",  hint:"She -> +s" },
      { subject:"I",    verb:"study", options:["study","studies"],answer:"study",  hint:"I -> base form" },
      { subject:"He",   verb:"watch", options:["watch","watches"],answer:"watches",hint:"He + watch -> +es" },
      { subject:"They", verb:"live",  options:["live","lives"],   answer:"live",   hint:"They -> base form" },
      { subject:"My mother", verb:"cook", options:["cook","cooks"], answer:"cooks", hint:"mother = she -> +s" },
      { subject:"We",   verb:"speak", options:["speak","speaks"], answer:"speak",  hint:"We -> base form" },
      { subject:"The class", verb:"start", options:["start","starts"], answer:"starts", hint:"class = it -> +s" },
      { subject:"You",  verb:"need",  options:["need","needs"],   answer:"need",   hint:"You -> base form" },
      { subject:"He",   verb:"have",  options:["have","has"],     answer:"has",    hint:"have is irregular -> has" },
      { subject:"She",  verb:"finish",options:["finish","finishes"], answer:"finishes", hint:"She + finish -> +es" }
    ],

    /* ── Negative & question transform ────────── */
    negQuestion: [
      { positive:"I work on Saturdays.",          negative:"I do not work on Saturdays.",        question:"Do you work on Saturdays?" },
      { positive:"She likes coffee.",             negative:"She does not like coffee.",          question:"Does she like coffee?" },
      { positive:"They live in Norcross.",        negative:"They do not live in Norcross.",      question:"Do they live in Norcross?" },
      { positive:"He studies every night.",       negative:"He does not study every night.",     question:"Does he study every night?" },
      { positive:"We cook dinner at home.",       negative:"We do not cook dinner at home.",     question:"Do you cook dinner at home?" }
    ],

    dialogues: [
      {
        titleKo:"일상에 대해 이야기하기",
        titleEn:"Talking About Daily Routines",
        lines:[
          { speaker:"A", en:"What time do you wake up every morning?",            ko:"매일 아침 몇 시에 일어나세요?" },
          { speaker:"B", en:"I usually wake up at six. I drink coffee and read the news.", ko:"보통 6시에 일어나요. 커피를 마시고 뉴스를 읽어요." },
          { speaker:"A", en:"That is early! Do you exercise in the morning too?",  ko:"이르네요! 아침에 운동도 하세요?" },
          { speaker:"B", en:"No, I do not. I exercise after work. What about you?", ko:"아니요. 저는 퇴근 후에 운동해요. 당신은요?" },
          { speaker:"A", en:"I go to the gym before work. Then I start work at nine.", ko:"저는 출근 전에 헬스장에 가요. 그리고 9시에 일을 시작해요." },
          { speaker:"B", en:"You have a busy schedule! Do you cook at home?",      ko:"바쁜 일정이네요! 집에서 요리하세요?" },
          { speaker:"A", en:"Yes, I cook dinner every evening. I really enjoy it.", ko:"네, 매일 저녁을 요리해요. 정말 즐거워요." }
        ]
      },
      {
        titleKo:"새 동료에 대해 묻기",
        titleEn:"Asking About a New Coworker",
        lines:[
          { speaker:"A", en:"Do you know the new employee, Soo-jin?",             ko:"새 직원 수진 씨를 아세요?" },
          { speaker:"B", en:"Yes, I do. She works in the kitchen with me.",       ko:"네, 알아요. 저랑 같이 주방에서 일해요." },
          { speaker:"A", en:"Where does she live?",                               ko:"그녀는 어디에 살아요?" },
          { speaker:"B", en:"She lives in Norcross. She drives to work every day.", ko:"노크로스에 살아요. 매일 운전해서 출근해요." },
          { speaker:"A", en:"Does she speak English well?",                       ko:"영어를 잘하세요?" },
          { speaker:"B", en:"She speaks a little, and she studies every night. She learns fast!", ko:"조금 하고, 매일 밤 공부해요. 빨리 배워요!" },
          { speaker:"A", en:"That is wonderful. She sounds like a hard worker.",  ko:"훌륭하네요. 성실한 분 같아요." }
        ]
      },
      {
        titleKo:"식당에서 주문하기",
        titleEn:"Ordering at a Restaurant",
        lines:[
          { speaker:"S", en:"Good evening! Do you need a few more minutes?",      ko:"안녕하세요! 시간이 더 필요하세요?" },
          { speaker:"C", en:"No, we are ready. My husband wants the bulgogi.",    ko:"아니요, 준비됐어요. 남편은 불고기를 원해요." },
          { speaker:"S", en:"Great choice. And what do you want?",                ko:"좋은 선택이세요. 손님은 뭘 원하세요?" },
          { speaker:"C", en:"I want the bibimbap, please. Does it come with soup?", ko:"비빔밥 주세요. 국이 같이 나오나요?" },
          { speaker:"S", en:"Yes, it does. It comes with miso soup and rice.",    ko:"네, 그래요. 된장국과 밥이 같이 나와요." },
          { speaker:"C", en:"Perfect. We also need two glasses of water.",        ko:"좋아요. 물 두 잔도 필요해요." },
          { speaker:"S", en:"Of course. I will bring everything right away.",     ko:"물론이죠. 바로 전부 가져다드릴게요." }
        ]
      }
    ]


  } // end week4

  /* ═══════════════════════════════════════════════
     WEEK 5 — Review + Articles + Plurals + Vocab
     Scope: Intermediate; vocab tailored for first-time
     traveler to Los Angeles
  ═══════════════════════════════════════════════ */
  ,week5: {

    vocabulary: [
      { en:"airport",     ko:"공항",            example:"LAX is a very big airport.",                exKo:"LAX는 아주 큰 공항이에요." },
      { en:"flight",      ko:"항공편 / 비행",    example:"My flight to Los Angeles is at noon.",      exKo:"로스앤젤레스행 제 항공편은 정오예요." },
      { en:"luggage",     ko:"수하물 / 짐",      example:"I have two pieces of luggage.",            exKo:"저는 짐이 두 개 있어요." },
      { en:"passport",    ko:"여권",            example:"Please show me your passport.",            exKo:"여권을 보여 주세요." },
      { en:"ticket",      ko:"표 / 티켓",        example:"Do you have a ticket for the bus?",        exKo:"버스 표가 있으세요?" },
      { en:"hotel",       ko:"호텔",            example:"The hotel is near the beach.",             exKo:"그 호텔은 해변 근처에 있어요." },
      { en:"reservation", ko:"예약",            example:"I have a reservation for two nights.",     exKo:"저는 2박 예약이 있어요." },
      { en:"beach",       ko:"해변",            example:"Santa Monica Beach is beautiful.",         exKo:"산타모니카 해변은 아름다워요." },
      { en:"freeway",     ko:"고속도로",        example:"The freeways in LA are always busy.",      exKo:"LA의 고속도로는 항상 붐벼요." },
      { en:"taxi",        ko:"택시",            example:"Let us take a taxi to the hotel.",         exKo:"택시를 타고 호텔에 가요." },
      { en:"map",         ko:"지도",            example:"I need a map of the city.",               exKo:"도시 지도가 필요해요." },
      { en:"ticket counter", ko:"매표소 / 카운터", example:"The ticket counter is on the left.",     exKo:"매표소는 왼쪽에 있어요." },
      { en:"tourist",     ko:"관광객",          example:"Many tourists visit Hollywood.",          exKo:"많은 관광객이 할리우드를 방문해요." },
      { en:"sightseeing", ko:"관광",            example:"We go sightseeing every day.",             exKo:"우리는 매일 관광을 해요." },
      { en:"restaurant",  ko:"식당",            example:"There are many restaurants downtown.",     exKo:"시내에 식당이 많이 있어요." },
      { en:"museum",      ko:"박물관 / 미술관",  example:"The Getty is a famous museum in LA.",      exKo:"게티는 LA의 유명한 미술관이에요." },
      { en:"ticket price", ko:"입장료 / 가격",  example:"What is the ticket price for the museum?", exKo:"박물관 입장료가 얼마예요?" },
      { en:"downtown",    ko:"시내 / 중심가",    example:"Our hotel is in downtown Los Angeles.",    exKo:"우리 호텔은 로스앤젤레스 시내에 있어요." },
      { en:"directions",  ko:"길 안내",          example:"Can you give me directions to the pier?",  exKo:"부두로 가는 길을 알려 주시겠어요?" },
      { en:"subway",      ko:"지하철",          example:"The subway is cheaper than a taxi.",       exKo:"지하철이 택시보다 싸요." },
      { en:"neighborhood",ko:"동네 / 지역",     example:"Venice is a fun neighborhood to visit.",   exKo:"베니스는 방문하기 즐거운 동네예요." },
      { en:"ocean",       ko:"바다 / 대양",      example:"You can see the ocean from the hotel.",    exKo:"호텔에서 바다를 볼 수 있어요." },
      { en:"sunglasses",  ko:"선글라스",        example:"I always wear sunglasses in California.",  exKo:"저는 캘리포니아에서 항상 선글라스를 껴요." },
      { en:"souvenir",    ko:"기념품",          example:"I want to buy a souvenir for my family.",  exKo:"가족을 위해 기념품을 사고 싶어요." },
      { en:"weather",     ko:"날씨",            example:"The weather in LA is sunny and warm.",     exKo:"LA의 날씨는 맑고 따뜻해요." }
    ],

    /* ── Articles a / an / the ─────────────────── */
    articleRules: [
      { article:"a",   ruleKo:"자음 소리로 시작하는 단어 앞",         ruleEn:"Before a consonant sound", example:"a hotel, a taxi, a map" },
      { article:"an",  ruleKo:"모음 소리(a,e,i,o,u)로 시작하는 단어 앞", ruleEn:"Before a vowel sound",   example:"an airport, an ocean, an umbrella" },
      { article:"the", ruleKo:"특정한 것, 이미 아는 것 앞",            ruleEn:"For specific or known things", example:"the beach, the hotel we booked" },
      { article:"(none)", ruleKo:"일반적인 복수/불가산 명사 앞",       ruleEn:"No article for general plurals", example:"I like beaches. Tourists visit LA." }
    ],

    /* ── Article fill (a/an/the) ───────────────── */
    articleFill: [
      { sentence:"I need ___ taxi to the airport.",           options:["a","an","the"], answer:"a",   hint:"taxi = 자음 소리 -> a" },
      { sentence:"LAX is ___ airport in Los Angeles.",        options:["a","an","the"], answer:"an",  hint:"airport = 모음 소리 -> an" },
      { sentence:"Can you show me ___ way to the beach?",     options:["a","an","the"], answer:"the", hint:"특정한 길 -> the" },
      { sentence:"We have ___ reservation at a hotel.",       options:["a","an","the"], answer:"a",   hint:"reservation = 자음 소리 -> a" },
      { sentence:"She wants ___ umbrella for the rain.",      options:["a","an","the"], answer:"an",  hint:"umbrella = 모음 소리 -> an" },
      { sentence:"___ weather in LA is usually sunny.",       options:["A","An","The"], answer:"The", hint:"특정한 것(LA의 날씨) -> the" },
      { sentence:"I bought ___ souvenir at the museum.",      options:["a","an","the"], answer:"a",   hint:"souvenir = 자음 소리 -> a" },
      { sentence:"There is ___ ocean view from our room.",    options:["a","an","the"], answer:"an",  hint:"ocean = 모음 소리 -> an" },
      { sentence:"Let us visit ___ Getty Museum today.",      options:["a","an","the"], answer:"the", hint:"특정한 장소 이름 -> the" },
      { sentence:"He needs ___ map of downtown LA.",          options:["a","an","the"], answer:"a",   hint:"map = 자음 소리 -> a" }
    ],

    /* ── Plural rules ──────────────────────────── */
    pluralRules: [
      { ruleKo:"대부분의 명사: +s",          ruleEn:"Most nouns: add -s",                 singular:"hotel",  plural:"hotels"   },
      { ruleKo:"-s, -ch, -sh, -x, -z: +es",  ruleEn:"After -s, -ch, -sh, -x, -z: add -es", singular:"beach",  plural:"beaches"  },
      { ruleKo:"자음 + y: y를 i로 바꾸고 +es", ruleEn:"Consonant + y: change y to i, add -es", singular:"city", plural:"cities" },
      { ruleKo:"-f, -fe: f를 v로 바꾸고 +es",  ruleEn:"-f / -fe: change to v, add -es",     singular:"knife",  plural:"knives"   },
      { ruleKo:"불규칙 명사",                ruleEn:"Irregular plurals",                  singular:"child",  plural:"children" }
    ],

    /* ── Irregular plurals reference ───────────── */
    irregularPlurals: [
      { singular:"man",    plural:"men",      ko:"남자" },
      { singular:"woman",  plural:"women",    ko:"여자" },
      { singular:"child",  plural:"children", ko:"아이" },
      { singular:"foot",   plural:"feet",     ko:"발" },
      { singular:"tooth",  plural:"teeth",    ko:"이/치아" },
      { singular:"person", plural:"people",   ko:"사람" }
    ],

    /* ── Plural fill ───────────────────────────── */
    pluralFill: [
      { singular:"hotel",      options:["hotels","hoteles"],       answer:"hotels",     hint:"대부분: +s" },
      { singular:"beach",      options:["beachs","beaches"],       answer:"beaches",    hint:"-ch: +es" },
      { singular:"city",       options:["citys","cities"],         answer:"cities",     hint:"자음+y: -ies" },
      { singular:"taxi",       options:["taxis","taxies"],         answer:"taxis",      hint:"모음+i: +s" },
      { singular:"bus",        options:["buss","buses"],           answer:"buses",      hint:"-s: +es" },
      { singular:"child",      options:["childs","children"],      answer:"children",   hint:"불규칙" },
      { singular:"museum",     options:["museums","museumes"],     answer:"museums",    hint:"대부분: +s" },
      { singular:"person",     options:["persons","people"],       answer:"people",     hint:"불규칙: people" },
      { singular:"sandwich",   options:["sandwichs","sandwiches"], answer:"sandwiches", hint:"-ch: +es" },
      { singular:"ticket",     options:["tickets","ticketes"],     answer:"tickets",    hint:"대부분: +s" }
    ],

    dialogues: [
      {
        titleKo:"공항 도착 - 입국 심사",
        titleEn:"Arriving at the Airport - Immigration",
        lines:[
          { speaker:"O", en:"Welcome to Los Angeles. May I see your passport, please?",   ko:"로스앤젤레스에 오신 것을 환영합니다. 여권을 보여 주시겠어요?" },
          { speaker:"T", en:"Yes, here is my passport.",                                  ko:"네, 여기 제 여권이에요." },
          { speaker:"O", en:"What is the purpose of your trip?",                          ko:"여행 목적이 무엇인가요?" },
          { speaker:"T", en:"I am a tourist. I am here for sightseeing.",                 ko:"저는 관광객이에요. 관광하러 왔어요." },
          { speaker:"O", en:"How many days do you stay?",                                ko:"며칠 머무르세요?" },
          { speaker:"T", en:"I stay for seven days. I have a reservation at a hotel.",    ko:"7일 머물러요. 호텔에 예약이 있어요." },
          { speaker:"O", en:"Great. Enjoy the beaches and the museums!",                 ko:"좋아요. 해변과 박물관을 즐기세요!" },
          { speaker:"T", en:"Thank you very much!",                                       ko:"정말 감사합니다!" }
        ]
      },
      {
        titleKo:"호텔 체크인",
        titleEn:"Checking In at the Hotel",
        lines:[
          { speaker:"R", en:"Good afternoon! Do you have a reservation?",                ko:"안녕하세요! 예약하셨나요?" },
          { speaker:"G", en:"Yes, I have a reservation for two nights.",                 ko:"네, 2박 예약이 있어요." },
          { speaker:"R", en:"What is your name, please?",                                ko:"성함이 어떻게 되세요?" },
          { speaker:"G", en:"My name is Kim Soo-jin. K-I-M.",                            ko:"제 이름은 김수진이에요. K-I-M." },
          { speaker:"R", en:"Thank you. Here is your key. The room has an ocean view.",  ko:"감사합니다. 여기 열쇠예요. 방에서 바다가 보여요." },
          { speaker:"G", en:"Wonderful! Is there a map of the city?",                    ko:"좋아요! 도시 지도가 있나요?" },
          { speaker:"R", en:"Yes, the maps are at the front desk. Enjoy your stay!",     ko:"네, 지도는 프런트에 있어요. 즐거운 시간 보내세요!" }
        ]
      },
      {
        titleKo:"길 물어보기 - 산타모니카",
        titleEn:"Asking for Directions - Santa Monica",
        lines:[
          { speaker:"T", en:"Excuse me, can you give me directions to the beach?",       ko:"실례합니다, 해변으로 가는 길을 알려 주시겠어요?" },
          { speaker:"L", en:"Of course! Are you a tourist?",                             ko:"물론이죠! 관광객이세요?" },
          { speaker:"T", en:"Yes, I am. It is my first time in Los Angeles.",            ko:"네, 맞아요. LA는 처음이에요." },
          { speaker:"L", en:"Walk two blocks and turn left. The beach is right there.",  ko:"두 블록 걸어가서 왼쪽으로 도세요. 해변이 바로 거기 있어요." },
          { speaker:"T", en:"Is it far? Should I take a taxi?",                          ko:"멀어요? 택시를 타야 할까요?" },
          { speaker:"L", en:"No, it is close. You can walk. The weather is nice today.", ko:"아니요, 가까워요. 걸어가실 수 있어요. 오늘 날씨가 좋네요." },
          { speaker:"T", en:"Thank you so much for your help!",                          ko:"도와주셔서 정말 감사합니다!" }
        ]
      }
    ]


  } // end week5

  /* ═══════════════════════════════════════════════
     WEEK 6 — Review + Numbers / Time / Dates + Vocab
     Research: Korean 에 -> English at/on/in (one particle,
     three prepositions). #1 error for Korean learners.
  ═══════════════════════════════════════════════ */
  ,week6: {

    vocabulary: [
      { en:"o'clock",     ko:"정각",          example:"The class starts at nine o'clock.",       exKo:"수업은 9시 정각에 시작해요." },
      { en:"half past",   ko:"~시 30분 (반)",  example:"It is half past six.",                    exKo:"6시 30분(반)이에요." },
      { en:"quarter past",ko:"~시 15분",       example:"It is a quarter past two.",               exKo:"2시 15분이에요." },
      { en:"quarter to",  ko:"~시 15분 전",    example:"It is a quarter to five.",                exKo:"5시 15분 전(4시 45분)이에요." },
      { en:"minute",      ko:"분",            example:"Please wait ten minutes.",                exKo:"10분만 기다려 주세요." },
      { en:"hour",        ko:"시간",          example:"The flight takes five hours.",            exKo:"비행은 5시간 걸려요." },
      { en:"noon",        ko:"정오 / 낮 12시", example:"Let us meet at noon for lunch.",          exKo:"점심 먹게 정오에 만나요." },
      { en:"midnight",    ko:"자정 / 밤 12시", example:"The store closes at midnight.",           exKo:"가게는 자정에 닫아요." },
      { en:"in the morning", ko:"아침에 / 오전에", example:"I exercise in the morning.",          exKo:"저는 아침에 운동해요." },
      { en:"in the afternoon", ko:"오후에",    example:"We have a meeting in the afternoon.",     exKo:"오후에 회의가 있어요." },
      { en:"in the evening", ko:"저녁에",      example:"They watch TV in the evening.",           exKo:"그들은 저녁에 TV를 봐요." },
      { en:"at night",    ko:"밤에",          example:"I read a book at night.",                exKo:"저는 밤에 책을 읽어요." },
      { en:"today",       ko:"오늘",          example:"Today is a beautiful day.",               exKo:"오늘은 아름다운 날이에요." },
      { en:"tomorrow",    ko:"내일",          example:"I have an appointment tomorrow.",         exKo:"저는 내일 예약이 있어요." },
      { en:"yesterday",   ko:"어제",          example:"Yesterday was very busy.",                exKo:"어제는 매우 바빴어요." },
      { en:"week",        ko:"주 / 일주일",    example:"I study English three times a week.",     exKo:"저는 일주일에 세 번 영어를 공부해요." },
      { en:"month",       ko:"달 / 월",        example:"My birthday is next month.",              exKo:"제 생일은 다음 달이에요." },
      { en:"year",        ko:"년 / 해",        example:"We move to a new house this year.",       exKo:"우리는 올해 새 집으로 이사해요." },
      { en:"weekend",     ko:"주말",          example:"I relax on the weekend.",                 exKo:"저는 주말에 쉬어요." },
      { en:"weekday",     ko:"평일",          example:"She works on weekdays.",                  exKo:"그녀는 평일에 일해요." },
      { en:"birthday",    ko:"생일",          example:"When is your birthday?",                  exKo:"생일이 언제예요?" },
      { en:"appointment", ko:"약속 / 예약",    example:"I have a doctor's appointment at three.", exKo:"저는 3시에 병원 예약이 있어요." },
      { en:"date",        ko:"날짜",          example:"What is the date today?",                 exKo:"오늘 며칠이에요?" },
      { en:"schedule",    ko:"일정",          example:"My schedule is full this week.",          exKo:"이번 주는 일정이 꽉 찼어요." },
      { en:"calendar",    ko:"달력",          example:"I write my appointments on a calendar.",  exKo:"저는 달력에 약속을 적어요." },
      { en:"on time",     ko:"제시간에",       example:"The bus arrived on time.",               exKo:"버스가 제시간에 도착했어요." },
      { en:"early",       ko:"일찍",          example:"Please come early tomorrow.",             exKo:"내일 일찍 와 주세요." },
      { en:"late",        ko:"늦게",          example:"He is often late for work.",              exKo:"그는 자주 직장에 늦어요." },
      { en:"in a hurry",  ko:"서둘러 / 급히",  example:"Sorry, I am in a hurry right now.",       exKo:"죄송해요, 지금 좀 급해요." }
    ],

    numbers: [
      { num:"1", word:"one", ko:"하나" },{ num:"2", word:"two", ko:"둘" },{ num:"3", word:"three", ko:"셋" },
      { num:"4", word:"four", ko:"넷" },{ num:"5", word:"five", ko:"다섯" },{ num:"6", word:"six", ko:"여섯" },
      { num:"7", word:"seven", ko:"일곱" },{ num:"8", word:"eight", ko:"여덟" },{ num:"9", word:"nine", ko:"아홉" },
      { num:"10", word:"ten", ko:"열" },{ num:"11", word:"eleven", ko:"열하나" },{ num:"12", word:"twelve", ko:"열둘" },
      { num:"13", word:"thirteen", ko:"열셋" },{ num:"15", word:"fifteen", ko:"열다섯" },{ num:"20", word:"twenty", ko:"스물" },
      { num:"30", word:"thirty", ko:"서른" },{ num:"40", word:"forty", ko:"마흔" },{ num:"50", word:"fifty", ko:"쉰" },
      { num:"100", word:"one hundred", ko:"백" },{ num:"1000", word:"one thousand", ko:"천" }
    ],

    ordinals: [
      { num:"1st", word:"first", ko:"첫째/1일" },{ num:"2nd", word:"second", ko:"둘째/2일" },
      { num:"3rd", word:"third", ko:"셋째/3일" },{ num:"4th", word:"fourth", ko:"넷째/4일" },
      { num:"5th", word:"fifth", ko:"다섯째/5일" },{ num:"12th", word:"twelfth", ko:"12일" },
      { num:"20th", word:"twentieth", ko:"20일" },{ num:"21st", word:"twenty-first", ko:"21일" },
      { num:"30th", word:"thirtieth", ko:"30일" },{ num:"31st", word:"thirty-first", ko:"31일" }
    ],

    months: [
      { en:"January", ko:"1월" },{ en:"February", ko:"2월" },{ en:"March", ko:"3월" },{ en:"April", ko:"4월" },
      { en:"May", ko:"5월" },{ en:"June", ko:"6월" },{ en:"July", ko:"7월" },{ en:"August", ko:"8월" },
      { en:"September", ko:"9월" },{ en:"October", ko:"10월" },{ en:"November", ko:"11월" },{ en:"December", ko:"12월" }
    ],

    days: [
      { en:"Monday", ko:"월요일" },{ en:"Tuesday", ko:"화요일" },{ en:"Wednesday", ko:"수요일" },
      { en:"Thursday", ko:"목요일" },{ en:"Friday", ko:"금요일" },{ en:"Saturday", ko:"토요일" },{ en:"Sunday", ko:"일요일" }
    ],

    timeExamples: [
      { time:"3:00", say:"It is three o'clock.",        ko:"3시예요." },
      { time:"3:05", say:"It is five past three.",       ko:"3시 5분이에요." },
      { time:"3:15", say:"It is a quarter past three.",  ko:"3시 15분이에요." },
      { time:"3:30", say:"It is half past three.",       ko:"3시 30분(반)이에요." },
      { time:"3:45", say:"It is a quarter to four.",      ko:"4시 15분 전이에요." },
      { time:"3:50", say:"It is ten to four.",            ko:"4시 10분 전이에요." }
    ],

    prepositionContrast: [
      { prep:"at", useKo:"정확한 시각 (시계 시간)", useEn:"Clock times", examples:["at 3:00","at noon","at midnight","at 7:30"], koParticle:"3시에" },
      { prep:"on", useKo:"요일, 특정 날짜", useEn:"Days & dates", examples:["on Monday","on July 4th","on my birthday","on the weekend"], koParticle:"월요일에" },
      { prep:"in", useKo:"월, 년, 하루의 때", useEn:"Months, years, parts of day", examples:["in July","in 2025","in the morning","in the evening"], koParticle:"10월에" }
    ],

    timeFill: [
      { sentence:"The meeting is ___ 3 o'clock.",         options:["in","on","at"], answer:"at", hint:"정확한 시각 -> at  (한국어 '3시에'의 '에')" },
      { sentence:"My birthday is ___ October.",           options:["in","on","at"], answer:"in", hint:"월 -> in  ('10월에'의 '에')" },
      { sentence:"We have class ___ Monday.",             options:["in","on","at"], answer:"on", hint:"요일 -> on  ('월요일에'의 '에')" },
      { sentence:"I wake up early ___ the morning.",      options:["in","on","at"], answer:"in", hint:"하루의 때 -> in the morning" },
      { sentence:"The party is ___ July 5th.",            options:["in","on","at"], answer:"on", hint:"특정 날짜 -> on" },
      { sentence:"The store closes ___ midnight.",        options:["in","on","at"], answer:"at", hint:"정확한 시점 -> at" },
      { sentence:"She was born ___ 1990.",                options:["in","on","at"], answer:"in", hint:"연도 -> in" },
      { sentence:"Let us meet ___ the weekend.",          options:["in","on","at"], answer:"on", hint:"주말 (미국식) -> on the weekend" },
      { sentence:"The class starts ___ half past nine.",  options:["in","on","at"], answer:"at", hint:"시각 -> at" },
      { sentence:"It is cold ___ December.",              options:["in","on","at"], answer:"in", hint:"월 -> in" }
    ],

    dialogues: [
      {
        titleKo:"약속 잡기", titleEn:"Making an Appointment",
        lines:[
          { speaker:"R", en:"Good morning. How can I help you?",                ko:"좋은 아침이에요. 어떻게 도와드릴까요?" },
          { speaker:"C", en:"I would like to make an appointment for next week.",ko:"다음 주에 예약을 하고 싶어요." },
          { speaker:"R", en:"What day works for you?",                          ko:"어느 요일이 좋으세요?" },
          { speaker:"C", en:"Is Tuesday afternoon available?",                  ko:"화요일 오후가 가능한가요?" },
          { speaker:"R", en:"Yes. How about half past two, on Tuesday?",        ko:"네. 화요일 2시 30분 어떠세요?" },
          { speaker:"C", en:"That is perfect. Tuesday at two thirty.",          ko:"완벽해요. 화요일 2시 30분이요." },
          { speaker:"R", en:"Great. Please arrive on time. We will see you then!", ko:"좋아요. 제시간에 와 주세요. 그때 뵐게요!" }
        ]
      },
      {
        titleKo:"생일과 날짜 이야기", titleEn:"Talking About Birthdays and Dates",
        lines:[
          { speaker:"A", en:"When is your birthday?",                          ko:"생일이 언제예요?" },
          { speaker:"B", en:"My birthday is in October. It is on October fifteenth.", ko:"제 생일은 10월이에요. 10월 15일이요." },
          { speaker:"A", en:"That is soon! What about your husband?",          ko:"곧이네요! 남편분은요?" },
          { speaker:"B", en:"His birthday is in March, on the third.",         ko:"남편 생일은 3월 3일이에요." },
          { speaker:"A", en:"Mine is on the first of January. New Year's Day!", ko:"제 생일은 1월 1일이에요. 새해 첫날이죠!" },
          { speaker:"B", en:"How wonderful! That is easy to remember.",        ko:"정말 좋네요! 기억하기 쉽겠어요." },
          { speaker:"A", en:"Yes! We should celebrate together in January.",   ko:"네! 1월에 같이 축하해요." }
        ]
      },
      {
        titleKo:"기차 시간 확인하기", titleEn:"Checking Train Times",
        lines:[
          { speaker:"P", en:"Excuse me, what time is the next train?",         ko:"실례합니다, 다음 기차가 몇 시예요?" },
          { speaker:"S", en:"The next train is at a quarter past four.",       ko:"다음 기차는 4시 15분이에요." },
          { speaker:"P", en:"And what time does it arrive downtown?",          ko:"시내에는 몇 시에 도착하나요?" },
          { speaker:"S", en:"It arrives at five o'clock. The trip is forty-five minutes.", ko:"5시에 도착해요. 45분 걸려요." },
          { speaker:"P", en:"Does it run on Sundays?",                         ko:"일요일에도 운행하나요?" },
          { speaker:"S", en:"Yes, but on weekends it comes every hour.",       ko:"네, 하지만 주말에는 한 시간마다 와요." },
          { speaker:"P", en:"Perfect. How much is a ticket?",                  ko:"좋아요. 표는 얼마예요?" },
          { speaker:"S", en:"It is twelve dollars. The ticket counter is over there.", ko:"12달러예요. 매표소는 저쪽에 있어요." }
        ]
      }
    ]

  } // end week6

  /* ═══════════════════════════════════════════════
     WEEK 7 — Review + Past Tense + Vocab
     Research: (1) -ed has 3 sounds /t/ /d/ /id/; Korean
     speakers add extra syllables. (2) Overgeneralization:
     "goed/buyed/eated" — drill irregulars hard.
  ═══════════════════════════════════════════════ */
  ,week7: {

    /* ── The big idea: English marks past on the VERB ── */
    conceptCards: [
      {
        titleKo:"영어는 동사를 바꿔요",
        titleEn:"English changes the VERB",
        ko:"한국어는 동사 끝에 '-았/었-'을 붙여요 (가다 → 갔다). 영어도 동사를 바꿔야 해요: go → went, walk → walked.",
        en:"Korean adds -았/었- to the verb (가다 → 갔다). English also must change the verb: go → went, walk → walked.",
        good:"Yesterday I went to work.",
        bad:"Yesterday I go to work."
      },
      {
        titleKo:"시간 단어가 있어도 동사를 바꿔요",
        titleEn:"Change the verb EVEN WITH a time word",
        ko:"'어제(yesterday)'가 있어도 영어는 동사를 과거형으로 바꿔야 해요. 시간 단어만으로는 부족해요. 이것이 한국어 화자의 가장 흔한 실수예요.",
        en:"Even when you say 'yesterday,' English still changes the verb to past. The time word alone is not enough. This is the most common Korean-speaker mistake.",
        good:"Last night we watched a movie.",
        bad:"Last night we watch a movie."
      },
      {
        titleKo:"과거를 알려주는 시간 단어",
        titleEn:"Time words that signal the past",
        ko:"이 단어들이 문장에 있으면 동사는 반드시 과거형이에요: yesterday(어제), last night(어젯밤), last week(지난주), ago(~전에), in 2020.",
        en:"When these words appear, the verb MUST be past: yesterday, last night, last week, ago, in 2020.",
        good:"I moved here two years ago.",
        bad:"I move here two years ago."
      }
    ],

    /* Time markers that trigger past tense */
    timeMarkers: [
      { en:"yesterday",     ko:"어제" },
      { en:"last night",    ko:"어젯밤" },
      { en:"last week",     ko:"지난주" },
      { en:"last year",     ko:"작년" },
      { en:"two days ago",  ko:"이틀 전에" },
      { en:"an hour ago",   ko:"한 시간 전에" },
      { en:"this morning",  ko:"오늘 아침" },
      { en:"in 2020",       ko:"2020년에" }
    ],

    /* ── The three -ed sounds (CENTER of the lesson) ── */
    edSounds: [
      {
        sound:"/t/",
        labelKo:"티 소리 (음절 안 늘어남)",
        labelEn:"Sounds like 't' — NO extra syllable",
        ruleKo:"동사가 무성음(p, k, f, s, sh, ch)으로 끝나면 -ed는 /t/ 소리예요. 목에 손을 대면 떨림이 없어요.",
        ruleEn:"After voiceless sounds (p, k, f, s, sh, ch), -ed = /t/. Hand on throat: NO vibration.",
        examples:[
          { base:"walk",  past:"walked",  say:"walkt",  ko:"걸었다" },
          { base:"watch", past:"watched", say:"watcht", ko:"봤다" },
          { base:"stop",  past:"stopped", say:"stopt",  ko:"멈췄다" },
          { base:"cook",  past:"cooked",  say:"cookt",  ko:"요리했다" },
          { base:"help",  past:"helped",  say:"helpt",  ko:"도왔다" }
        ]
      },
      {
        sound:"/d/",
        labelKo:"디 소리 (음절 안 늘어남)",
        labelEn:"Sounds like 'd' — NO extra syllable",
        ruleKo:"동사가 유성음(l, n, r, b, g, m, v, z)이나 모음으로 끝나면 -ed는 /d/ 소리예요. 목에 손을 대면 떨림이 있어요.",
        ruleEn:"After voiced sounds (l, n, r, b, g, m, v, z) or vowels, -ed = /d/. Hand on throat: vibration.",
        examples:[
          { base:"call",   past:"called",   say:"calld",   ko:"전화했다" },
          { base:"play",   past:"played",   say:"playd",   ko:"놀았다" },
          { base:"learn",  past:"learned",  say:"learnd",  ko:"배웠다" },
          { base:"love",   past:"loved",    say:"lovd",    ko:"사랑했다" },
          { base:"stay",   past:"stayed",   say:"stayd",   ko:"머물렀다" }
        ]
      },
      {
        sound:"/ɪd/",
        labelKo:"이드 소리 (+1 음절!)",
        labelEn:"Sounds like 'id' — ADDS one syllable",
        ruleKo:"동사가 t 또는 d 소리로 끝날 때만 -ed가 /ɪd/ 예요. 이때만 음절이 하나 늘어나요! 다른 경우엔 절대 늘어나지 않아요.",
        ruleEn:"ONLY when the base ends in a 't' or 'd' sound, -ed = /ɪd/. This is the ONLY case that adds a syllable!",
        examples:[
          { base:"want",   past:"wanted",   say:"want-id",   ko:"원했다" },
          { base:"need",   past:"needed",   say:"need-id",   ko:"필요했다" },
          { base:"visit",  past:"visited",  say:"visit-id",  ko:"방문했다" },
          { base:"start",  past:"started",  say:"start-id",  ko:"시작했다" },
          { base:"decide", past:"decided",  say:"decide-id", ko:"결정했다" }
        ]
      }
    ],

    /* Words for the interactive sound-sorting game */
    edSortWords: [
      { word:"walked",  sound:"/t/" },
      { word:"watched", sound:"/t/" },
      { word:"cooked",  sound:"/t/" },
      { word:"stopped", sound:"/t/" },
      { word:"called",  sound:"/d/" },
      { word:"played",  sound:"/d/" },
      { word:"learned", sound:"/d/" },
      { word:"stayed",  sound:"/d/" },
      { word:"wanted",  sound:"/ɪd/" },
      { word:"needed",  sound:"/ɪd/" },
      { word:"visited", sound:"/ɪd/" },
      { word:"started", sound:"/ɪd/" }
    ],

    /* Vocabulary — 26 past-tense words */
    vocabulary: [
      { en:"yesterday",  ko:"어제",          example:"I went to the market yesterday.",         exKo:"저는 어제 시장에 갔어요." },
      { en:"last night", ko:"어젯밤",        example:"We watched a movie last night.",          exKo:"우리는 어젯밤에 영화를 봤어요." },
      { en:"last week",  ko:"지난주",        example:"She visited her family last week.",       exKo:"그녀는 지난주에 가족을 방문했어요." },
      { en:"ago",        ko:"~전에",         example:"I moved here two years ago.",             exKo:"저는 2년 전에 여기로 이사했어요." },
      { en:"already",    ko:"이미 / 벌써",    example:"I already finished my homework.",         exKo:"저는 이미 숙제를 끝냈어요." },
      { en:"trip",       ko:"여행",          example:"We had a wonderful trip to LA.",          exKo:"우리는 LA로 멋진 여행을 갔어요." },
      { en:"visit",      ko:"방문하다",      example:"They visited the museum on Sunday.",       exKo:"그들은 일요일에 박물관을 방문했어요." },
      { en:"buy",        ko:"사다",          example:"I bought a souvenir for my mother.",       exKo:"저는 어머니께 드릴 기념품을 샀어요." },
      { en:"see",        ko:"보다",          example:"We saw the ocean for the first time.",     exKo:"우리는 처음으로 바다를 봤어요." },
      { en:"eat",        ko:"먹다",          example:"He ate lunch at a Korean restaurant.",     exKo:"그는 한식당에서 점심을 먹었어요." },
      { en:"meet",       ko:"만나다",        example:"I met my new coworker yesterday.",         exKo:"저는 어제 새 동료를 만났어요." },
      { en:"take",       ko:"타다 / 가지다",  example:"We took a taxi to the airport.",          exKo:"우리는 공항까지 택시를 탔어요." },
      { en:"give",       ko:"주다",          example:"She gave me a beautiful gift.",            exKo:"그녀는 저에게 아름다운 선물을 줬어요." },
      { en:"make",       ko:"만들다",        example:"My mother made dinner for everyone.",      exKo:"어머니가 모두를 위해 저녁을 만드셨어요." },
      { en:"come",       ko:"오다",          example:"My friend came to my house last night.",   exKo:"제 친구가 어젯밤 우리 집에 왔어요." },
      { en:"feel",       ko:"느끼다",        example:"I felt happy after the trip.",             exKo:"저는 여행 후에 행복했어요." },
      { en:"think",      ko:"생각하다",      example:"I thought the movie was very good.",        exKo:"저는 그 영화가 아주 좋았다고 생각했어요." },
      { en:"find",       ko:"찾다",          example:"We found a great restaurant downtown.",     exKo:"우리는 시내에서 멋진 식당을 찾았어요." },
      { en:"enjoy",      ko:"즐기다",        example:"They enjoyed the beach all day.",          exKo:"그들은 하루 종일 해변을 즐겼어요." },
      { en:"arrive",     ko:"도착하다",      example:"The plane arrived on time.",              exKo:"비행기가 제시간에 도착했어요." },
      { en:"call",       ko:"전화하다",      example:"I called my family in Korea.",             exKo:"저는 한국에 있는 가족에게 전화했어요." },
      { en:"learn",      ko:"배우다",        example:"We learned a lot in class.",              exKo:"우리는 수업에서 많이 배웠어요." },
      { en:"stay",       ko:"머무르다",      example:"We stayed at a hotel near the beach.",     exKo:"우리는 해변 근처 호텔에 머물렀어요." },
      { en:"travel",     ko:"여행하다",      example:"Last summer we traveled to California.",   exKo:"지난여름 우리는 캘리포니아로 여행했어요." },
      { en:"finish",     ko:"끝내다",        example:"She finished work at six o'clock.",        exKo:"그녀는 6시에 일을 끝냈어요." },
      { en:"remember",   ko:"기억하다",      example:"I remembered your birthday!",             exKo:"당신 생일을 기억했어요!" }
    ],

    /* Regular past (-ed) with which sound each takes */
    regularPast: [
      { base:"visit",  past:"visited",  sound:"/ɪd/", ko:"방문했다" },
      { base:"want",   past:"wanted",   sound:"/ɪd/", ko:"원했다" },
      { base:"enjoy",  past:"enjoyed",  sound:"/d/",  ko:"즐겼다" },
      { base:"arrive", past:"arrived",  sound:"/d/",  ko:"도착했다" },
      { base:"call",   past:"called",   sound:"/d/",  ko:"전화했다" },
      { base:"learn",  past:"learned",  sound:"/d/",  ko:"배웠다" },
      { base:"stay",   past:"stayed",   sound:"/d/",  ko:"머물렀다" },
      { base:"travel", past:"traveled", sound:"/d/",  ko:"여행했다" },
      { base:"watch",  past:"watched",  sound:"/t/",  ko:"봤다" },
      { base:"walk",   past:"walked",   sound:"/t/",  ko:"걸었다" },
      { base:"cook",   past:"cooked",   sound:"/t/",  ko:"요리했다" },
      { base:"finish", past:"finished", sound:"/t/",  ko:"끝냈다" }
    ],

    /* Irregular past — common verbs, each with the WRONG
       overgeneralized form Korean speakers tend to produce */
    irregularPast: [
      { base:"go",    past:"went",   wrong:"goed",     ko:"갔다" },
      { base:"buy",   past:"bought", wrong:"buyed",    ko:"샀다" },
      { base:"see",   past:"saw",    wrong:"seed",     ko:"봤다" },
      { base:"eat",   past:"ate",    wrong:"eated",    ko:"먹었다" },
      { base:"meet",  past:"met",    wrong:"meeted",   ko:"만났다" },
      { base:"take",  past:"took",   wrong:"taked",    ko:"탔다/가졌다" },
      { base:"give",  past:"gave",   wrong:"gived",    ko:"줬다" },
      { base:"make",  past:"made",   wrong:"maked",    ko:"만들었다" },
      { base:"come",  past:"came",   wrong:"comed",    ko:"왔다" },
      { base:"feel",  past:"felt",   wrong:"feeled",   ko:"느꼈다" },
      { base:"think", past:"thought",wrong:"thinked",  ko:"생각했다" },
      { base:"find",  past:"found",  wrong:"finded",   ko:"찾았다" },
      { base:"drink", past:"drank",  wrong:"drinked",  ko:"마셨다" },
      { base:"teach", past:"taught", wrong:"teached",  ko:"가르쳤다" }
    ],

    /* Common Korean-speaker error -> fix cards */
    koreanErrors: [
      {
        errorEn:"Yesterday I go to the store.",
        fixEn:"Yesterday I went to the store.",
        tipKo:"시간 단어(yesterday)가 있어도 동사를 과거형으로 바꿔야 해요. go → went."
      },
      {
        errorEn:"Did you went to the party?",
        fixEn:"Did you go to the party?",
        tipKo:"'did'가 이미 과거를 나타내요. 그래서 동사는 원형으로 돌아가요. did + go (went 아님!)."
      },
      {
        errorEn:"I didn't watched TV last night.",
        fixEn:"I didn't watch TV last night.",
        tipKo:"부정문도 마찬가지예요. 'didn't' 뒤에는 원형: didn't watch (watched 아님)."
      },
      {
        errorEn:"I walk-ed-eu to work. (WORK-EU-DEU)",
        fixEn:"I walked to work. (one syllable: 'workt')",
        tipKo:"walked는 한 음절이에요! 한국어처럼 '으' 소리를 넣지 마세요. /t/, /d/ 소리는 음절이 안 늘어나요."
      },
      {
        errorEn:"She goed home early.",
        fixEn:"She went home early.",
        tipKo:"불규칙 동사에 -ed를 붙이지 마세요. go는 goed가 아니라 went예요."
      }
    ],

    /* Past tense fill — includes overgeneralization + did-traps */
    pastFill: [
      { sentence:"Yesterday I ___ to the beach. (go)",            options:["goed","went"],          answer:"went",   hint:"go는 불규칙 → went" },
      { sentence:"She ___ a souvenir at the store. (buy)",        options:["buyed","bought"],       answer:"bought", hint:"buy는 불규칙 → bought" },
      { sentence:"We ___ the museum last week. (visit)",          options:["visited","visitted"],   answer:"visited",hint:"규칙 +ed, 소리는 /ɪd/" },
      { sentence:"They ___ lunch at noon. (eat)",                 options:["eated","ate"],          answer:"ate",    hint:"eat는 불규칙 → ate" },
      { sentence:"Did you ___ my message? (see)",                 options:["saw","see"],            answer:"see",    hint:"'did' 뒤에는 원형! did + see" },
      { sentence:"He ___ the beach all day. (enjoy)",             options:["enjoyed","enjoied"],    answer:"enjoyed",hint:"모음+y → +ed" },
      { sentence:"I didn't ___ TV last night. (watch)",           options:["watched","watch"],      answer:"watch",  hint:"'didn't' 뒤에는 원형! didn't + watch" },
      { sentence:"The plane ___ on time. (arrive)",               options:["arrived","arrlved"],    answer:"arrived",hint:"규칙 +d" },
      { sentence:"She ___ me a gift. (give)",                     options:["gived","gave"],         answer:"gave",   hint:"give는 불규칙 → gave" },
      { sentence:"We ___ a taxi to the hotel. (take)",            options:["taked","took"],         answer:"took",   hint:"take는 불규칙 → took" },
      { sentence:"Last night we ___ a movie. (watch)",            options:["watch","watched"],      answer:"watched",hint:"시간 단어 있어도 과거형! /t/ 소리" },
      { sentence:"Did she ___ home early? (come)",                options:["came","come"],          answer:"come",   hint:"'did' 뒤에는 원형! did + come" }
    ],

    dialogues: [
      {
        titleKo:"주말에 대해 이야기하기",
        titleEn:"Talking About the Weekend",
        lines:[
          { speaker:"A", en:"How was your weekend?",                           ko:"주말 어땠어요?" },
          { speaker:"B", en:"It was great! I went to Los Angeles with my family.", ko:"좋았어요! 가족과 로스앤젤레스에 갔어요." },
          { speaker:"A", en:"Wonderful! What did you do there?",                ko:"멋지네요! 거기서 뭐 했어요?" },
          { speaker:"B", en:"We visited the beach and saw the ocean. The children loved it.", ko:"해변에 가서 바다를 봤어요. 아이들이 정말 좋아했어요." },
          { speaker:"A", en:"Did you eat at any good restaurants?",             ko:"좋은 식당에서 먹었어요?" },
          { speaker:"B", en:"Yes! We ate at a Korean restaurant. The food was delicious.", ko:"네! 한식당에서 먹었어요. 음식이 맛있었어요." },
          { speaker:"A", en:"That sounds like a perfect weekend!",              ko:"완벽한 주말 같네요!" }
        ]
      },
      {
        titleKo:"여행 이야기 나누기",
        titleEn:"Sharing a Travel Story",
        lines:[
          { speaker:"A", en:"You look happy today! Did something good happen?", ko:"오늘 행복해 보여요! 좋은 일 있었어요?" },
          { speaker:"B", en:"Yes! Last week I traveled to California for the first time.", ko:"네! 지난주에 처음으로 캘리포니아에 여행 갔어요." },
          { speaker:"A", en:"How exciting! How did you get there?",             ko:"정말 신나네요! 어떻게 가셨어요?" },
          { speaker:"B", en:"I took a flight from Atlanta. It took about five hours.", ko:"애틀랜타에서 비행기를 탔어요. 5시간쯤 걸렸어요." },
          { speaker:"A", en:"Where did you stay?",                              ko:"어디서 머무르셨어요?" },
          { speaker:"B", en:"We stayed at a hotel near the beach. We had a great time.", ko:"해변 근처 호텔에 머물렀어요. 정말 좋은 시간을 보냈어요." },
          { speaker:"A", en:"I am so glad you enjoyed your trip!",              ko:"여행을 즐기셨다니 정말 기뻐요!" }
        ]
      },
      {
        titleKo:"병원에서 증상 설명하기",
        titleEn:"Explaining Symptoms at the Doctor",
        lines:[
          { speaker:"D", en:"Good morning. What brings you in today?",         ko:"좋은 아침이에요. 오늘 어떤 일로 오셨어요?" },
          { speaker:"P", en:"I felt sick yesterday. I had a headache all day.", ko:"어제 아팠어요. 하루 종일 두통이 있었어요." },
          { speaker:"D", en:"I see. Did you take any medicine?",               ko:"그렇군요. 약을 드셨나요?" },
          { speaker:"P", en:"Yes, I took some medicine last night, but I still feel tired.", ko:"네, 어젯밤 약을 먹었는데 아직 피곤해요." },
          { speaker:"D", en:"Did you sleep well?",                             ko:"잠은 잘 주무셨어요?" },
          { speaker:"P", en:"No, I did not. I woke up many times.",            ko:"아니요. 여러 번 깼어요." },
          { speaker:"D", en:"Let me check you. Do not worry, you will feel better soon.", ko:"진찰해 볼게요. 걱정 마세요, 곧 나아질 거예요." }
        ]
      }
    ]

  } // end week7

  /* ═══════════════════════════════════════════════
     WEEK 8 — Review + Prepositions (in/on/at) + Vocab
     Research: Korean 에/에서 -> English at/in/on/to.
     Teach collocations as CHUNKS (arrive at, good at).
  ═══════════════════════════════════════════════ */
  ,week8: {

    /* ── The big idea: one Korean 에 → many English prepositions ── */
    conceptCards: [
      {
        titleKo:"하나의 '에' = 여러 개의 전치사",
        titleEn:"One '에' becomes many prepositions",
        ko:"한국어는 시간·장소를 대부분 '에' 하나로 표현해요 (3시에, 학교에, 탁자 위에). 하지만 영어는 상황마다 at, in, on, to 중에서 골라야 해요. 이것이 한국어 화자의 가장 큰 어려움이에요.",
        en:"Korean marks most time and place with a single particle 에. English forces you to choose at, in, on, or to each time. This is the hardest part for Korean speakers.",
        good:"I go to school at 3:00.",
        bad:"I go school 3:00."
      },
      {
        titleKo:"전치사는 명사 앞에 와요",
        titleEn:"The preposition comes BEFORE the noun",
        ko:"한국어는 명사 뒤에 붙여요: 탁자 '위에' (table-on). 영어는 명사 앞에 놓아요: 'on' the table. 순서가 반대예요!",
        en:"Korean attaches the marker after the noun (탁자 위에 = table-on). English puts the preposition before the noun (on the table). The order is reversed!",
        good:"The book is on the table.",
        bad:"The book is the table on."
      },
      {
        titleKo:"전치사를 빼먹지 마세요",
        titleEn:"Do not drop the preposition",
        ko:"한국어 화자는 전치사를 자주 빠뜨려요 (관사·복수 -s와 함께 가장 많이 생략됨). 'arrive'는 반드시 'arrive AT'예요. 장소 앞의 전치사를 꼭 넣으세요.",
        en:"Korean speakers often omit prepositions (one of the most-dropped items, along with articles and plural -s). 'Arrive' always needs 'at.' Never leave the preposition out.",
        good:"We arrived at the airport.",
        bad:"We arrived the airport."
      }
    ],

    /* How the single particle 에 maps onto different English prepositions */
    particleMap: [
      { prep:"at", koParticle:"에", useKo:"정확한 시각·특정 지점", ko:"3시에", en:"at 3:00", full:"I meet him at 3:00." },
      { prep:"to", koParticle:"에", useKo:"목적지 (가다/오다)", ko:"학교에 가요", en:"go to school", full:"I go to school." },
      { prep:"at", koParticle:"에", useKo:"있는 장소", ko:"집에 있어요", en:"at home", full:"I am at home." },
      { prep:"on", koParticle:"에", useKo:"표면 위", ko:"탁자 위에", en:"on the table", full:"The book is on the table." },
      { prep:"in", koParticle:"에", useKo:"월·년", ko:"10월에", en:"in October", full:"My birthday is in October." },
      { prep:"in", koParticle:"에", useKo:"공간 안", ko:"가방 안에", en:"in the bag", full:"The keys are in the bag." },
      { prep:"from", koParticle:"에서", useKo:"출발점·출신", ko:"한국에서", en:"from Korea", full:"I am from Korea." },
      { prep:"at/in", koParticle:"에서", useKo:"동작이 일어나는 장소", ko:"집에서 공부해요", en:"study at home", full:"I study at home." }
    ],

    /* The big three: in / on / at usage rules (time + place) */
    prepRules: [
      {
        prep:"at",
        timeKo:"정확한 시각", timeEx:"at 3:00, at noon, at midnight",
        placeKo:"특정 지점·주소", placeEx:"at the airport, at home, at the door",
        koNote:"한국어 '에'가 시각·지점일 때 → at"
      },
      {
        prep:"on",
        timeKo:"요일·날짜", timeEx:"on Monday, on July 4th, on the weekend",
        placeKo:"표면 위·거리", placeEx:"on the table, on the wall, on Main Street",
        koNote:"한국어 '위에'·요일의 '에' → on"
      },
      {
        prep:"in",
        timeKo:"월·년·긴 기간", timeEx:"in July, in 2025, in the morning",
        placeKo:"공간 안·도시·나라", placeEx:"in the bag, in Atlanta, in Korea",
        koNote:"한국어 '안에'·월/년의 '에' → in"
      }
    ],

    /* Preposition fill (in/on/at) — includes omission awareness */
    prepFill: [
      { sentence:"The meeting is ___ 3 o'clock.",          options:["in","on","at"], answer:"at", hint:"정확한 시각 → at (한국어 3시'에')" },
      { sentence:"My birthday is ___ October.",            options:["in","on","at"], answer:"in", hint:"월 → in (한국어 10월'에')" },
      { sentence:"We have class ___ Monday.",              options:["in","on","at"], answer:"on", hint:"요일 → on" },
      { sentence:"The keys are ___ my bag.",               options:["in","on","at"], answer:"in", hint:"공간 안 → in (한국어 '안에')" },
      { sentence:"The book is ___ the table.",             options:["in","on","at"], answer:"on", hint:"표면 위 → on (한국어 '위에')" },
      { sentence:"I am ___ the airport now.",              options:["in","on","at"], answer:"at", hint:"특정 지점 → at" },
      { sentence:"My office is ___ Main Street.",          options:["in","on","at"], answer:"on", hint:"거리 → on" },
      { sentence:"She lives ___ Atlanta.",                 options:["in","on","at"], answer:"in", hint:"도시 → in" },
      { sentence:"The store opens ___ the morning.",       options:["in","on","at"], answer:"in", hint:"in the morning (관용) → in" },
      { sentence:"Let us meet ___ the weekend.",           options:["in","on","at"], answer:"on", hint:"on the weekend (미국식) → on" },
      { sentence:"We arrived ___ the station on time.",    options:["at","(none)","in"], answer:"at", hint:"arrive는 항상 at! 생략 금지" },
      { sentence:"He is good ___ math and science.",       options:["at","in","on"], answer:"at", hint:"good at = 고정 표현" }
    ],

    /* Place prepositions with a mini visual scene */
    placePreps: [
      { en:"next to",     ko:"~옆에",     say:"The cafe is next to the bank." },
      { en:"between",     ko:"~사이에",   say:"The cafe is between the bank and the store." },
      { en:"behind",      ko:"~뒤에",     say:"The cafe is behind the hotel." },
      { en:"in front of", ko:"~앞에",     say:"The cafe is in front of the park." },
      { en:"across from", ko:"~맞은편에", say:"The cafe is across from the library." },
      { en:"on the corner", ko:"모퉁이에", say:"The cafe is on the corner." },
      { en:"near",        ko:"~근처에",   say:"The cafe is near the station." },
      { en:"under",       ko:"~아래에",   say:"The cafe is under the bridge." },
      { en:"above",       ko:"~위에(공중)", say:"The office is above the cafe." },
      { en:"inside",      ko:"~안에",     say:"Please wait inside the building." }
    ],

    /* Fixed prepositional chunks — must be learned as whole units */
    collocations: [
      { chunk:"arrive at",     ko:"~에 도착하다",   example:"We arrived at the hotel.",          why:"장소 도착은 항상 at" },
      { chunk:"good at",       ko:"~을 잘하다",     example:"She is good at English.",           why:"능력 표현은 at" },
      { chunk:"interested in", ko:"~에 관심이 있다", example:"I am interested in music.",         why:"관심은 in" },
      { chunk:"listen to",     ko:"~을 듣다",       example:"I listen to the radio.",           why:"듣기의 대상은 to" },
      { chunk:"wait for",      ko:"~을 기다리다",   example:"We waited for the bus.",           why:"기다림의 대상은 for" },
      { chunk:"look for",      ko:"~을 찾다",       example:"I am looking for my keys.",        why:"찾기의 대상은 for" },
      { chunk:"depend on",     ko:"~에 달려 있다",  example:"It depends on the weather.",       why:"의존은 on" },
      { chunk:"get to",        ko:"~에 도착하다/가다", example:"How do I get to the station?",  why:"도달의 목적지는 to" }
    ],

    /* Common Korean-speaker preposition errors */
    koreanErrors: [
      {
        errorEn:"We arrived the airport at 5:00.",
        fixEn:"We arrived at the airport at 5:00.",
        tipKo:"'arrive'는 반드시 'arrive at'이에요. 한국어 '도착하다'에는 전치사가 없어서 자주 빠뜨려요."
      },
      {
        errorEn:"I go to home after work.",
        fixEn:"I go home after work.",
        tipKo:"'home'은 특별해요. 'go home' — to를 넣지 않아요. (하지만 go TO school, go TO the store는 to가 필요해요.)"
      },
      {
        errorEn:"My birthday is on October.",
        fixEn:"My birthday is in October.",
        tipKo:"월(月)은 in을 써요: in October. 요일은 on을 써요: on Monday."
      },
      {
        errorEn:"She is good in cooking.",
        fixEn:"She is good at cooking.",
        tipKo:"'good at'은 고정 표현이에요. good in이 아니라 good at."
      },
      {
        errorEn:"I am interested about history.",
        fixEn:"I am interested in history.",
        tipKo:"'interested in'이 맞아요. 관심은 in과 함께 써요."
      },
      {
        errorEn:"The cat is the chair under.",
        fixEn:"The cat is under the chair.",
        tipKo:"영어 전치사는 명사 앞에 와요. 한국어 '의자 아래에'와 순서가 반대예요."
      }
    ],

    vocabulary: [
      { en:"on",          ko:"~위에 / ~에",   example:"The book is on the table.",               exKo:"책이 탁자 위에 있어요." },
      { en:"in",          ko:"~안에 / ~에",   example:"The keys are in my bag.",                 exKo:"열쇠가 제 가방 안에 있어요." },
      { en:"at",          ko:"~에서 / ~에",   example:"I am at the airport now.",                exKo:"저는 지금 공항에 있어요." },
      { en:"to",          ko:"~로 / ~에",     example:"I go to school every day.",               exKo:"저는 매일 학교에 가요." },
      { en:"from",        ko:"~에서 / ~로부터", example:"I am from South Korea.",                exKo:"저는 한국에서 왔어요." },
      { en:"under",       ko:"~아래에",       example:"The cat is under the chair.",             exKo:"고양이가 의자 아래에 있어요." },
      { en:"next to",     ko:"~옆에",         example:"The hotel is next to the bank.",          exKo:"호텔은 은행 옆에 있어요." },
      { en:"between",     ko:"~사이에",       example:"The store is between two restaurants.",    exKo:"가게는 두 식당 사이에 있어요." },
      { en:"behind",      ko:"~뒤에",         example:"The parking lot is behind the building.",  exKo:"주차장은 건물 뒤에 있어요." },
      { en:"in front of", ko:"~앞에",         example:"A taxi is in front of the hotel.",        exKo:"택시가 호텔 앞에 있어요." },
      { en:"across from", ko:"~맞은편에",     example:"The park is across from the library.",     exKo:"공원은 도서관 맞은편에 있어요." },
      { en:"near",        ko:"~근처에",       example:"There is a pharmacy near my house.",       exKo:"제 집 근처에 약국이 있어요." },
      { en:"corner",      ko:"모퉁이 / 구석",  example:"The cafe is on the corner.",             exKo:"카페는 모퉁이에 있어요." },
      { en:"street",      ko:"거리 / 길",      example:"My office is on Main Street.",            exKo:"제 사무실은 메인 스트리트에 있어요." },
      { en:"floor",       ko:"층",            example:"The office is on the third floor.",        exKo:"사무실은 3층에 있어요." },
      { en:"address",     ko:"주소",          example:"What is your home address?",              exKo:"집 주소가 어떻게 되세요?" },
      { en:"left",        ko:"왼쪽",          example:"Turn left at the next corner.",           exKo:"다음 모퉁이에서 왼쪽으로 도세요." },
      { en:"right",       ko:"오른쪽",        example:"The bank is on the right.",               exKo:"은행은 오른쪽에 있어요." },
      { en:"straight",    ko:"직진 / 곧장",    example:"Go straight for two blocks.",            exKo:"두 블록 곧장 가세요." },
      { en:"block",       ko:"블록 / 구역",    example:"The station is three blocks away.",       exKo:"역은 세 블록 떨어져 있어요." },
      { en:"upstairs",    ko:"위층에",        example:"The restrooms are upstairs.",             exKo:"화장실은 위층에 있어요." },
      { en:"downstairs",  ko:"아래층에",      example:"The lobby is downstairs.",               exKo:"로비는 아래층에 있어요." },
      { en:"inside",      ko:"안에 / 내부에",  example:"Please wait inside the building.",        exKo:"건물 안에서 기다려 주세요." },
      { en:"outside",     ko:"밖에 / 외부에",  example:"The children are playing outside.",        exKo:"아이들이 밖에서 놀고 있어요." },
      { en:"far from",    ko:"~에서 먼",      example:"Is the airport far from here?",           exKo:"공항이 여기서 멀어요?" },
      { en:"close to",    ko:"~에 가까운",    example:"My house is close to the park.",           exKo:"제 집은 공원에 가까워요." }
    ],

    dialogues: [
      {
        titleKo:"길 안내하기",
        titleEn:"Giving Directions",
        lines:[
          { speaker:"T", en:"Excuse me, where is the nearest pharmacy?",       ko:"실례합니다, 가장 가까운 약국이 어디예요?" },
          { speaker:"L", en:"Go straight for two blocks. It is on the left.",  ko:"두 블록 곧장 가세요. 왼쪽에 있어요." },
          { speaker:"T", en:"Is it near the bank?",                            ko:"은행 근처에 있나요?" },
          { speaker:"L", en:"Yes, it is right next to the bank, on the corner.", ko:"네, 은행 바로 옆 모퉁이에 있어요." },
          { speaker:"T", en:"Is it far from here?",                            ko:"여기서 멀어요?" },
          { speaker:"L", en:"No, it is close. About five minutes on foot.",    ko:"아니요, 가까워요. 걸어서 5분 정도예요." },
          { speaker:"T", en:"Thank you very much for your help!",              ko:"도와주셔서 정말 감사합니다!" }
        ]
      },
      {
        titleKo:"호텔에서 시설 찾기",
        titleEn:"Finding Facilities at a Hotel",
        lines:[
          { speaker:"G", en:"Excuse me, where is the restaurant?",             ko:"실례합니다, 식당이 어디예요?" },
          { speaker:"S", en:"The restaurant is on the second floor, next to the elevator.", ko:"식당은 2층 엘리베이터 옆에 있어요." },
          { speaker:"G", en:"And where is the gym?",                           ko:"헬스장은 어디예요?" },
          { speaker:"S", en:"The gym is downstairs, across from the pool.",    ko:"헬스장은 아래층 수영장 맞은편에 있어요." },
          { speaker:"G", en:"Is there a coffee shop in the hotel?",            ko:"호텔 안에 커피숍이 있나요?" },
          { speaker:"S", en:"Yes, it is in the lobby, near the front door.",   ko:"네, 로비 정문 근처에 있어요." },
          { speaker:"G", en:"Perfect. Thank you!",                            ko:"완벽해요. 감사합니다!" }
        ]
      },
      {
        titleKo:"전화로 위치 설명하기",
        titleEn:"Describing a Location on the Phone",
        lines:[
          { speaker:"A", en:"Hi, I am almost at the restaurant. Where are you?", ko:"안녕하세요, 거의 식당에 도착했어요. 어디 계세요?" },
          { speaker:"B", en:"I am inside, at a table near the window.",         ko:"안에 있어요, 창가 근처 테이블에요." },
          { speaker:"A", en:"Is the restaurant on Main Street?",               ko:"식당이 메인 스트리트에 있어요?" },
          { speaker:"B", en:"Yes, it is between the bank and the bookstore.",   ko:"네, 은행과 서점 사이에 있어요." },
          { speaker:"A", en:"Oh, I see the sign now. I am in front of the door.", ko:"아, 이제 간판이 보여요. 문 앞에 있어요." },
          { speaker:"B", en:"Great! Come inside. I am on the left side.",       ko:"좋아요! 들어오세요. 저는 왼쪽에 있어요." }
        ]
      }
    ]

  } // end week8

  /* ═══════════════════════════════════════════════
     WEEK 9 — Full Content Review
     Research: consolidates the 8 highest-frequency
     Korean-learner error patterns from the literature.
  ═══════════════════════════════════════════════ */
  ,week9: {

    errorPatterns: [
      { week:"W1-2", titleKo:"어순 (SVO)", errorEn:"I the book read.", fixEn:"I read the book.", tipKo:"영어는 주어+동사+목적어. 한국어(SOV)와 반대!" },
      { week:"W2",   titleKo:"주어 생략 금지", errorEn:"Is very busy.", fixEn:"She is very busy.", tipKo:"영어는 주어를 절대 생략하지 않아요." },
      { week:"W3",   titleKo:"Be 동사", errorEn:"She nurse.", fixEn:"She is a nurse.", tipKo:"'~이다'에는 반드시 am/is/are가 필요해요." },
      { week:"W4",   titleKo:"3인칭 -s", errorEn:"He go to work.", fixEn:"He goes to work.", tipKo:"he/she/it 뒤 동사에는 -s를 꼭 붙여요." },
      { week:"W5",   titleKo:"관사 (a/an/the)", errorEn:"I bought apple.", fixEn:"I bought an apple.", tipKo:"한국어엔 관사가 없어요. 매번 필요해요!" },
      { week:"W5",   titleKo:"복수 -s", errorEn:"I have two book.", fixEn:"I have two books.", tipKo:"둘 이상이면 명사에 -s를 붙여요." },
      { week:"W6-8", titleKo:"전치사 (at/on/in)", errorEn:"I go there in Monday.", fixEn:"I go there on Monday.", tipKo:"한국어 '에' = 영어 at/on/in (상황마다 달라요)." },
      { week:"W7",   titleKo:"과거 불규칙", errorEn:"Yesterday I goed home.", fixEn:"Yesterday I went home.", tipKo:"불규칙 동사는 -ed를 붙이지 않아요!" }
    ],

    reviewMixed: [
      { week:"W1", q:"A, E, I, O, U are ___.",                       answer:"vowels",   ko:"A,E,I,O,U는 모음이에요." },
      { week:"W2", q:"Word order in English: Subject + ___ + Object.", answer:"verb",    ko:"영어 어순: 주어+동사+목적어" },
      { week:"W2", q:"This is ___ bag, not yours. (소유격: my)",       answer:"my",       ko:"이건 제 가방이에요." },
      { week:"W3", q:"She ___ a nurse. (be동사)",                     answer:"is",       ko:"그녀는 간호사예요." },
      { week:"W3", q:"___ you ready? (질문)",                         answer:"are",      ko:"준비됐어요?" },
      { week:"W4", q:"He ___ coffee every morning. (drink, 현재)",    answer:"drinks",   ko:"그는 매일 아침 커피를 마셔요." },
      { week:"W4", q:"___ she work here? (질문: Do/Does)",            answer:"does",     ko:"그녀는 여기서 일해요?" },
      { week:"W5", q:"LAX is ___ airport. (관사)",                    answer:"an",       ko:"LAX는 공항이에요." },
      { week:"W5", q:"one child, two ___. (복수, 불규칙)",            answer:"children", ko:"아이 하나, 둘은 children" },
      { week:"W6", q:"The meeting is ___ 3 o'clock. (전치사)",        answer:"at",       ko:"회의는 3시예요." },
      { week:"W6", q:"My birthday is ___ October. (전치사)",          answer:"in",       ko:"제 생일은 10월이에요." },
      { week:"W7", q:"Yesterday I ___ to the beach. (go, 과거)",      answer:"went",     ko:"어제 해변에 갔어요." },
      { week:"W7", q:"She ___ a gift. (buy, 과거)",                  answer:"bought",   ko:"그녀는 선물을 샀어요." },
      { week:"W8", q:"We arrived ___ the airport. (전치사 덩어리)",    answer:"at",       ko:"우리는 공항에 도착했어요." }
    ],

    vocabReview: [
      { en:"Nice to meet you", ko:"만나서 반갑습니다", week:"W1" },
      { en:"because",          ko:"왜냐하면",         week:"W2" },
      { en:"available",        ko:"시간이 되는",       week:"W3" },
      { en:"understand",       ko:"이해하다",          week:"W4" },
      { en:"reservation",      ko:"예약",             week:"W5" },
      { en:"appointment",      ko:"약속/예약",         week:"W6" },
      { en:"on time",          ko:"제시간에",          week:"W6" },
      { en:"yesterday",        ko:"어제",             week:"W7" },
      { en:"already",          ko:"이미/벌써",         week:"W7" },
      { en:"directions",       ko:"길 안내",           week:"W8" },
      { en:"across from",      ko:"~맞은편에",         week:"W8" },
      { en:"arrive at",        ko:"~에 도착하다",       week:"W8" }
    ],

    grammarCards: [
      { week:"Week 1", titleKo:"알파벳 & 발음", titleEn:"Alphabet & Phonics", point:"26 letters; tricky sounds F, L, R, V, TH" },
      { week:"Week 2", titleKo:"문장 구조 & 대명사", titleEn:"Sentence Structure & Pronouns", point:"English is S+V+O (not S+O+V). I/me/my, he/him/his..." },
      { week:"Week 3", titleKo:"Be 동사 & 질문", titleEn:"Be Verbs & Questions", point:"am/is/are; switch order for questions: Are you ready?" },
      { week:"Week 4", titleKo:"현재 단순 시제", titleEn:"Present Simple", point:"Add -s for he/she/it. Use do/does for negatives & questions." },
      { week:"Week 5", titleKo:"관사 & 복수형", titleEn:"Articles & Plurals", point:"a/an/the by sound. Plurals: +s, +es, irregular (child->children)" },
      { week:"Week 6", titleKo:"숫자/시간/날짜", titleEn:"Numbers/Time/Dates", point:"at 3:00, on Monday, in July. Korean 에 splits into at/on/in!" },
      { week:"Week 7", titleKo:"과거 시제", titleEn:"Past Tense", point:"Regular +ed (/t/,/d/,/id/); irregular go->went, buy->bought" },
      { week:"Week 8", titleKo:"전치사", titleEn:"Prepositions", point:"at (point), on (surface/street), in (space/city). Learn chunks!" }
    ],

    dialogues: [
      {
        titleKo:"종합 복습 - 새 친구 만나기", titleEn:"Review - Meeting a New Friend",
        lines:[
          { speaker:"A", en:"Hi! I do not think we have met. I am Jennifer.",  ko:"안녕하세요! 처음 뵙는 것 같아요. 저는 제니퍼예요." },
          { speaker:"B", en:"Nice to meet you, Jennifer. My name is Soo-jin.",  ko:"만나서 반가워요, 제니퍼. 제 이름은 수진이에요." },
          { speaker:"A", en:"Where are you from, Soo-jin?",                     ko:"수진 씨, 어디서 오셨어요?" },
          { speaker:"B", en:"I am from South Korea. I moved to Norcross two years ago.", ko:"한국에서 왔어요. 2년 전에 노크로스로 이사했어요." },
          { speaker:"A", en:"What do you do here?",                             ko:"여기서 무슨 일을 하세요?" },
          { speaker:"B", en:"I work at a restaurant, and I study English on weekends.", ko:"식당에서 일하고, 주말에 영어를 공부해요." },
          { speaker:"A", en:"That is wonderful! Your English is very good.",     ko:"멋지네요! 영어를 정말 잘하시네요." },
          { speaker:"B", en:"Thank you! I practice every day. It is important to me.", ko:"감사합니다! 매일 연습해요. 저에게 중요한 일이에요." }
        ]
      },
      {
        titleKo:"종합 복습 - 하루 일과 이야기", titleEn:"Review - Talking About Your Day",
        lines:[
          { speaker:"A", en:"You look tired today. How was your day?",          ko:"오늘 피곤해 보여요. 하루 어땠어요?" },
          { speaker:"B", en:"It was busy! I woke up at six and went to work early.", ko:"바빴어요! 6시에 일어나서 일찍 출근했어요." },
          { speaker:"A", en:"Do you usually start that early?",                 ko:"보통 그렇게 일찍 시작하세요?" },
          { speaker:"B", en:"No, but today I had a meeting at half past seven.", ko:"아니요, 그런데 오늘은 7시 30분에 회의가 있었어요." },
          { speaker:"A", en:"Where is your office?",                            ko:"사무실이 어디예요?" },
          { speaker:"B", en:"It is on Main Street, next to the bank.",          ko:"메인 스트리트 은행 옆에 있어요." },
          { speaker:"A", en:"Did you have time for lunch?",                     ko:"점심 먹을 시간은 있었어요?" },
          { speaker:"B", en:"Yes, I ate at a Korean restaurant near my office. It was delicious!", ko:"네, 사무실 근처 한식당에서 먹었어요. 맛있었어요!" }
        ]
      }
    ]

  } // end week9

  /* ═══════════════════════════════════════════════
     WEEK 10 — Conversation Day!
     Research: real-world application; warns about
     Konglish false friends (화이팅 etc.)
  ═══════════════════════════════════════════════ */
  ,week10: {

    conversationCards: [
      { themeKo:"자기소개", themeEn:"Introduce Yourself",
        questions:[
          { en:"What is your name?", ko:"이름이 뭐예요?" },
          { en:"Where are you from?", ko:"어디서 오셨어요?" },
          { en:"Where do you live now?", ko:"지금 어디 사세요?" },
          { en:"What do you do?", ko:"무슨 일을 하세요?" },
          { en:"How long have you studied English?", ko:"영어를 얼마나 공부하셨어요?" }
        ] },
      { themeKo:"일상생활", themeEn:"Daily Life",
        questions:[
          { en:"What time do you wake up?", ko:"몇 시에 일어나세요?" },
          { en:"What do you do every morning?", ko:"매일 아침 뭐 하세요?" },
          { en:"Do you cook at home?", ko:"집에서 요리하세요?" },
          { en:"What do you do on the weekend?", ko:"주말에 뭐 하세요?" },
          { en:"How do you get to work?", ko:"직장에 어떻게 가세요?" }
        ] },
      { themeKo:"과거 경험", themeEn:"Past Experiences",
        questions:[
          { en:"What did you do yesterday?", ko:"어제 뭐 하셨어요?" },
          { en:"Where did you go last weekend?", ko:"지난 주말에 어디 가셨어요?" },
          { en:"Did you travel this year?", ko:"올해 여행 가셨어요?" },
          { en:"What did you eat for breakfast?", ko:"아침으로 뭐 드셨어요?" },
          { en:"When did you move to this city?", ko:"언제 이 도시로 이사하셨어요?" }
        ] },
      { themeKo:"미래 계획", themeEn:"Future Plans",
        questions:[
          { en:"What do you want to do this weekend?", ko:"이번 주말에 뭐 하고 싶으세요?" },
          { en:"Do you want to travel? Where?", ko:"여행 가고 싶으세요? 어디로요?" },
          { en:"What do you want to learn next?", ko:"다음에 뭘 배우고 싶으세요?" },
          { en:"How do you practice English?", ko:"영어를 어떻게 연습하세요?" }
        ] },
      { themeKo:"길 묻기 & 여행", themeEn:"Directions & Travel",
        questions:[
          { en:"How do I get to the beach?", ko:"해변에 어떻게 가요?" },
          { en:"Where is the nearest restaurant?", ko:"가장 가까운 식당이 어디예요?" },
          { en:"Is it far from here?", ko:"여기서 멀어요?" },
          { en:"Can you give me directions?", ko:"길을 알려 주시겠어요?" }
        ] },
      { themeKo:"감정 & 의견", themeEn:"Feelings & Opinions",
        questions:[
          { en:"How are you feeling today?", ko:"오늘 기분이 어떠세요?" },
          { en:"What is your favorite food?", ko:"가장 좋아하는 음식이 뭐예요?" },
          { en:"Is English difficult or easy for you?", ko:"영어가 어려우세요, 쉬우세요?" },
          { en:"What do you like about your neighborhood?", ko:"동네에서 뭐가 좋으세요?" }
        ] }
    ],

    konglishTips: [
      { konglish:"Fighting! (화이팅)", natural:"Good luck! / You can do it!", ko:"응원할 때 'Fighting'은 영어에서 안 통해요." },
      { konglish:"Hand phone (핸드폰)", natural:"cell phone / mobile phone", ko:"휴대폰은 'cell phone'이라고 해요." },
      { konglish:"Service (서비스=공짜)", natural:"It's free / on the house", ko:"'공짜'라는 뜻의 service는 영어에 없어요." },
      { konglish:"Meeting (미팅=소개팅)", natural:"a blind date", ko:"소개팅은 'blind date'예요." },
      { konglish:"One shot! (원샷)", natural:"Bottoms up! / Cheers!", ko:"건배는 'Cheers' 또는 'Bottoms up'." },
      { konglish:"A/S (애프터서비스)", natural:"customer service / repair", ko:"수리 서비스는 'customer service'." }
    ],

    rolePlayScenarios: [
      { titleKo:"상황극 1 - 식당에서", titleEn:"Scenario 1 - At a Restaurant",
        setupKo:"한 사람은 손님, 한 사람은 종업원이에요. 음식을 주문하세요.",
        setupEn:"One person is the customer, one is the server. Order a meal.",
        usefulPhrases:["I would like...", "Does it come with...?", "How much is...?", "Can I have the check, please?"] },
      { titleKo:"상황극 2 - 길 묻기", titleEn:"Scenario 2 - Asking for Directions",
        setupKo:"한 사람은 관광객, 한 사람은 현지인이에요. 해변 가는 길을 물어보세요.",
        setupEn:"One person is a tourist, one is a local. Ask for directions to the beach.",
        usefulPhrases:["Excuse me, where is...?", "Go straight...", "Turn left / right", "Is it far from here?"] },
      { titleKo:"상황극 3 - 병원 예약", titleEn:"Scenario 3 - Making an Appointment",
        setupKo:"한 사람은 환자, 한 사람은 접수 담당자예요. 예약을 잡으세요.",
        setupEn:"One person is a patient, one is a receptionist. Make an appointment.",
        usefulPhrases:["I would like to make an appointment.", "What day is available?", "Is ... o'clock okay?", "See you then."] },
      { titleKo:"상황극 4 - 새 이웃 만나기", titleEn:"Scenario 4 - Meeting a New Neighbor",
        setupKo:"두 사람이 이웃이에요. 서로 자기소개를 하고 친해지세요.",
        setupEn:"Two people are neighbors. Introduce yourselves and get to know each other.",
        usefulPhrases:["Are you new here?", "Nice to meet you.", "Where are you from?", "Welcome to the neighborhood!"] }
    ],

    vocabulary: [
      { en:"congratulations", ko:"축하합니다",     example:"Congratulations on finishing the course!", exKo:"과정을 마치신 것을 축하합니다!" },
      { en:"proud",           ko:"자랑스러운",     example:"I am proud of my progress.",              exKo:"제 발전이 자랑스러워요." },
      { en:"practice",        ko:"연습하다",       example:"I will continue to practice English.",    exKo:"앞으로도 영어를 계속 연습할 거예요." },
      { en:"improve",         ko:"향상시키다",     example:"My English improved a lot.",             exKo:"제 영어가 많이 늘었어요." },
      { en:"confident",       ko:"자신 있는",      example:"I feel more confident now.",             exKo:"이제 더 자신감이 생겼어요." },
      { en:"goal",            ko:"목표",          example:"My goal is to speak fluently.",          exKo:"제 목표는 유창하게 말하는 거예요." },
      { en:"future",          ko:"미래",          example:"I will use English in the future.",       exKo:"앞으로 영어를 사용할 거예요." },
      { en:"thank you",       ko:"감사합니다",     example:"Thank you, teacher, for everything!",     exKo:"선생님, 모든 것에 감사드려요!" }
    ]

  } // end week10

}; // end COURSE_DATA
