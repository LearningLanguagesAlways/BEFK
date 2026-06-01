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

}; // end COURSE_DATA
