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
      titleKo: "회화의 날!",
      titleEn: "Conversation Day!",
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

}; // end COURSE_DATA
