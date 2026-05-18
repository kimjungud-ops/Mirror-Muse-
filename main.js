
const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model';

const ARCH_T = {
  doll_long:     {faceRatio:1.55,jawRatio:0.74,eyeSize:0.30,eyeSpacing:0.30,noseWidth:0.23,lipFull:0.17},
  vline_cat:     {faceRatio:1.48,jawRatio:0.71,eyeSize:0.27,eyeSpacing:0.33,noseWidth:0.24,lipFull:0.16},
  soft_oval:     {faceRatio:1.40,jawRatio:0.78,eyeSize:0.27,eyeSpacing:0.29,noseWidth:0.24,lipFull:0.17},
  cat_defined:   {faceRatio:1.34,jawRatio:0.80,eyeSize:0.28,eyeSpacing:0.32,noseWidth:0.26,lipFull:0.20},
  round_cute:    {faceRatio:1.30,jawRatio:0.82,eyeSize:0.29,eyeSpacing:0.30,noseWidth:0.25,lipFull:0.18},
  clear_chic:    {faceRatio:1.42,jawRatio:0.75,eyeSize:0.28,eyeSpacing:0.30,noseWidth:0.24,lipFull:0.17},
  petite_neat:   {faceRatio:1.38,jawRatio:0.77,eyeSize:0.27,eyeSpacing:0.28,noseWidth:0.23,lipFull:0.16},
  heart_alluring:{faceRatio:1.36,jawRatio:0.76,eyeSize:0.28,eyeSpacing:0.31,noseWidth:0.25,lipFull:0.19},
  golden_oval:   {faceRatio:1.52,jawRatio:0.80,eyeSize:0.25,eyeSpacing:0.30,noseWidth:0.27,lipFull:0.16},
  strong_jaw:    {faceRatio:1.41,jawRatio:0.84,eyeSize:0.26,eyeSpacing:0.31,noseWidth:0.28,lipFull:0.19},
  long_sharp:    {faceRatio:1.56,jawRatio:0.83,eyeSize:0.24,eyeSpacing:0.31,noseWidth:0.28,lipFull:0.16},
  broad_soft:    {faceRatio:1.43,jawRatio:0.86,eyeSize:0.25,eyeSpacing:0.31,noseWidth:0.27,lipFull:0.19},
};
const ARCH_KEYS = Object.keys(ARCH_T);
const ARCH_KIT = {
  doll_long:'doll', round_cute:'doll',
  vline_cat:'chic', long_sharp:'chic',
  soft_oval:'natural', golden_oval:'natural',
  cat_defined:'defined', strong_jaw:'defined',
  heart_alluring:'elegant', broad_soft:'elegant',
  clear_chic:'clean', petite_neat:'clean',
};

const ROSTER = [];
function add(group, gender){ for(let i=2;i<arguments.length;i++) ROSTER.push([arguments[i],group,gender]); }
add('BLACKPINK','F','지수','제니','로제','리사');
add('TWICE','F','나연','정연','모모','사나','지효','미나','다현','채영','쯔위');
add('aespa','F','카리나','지젤','윈터','닝닝');
add('IVE','F','안유진','가을','레이','장원영','리즈','이서');
add('NewJeans','F','민지','하니','다니엘','해린','혜인');
add('LE SSERAFIM','F','사쿠라','김채원','허윤진','카즈하','홍은채');
add('(G)I-DLE','F','미연','민니','소연','우기','슈화');
add('ITZY','F','예지','리아','류진','채령','유나');
add('Red Velvet','F','아이린','슬기','웬디','조이','예리');
add('NMIXX','F','릴리','해원','설윤','지우','배이','규진');
add('STAYC','F','수민','시은','아이사','세은','윤','재이');
add('BABYMONSTER','F','루카','파리타','아사','아현','라미','로라','치키타');
add('ILLIT','F','윤아','민주','모카','원희','이로하');
add('Kep1er','F','최유진','김채현','김다연','휴닝바히예','서영은','마시로','히카루','샤오팅','강예서');
add('fromis_9','F','이새롬','송하영','이나경','박지원','노지선','이서연','이채영','백지헌');
add('소녀시대','F','태연','써니','티파니','효연','유리','수영','윤아','서현');
add('MAMAMOO','F','솔라','문별','휘인','화사');
add('SOLO','F','아이유','보아','선미','청하');
add('BTS','M','RM','진','슈가','제이홉','지민','뷔','정국');
add('SEVENTEEN','M','에스쿱스','정한','조슈아','준','호시','원우','우지','도겸','민규','디에잇','승관','버논','디노');
add('Stray Kids','M','방찬','리노','창빈','현진','한','필릭스','승민','아이엔');
add('TXT','M','연준','수빈','범규','태현','휴닝카이');
add('ENHYPEN','M','희승','제이','제이크','성훈','선우','정원','니키');
add('NCT','M','태용','태일','쟈니','유타','도영','재현','정우','마크','해찬','제노','재민','런쥔','천러','지성');
add('EXO','M','시우민','수호','레이','백현','첸','찬열','디오','카이','세훈');
add('RIIZE','M','쇼타로','은석','성찬','원빈','승한','소희','앤톤');
add('ZEROBASEONE','M','김지웅','장하오','성한빈','석매튜','김태래','리키','김규빈','박건욱','한유진');
add('SHINee','M','온유','키','민호','태민');
add('ASTRO','M','차은우');
add('BIGBANG','M','지드래곤','태양','대성','탑');
add('THE BOYZ','M','영훈','현재','주연','케빈','뉴','에릭');
add('SOLO','M','박지훈');

const NAME_EN = {
  // BLACKPINK
  '지수':'Jisoo','제니':'Jennie','로제':'Rosé','리사':'Lisa',
  // TWICE
  '나연':'Nayeon','정연':'Jeongyeon','모모':'Momo','사나':'Sana','지효':'Jihyo',
  '미나':'Mina','다현':'Dahyun','채영':'Chaeyoung','쯔위':'Tzuyu',
  // aespa
  '카리나':'Karina','지젤':'Giselle','윈터':'Winter','닝닝':'Ningning',
  // IVE (레이 conflicts with EXO's 레이)
  '안유진':'Yujin','가을':'Gaeul','레이@IVE':'Rei','장원영':'Wonyoung','리즈':'Liz','이서':'Leeseo',
  // NewJeans
  '민지':'Minji','하니':'Hanni','다니엘':'Danielle','해린':'Haerin','혜인':'Hyein',
  // LE SSERAFIM
  '사쿠라':'Sakura','김채원':'Chaewon','허윤진':'Yunjin','카즈하':'Kazuha','홍은채':'Eunchae',
  // (G)I-DLE
  '미연':'Miyeon','민니':'Minnie','소연':'Soyeon','우기':'Yuqi','슈화':'Shuhua',
  // ITZY
  '예지':'Yeji','리아':'Lia','류진':'Ryujin','채령':'Chaeryeong','유나':'Yuna',
  // Red Velvet
  '아이린':'Irene','슬기':'Seulgi','웬디':'Wendy','조이':'Joy','예리':'Yeri',
  // NMIXX
  '릴리':'Lily','해원':'Haewon','설윤':'Sullyoon','지우':'Jiwoo','배이':'BAE','규진':'Kyujin',
  // STAYC
  '수민':'Sumin','시은':'Sieun','아이사':'Isa','세은':'Seeun','윤':'Yoon','재이':'J',
  // BABYMONSTER
  '루카':'Ruka','파리타':'Pharita','아사':'Asa','아현':'Ahyeon','라미':'Rami','로라':'Rora','치키타':'Chiquita',
  // ILLIT (윤아 conflicts with 소녀시대's 윤아)
  '윤아@ILLIT':'Yunah','민주':'Minju','모카':'Moka','원희':'Wonhee','이로하':'Iroha',
  // Kep1er
  '최유진':'Yujin','김채현':'Chaehyun','김다연':'Dayeon','휴닝바히예':'Bahiyyih',
  '서영은':'Youngeun','마시로':'Mashiro','히카루':'Hikaru','샤오팅':'Xiaoting','강예서':'Yeseo',
  // fromis_9
  '이새롬':'Saerom','송하영':'Hayoung','이나경':'Nagyung','박지원':'Jiwon',
  '노지선':'Jisun','이서연':'Seoyeon','이채영':'Chaeyoung','백지헌':'Jiheon',
  // 소녀시대
  '태연':'Taeyeon','써니':'Sunny','티파니':'Tiffany','효연':'Hyoyeon',
  '유리':'Yuri','수영':'Sooyoung','윤아@소녀시대':'Yoona','서현':'Seohyun',
  // MAMAMOO
  '솔라':'Solar','문별':'Moonbyul','휘인':'Wheein','화사':'Hwasa',
  // SOLO F
  '아이유':'IU','보아':'BoA','선미':'Sunmi','청하':'Chungha',
  // BTS
  'RM':'RM','진':'Jin','슈가':'Suga','제이홉':'J-Hope','지민':'Jimin','뷔':'V','정국':'Jungkook',
  // SEVENTEEN
  '에스쿱스':'S.Coups','정한':'Jeonghan','조슈아':'Joshua','준':'Jun','호시':'Hoshi',
  '원우':'Wonwoo','우지':'Woozi','도겸':'DK','민규':'Mingyu','디에잇':'The8',
  '승관':'Seungkwan','버논':'Vernon','디노':'Dino',
  // Stray Kids
  '방찬':'Bang Chan','리노':'Lee Know','창빈':'Changbin','현진':'Hyunjin',
  '한':'Han','필릭스':'Felix','승민':'Seungmin','아이엔':'I.N',
  // TXT
  '연준':'Yeonjun','수빈':'Soobin','범규':'Beomgyu','태현':'Taehyun','휴닝카이':'Huening Kai',
  // ENHYPEN
  '희승':'Heeseung','제이':'Jay','제이크':'Jake','성훈':'Sunghoon','선우':'Sunoo','정원':'Jungwon','니키':'Ni-ki',
  // NCT
  '태용':'Taeyong','태일':'Taeil','쟈니':'Johnny','유타':'Yuta','도영':'Doyoung',
  '재현':'Jaehyun','정우':'Jungwoo','마크':'Mark','해찬':'Haechan','제노':'Jeno',
  '재민':'Jaemin','런쥔':'Renjun','천러':'Chenle','지성':'Jisung',
  // EXO
  '시우민':'Xiumin','수호':'Suho','레이@EXO':'Lay','백현':'Baekhyun','첸':'Chen',
  '찬열':'Chanyeol','디오':'D.O.','카이':'Kai','세훈':'Sehun',
  // RIIZE
  '쇼타로':'Shotaro','은석':'Eunseok','성찬':'Seungchan','원빈':'Wonbin',
  '승한':'Sunghan','소희':'Sohee','앤톤':'Anton',
  // ZEROBASEONE
  '김지웅':'Jiwoong','장하오':'Zhang Hao','성한빈':'Hanbin','석매튜':'Matthew',
  '김태래':'Taerae','리키':'Ricky','김규빈':'Gyuvin','박건욱':'Gunwook','한유진':'Yujin',
  // SHINee
  '온유':'Onew','키':'Key','민호':'Minho','태민':'Taemin',
  // ASTRO
  '차은우':'Cha Eun-woo',
  // BIGBANG
  '지드래곤':'G-Dragon','태양':'Taeyang','대성':'Daesung','탑':'T.O.P',
  // THE BOYZ
  '영훈':'Younghoon','현재':'Hyunjae','주연':'Juyeon','케빈':'Kevin','뉴':'New','에릭':'Eric',
  // SOLO M
  '박지훈':'Park Jihoon',
};
const GROUP_EN = { '소녀시대':"Girls' Generation" };

function nameEn(name, group) {
  return NAME_EN[name + '@' + group] || NAME_EN[name] || name;
}
function displayMuseName(name, group) {
  if (lang !== 'en') return name;
  const en = nameEn(name, group);
  return en === name ? name : `${en} (${name})`;
}
function displayGroup(group) {
  if (lang !== 'en') return group;
  return GROUP_EN[group] || group;
}

function hashStr(s){ let h=2166136261; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
const JIT={faceRatio:.05,jawRatio:.03,eyeSize:.018,eyeSpacing:.022,noseWidth:.018,lipFull:.018};
function buildMuses(){
  return ROSTER.map(([name,group,g])=>{
    const seed = hashStr(name+'@'+group);
    const archKey = ARCH_KEYS[seed % ARCH_KEYS.length];
    const base = ARCH_T[archKey];
    const t = {}; let h = seed;
    for(const k in base){
      h = (Math.imul(h,1664525)+1013904223)>>>0;
      t[k] = +(base[k] + ((h/4294967295)-0.5)*2*JIT[k]).toFixed(4);
    }
    return { name, group, g, arch:archKey, kit:ARCH_KIT[archKey], t };
  });
}
const MUSES = buildMuses();

const OY = 'https://global.oliveyoung.com/display/search?query=';
const PRODUCT_DB = [
  { grad:'linear-gradient(135deg,#e8c4b8,#c87f73)', icon:'✦', items:[
    {rank:1,brand:'CLIO',name:'킬 커버 파운웨어 쿠션',nameEn:'Kill Cover Founwear Cushion',price:'₩35,000',desc:'완벽 커버력 + 24시간 지속. K-pop 무대 메이크업에도 자주 쓰이는 스테디셀러.',descEn:'Perfect coverage + 24hr wear. A bestseller used in K-pop stage makeup.',q:'CLIO Kill Cover'},
    {rank:2,brand:'LANEIGE',name:'네오 쿠션 매트',nameEn:'Neo Cushion Matte',price:'₩34,000',desc:'피부 밀착 세미매트 마무리. 들뜸 없이 하루 종일 유지.',descEn:'Semi-matte skin-melting finish. Stays put all day without lifting.',q:'LANEIGE Neo Cushion'},
    {rank:3,brand:'ETUDE',name:'순정 쿠션 글로우',nameEn:'Sunjung Cushion Glow',price:'₩21,000',desc:'촉촉한 수분 글로우. 가성비 대표 쿠션.',descEn:'Dewy hydrating glow. The budget-friendly cushion staple.',q:'ETUDE cushion'},
    {rank:4,brand:'VT',name:'리들샷 프로 쿠션',nameEn:'REEDLE SHOT Pro Cushion',price:'₩21,000',desc:'리들샷 성분 탄력 케어 + 자연스러운 커버.',descEn:'REEDLE SHOT firming care + natural coverage.',q:'VT REEDLE SHOT'},
    {rank:5,brand:'ROM&ND',name:'누 지글로우 쿠션',nameEn:'Nu Zea-Glow Cushion',price:'₩26,000',desc:'물광 자연 마무리. 얇고 가볍게 피부에 밀착.',descEn:'Natural water-glow finish. Thin, lightweight skin melt.',q:'ROMAND cushion'},
    {rank:6,brand:'HERA',name:'UV 미스트 쿠션',nameEn:'UV Mist Cushion',price:'₩58,000',desc:'SPF50+ 선케어 + 도시적 고급 마무리.',descEn:'SPF50+ sun care + urban luxe finish.',q:'HERA UV Mist Cushion'},
    {rank:7,brand:'CLIO',name:'킬 커버 더 뉴 파운데이션',nameEn:'Kill Cover The New Foundation',price:'₩37,000',desc:'세미매트 리퀴드. 고커버 + 자연스러운 마무리.',descEn:'Semi-matte liquid. High coverage with a natural finish.',q:'CLIO foundation'},
    {rank:8,brand:'INNISFREE',name:'포어블러 쿠션',nameEn:'Pore Blur Cushion',price:'₩25,000',desc:'모공 블러 효과. 산뜻한 마무리로 지성 피부에 추천.',descEn:'Pore-blurring effect. Fresh finish ideal for oily skin.',q:'INNISFREE cushion'},
    {rank:9,brand:'AMUSE',name:'듀이 틴트 쿠션',nameEn:'Dew Tint Cushion',price:'₩24,000',desc:'세럼 타입 스킨 틴트. 얇고 자연스러운 피부 표현.',descEn:'Serum-type skin tint. Thin, natural-looking coverage.',q:'AMUSE Dew Tint'},
    {rank:10,brand:'MISSHA',name:'M 퍼펙트 커버 BB크림',nameEn:'M Perfect Cover BB Cream',price:'₩9,900',desc:'보습+커버+자외선 차단 올인원. 가성비 국민 BB.',descEn:"Moisture + coverage + SPF all-in-one. Korea's best-value BB.",q:'MISSHA BB Cream'},
  ]},
  { grad:'linear-gradient(135deg,#c9a8b8,#8c3a4f)', icon:'◠', items:[
    {rank:1,brand:'CLIO',name:'프로 아이 팔레트',nameEn:'Pro Eye Palette',price:'₩28,000',desc:'데일리~파티 모두 가능. 발색력과 지속력 탁월.',descEn:'From daily to party. Outstanding pigment and lasting wear.',q:'CLIO eye palette'},
    {rank:2,brand:'ROM&ND',name:'베터 댄 팔레트',nameEn:'Better Than Palette',price:'₩23,000',desc:'웜톤 뉴트럴 컬러 위주. 자연스러운 데일리 음영.',descEn:'Warm neutral shades. Natural everyday shadow.',q:'ROMAND Better Than Palette'},
    {rank:3,brand:'ETUDE',name:'플레이 컬러 아이즈',nameEn:'Play Color Eyes',price:'₩21,000',desc:'따뜻한 브라운 톤. 베이직 눈 화장의 정석.',descEn:'Warm brown tones. The classic basic eye look.',q:'ETUDE Play Color Eyes'},
    {rank:4,brand:'TOOCOOLFORSCHOOL',name:'아트클래스 바이 로댕',nameEn:'Art Class by Rodin',price:'₩32,000',desc:'음영 팔레트 레전드. 자연스러운 윤곽 표현.',descEn:'The legendary shading palette. Natural contouring.',q:'toocoolforschool Art Class'},
    {rank:5,brand:'3CE',name:'멀티 아이 컬러 팔레트',nameEn:'Multi Eye Color Palette',price:'₩36,000',desc:'트렌디한 색상 구성. 매트·글리터 다양하게.',descEn:'Trendy shades. Matte to glitter variety.',q:'3CE eye palette'},
    {rank:6,brand:'ESPOIR',name:'아이 섀도우 팔레트',nameEn:'Eye Shadow Palette',price:'₩27,000',desc:'발색 선명하고 지속력 우수. 세미매트~글리터 구성.',descEn:'Vivid pigment, great wear. Semi-matte to glitter selection.',q:'ESPOIR eye shadow'},
    {rank:7,brand:'AMUSE',name:'아이 섀도우 팔레트',nameEn:'Eye Shadow Palette',price:'₩22,000',desc:'피부 밀착 발색. 선명하고 가루 날림 없어요.',descEn:'Skin-melting pigment. Vivid, no fallout.',q:'AMUSE eye shadow'},
    {rank:8,brand:'PERIPERA',name:'잉크 섀도우 팔레트',nameEn:'Ink Shadow Palette',price:'₩18,000',desc:'눈 주변 자연스러운 음영 전용 팔레트.',descEn:'Dedicated shading palette for the eye area.',q:'PERIPERA shadow'},
    {rank:9,brand:'HINCE',name:'아이 섀도우 팔레트',nameEn:'Eye Shadow Palette',price:'₩32,000',desc:'고급스러운 발색. 데일리~특별한 날까지.',descEn:'Luxe pigment. Daily to special occasion.',q:'HINCE eye shadow'},
    {rank:10,brand:'BLACK ROUGE',name:'아이 팔레트',nameEn:'Eye Palette',price:'₩19,000',desc:'발색력 좋은 신흥 강자. 일상·데이트 모두 OK.',descEn:'Great pigment from a rising brand. Daily and date looks.',q:'BLACK ROUGE eye'},
  ]},
  { grad:'linear-gradient(135deg,#d4b896,#b08a5e)', icon:'⌒', items:[
    {rank:1,brand:'CLIO',name:'샤프 소 심플 아이브로우',nameEn:'Sharp So Simple Eyebrow',price:'₩13,000',desc:'얇은 팁으로 결 하나하나 살리는 표현. 롱래스팅.',descEn:'Fine tip draws each hair stroke. Long-lasting.',q:'CLIO brow pencil'},
    {rank:2,brand:'ETUDE',name:'드로잉 아이브로우',nameEn:'Drawing Eye Brow',price:'₩8,000',desc:'국민 눈썹 펜슬. 가성비 1위. 초보자도 쉽게.',descEn:"Korea's #1 brow pencil. Best value, beginner-friendly.",q:'ETUDE Drawing Eye Brow'},
    {rank:3,brand:'INNISFREE',name:'오토 아이브로우 펜슬',nameEn:'Auto Eyebrow Pencil',price:'₩12,000',desc:'자동 심 타입. 편리하고 자연스러운 발색.',descEn:'Auto-advance tip. Convenient, natural pigment.',q:'INNISFREE eyebrow'},
    {rank:4,brand:'ROM&ND',name:'루키 아이브로우',nameEn:'Rookie Eyebrow',price:'₩16,000',desc:'뭉침 없는 깔끔한 발색. 트렌디한 눈썹 연출.',descEn:'Clean pigment, no smearing. Trendy brow looks.',q:'ROMAND brow'},
    {rank:5,brand:'AMUSE',name:'아이브로우 펜슬',nameEn:'Eyebrow Pencil',price:'₩15,000',desc:'세심한 발색으로 자연스러운 눈썹 결 연출.',descEn:'Precise pigment for natural hair-stroke brows.',q:'AMUSE eyebrow'},
    {rank:6,brand:'PERIPERA',name:'잉크 더 아이브로우',nameEn:'Ink The Eyebrow',price:'₩10,000',desc:'방수 포뮬러. 땀·습기에 강한 지속력.',descEn:'Waterproof formula. Resists sweat and humidity.',q:'PERIPERA eyebrow'},
    {rank:7,brand:'ESPOIR',name:'프로 테일러 아이브로우',nameEn:'Pro Tailor Eyebrow',price:'₩14,000',desc:'정교한 테일링으로 선명하고 또렷한 눈썹.',descEn:'Precise tailing for sharp, defined brows.',q:'ESPOIR eyebrow'},
    {rank:8,brand:'3CE',name:'브로우 포마드',nameEn:'Brow Pomade',price:'₩15,000',desc:'포마드 타입. 자연스럽고 오래가는 눈썹.',descEn:'Pomade type. Natural, long-lasting brow definition.',q:'3CE brow'},
    {rank:9,brand:'HINCE',name:'아이브로우 펜슬',nameEn:'Eyebrow Pencil',price:'₩14,000',desc:'리퀴드 타입. 피부에 자연스럽게 밀착.',descEn:'Liquid type. Melts naturally into skin.',q:'HINCE eyebrow'},
    {rank:10,brand:'BLACK ROUGE',name:'아이브로우',nameEn:'Eyebrow Pencil',price:'₩11,000',desc:'깔끔한 발색으로 선명하고 또렷하게.',descEn:'Clean pigment for sharp, defined brows.',q:'BLACK ROUGE eyebrow'},
  ]},
  { grad:'linear-gradient(135deg,#e8a5a5,#c87f73)', icon:'❀', items:[
    {rank:1,brand:'ROM&ND',name:'제로 매트 립스틱',nameEn:'Zero Matte Lipstick',price:'₩17,000',desc:'국내 최고 인기 매트 립. 발색 선명하고 입술 안 타요.',descEn:"Korea's top matte lip. Vivid pigment without drying out.",q:'ROMAND Zero Matte Lipstick'},
    {rank:2,brand:'PERIPERA',name:'잉크 더 벨벳',nameEn:'Ink The Velvet',price:'₩12,000',desc:'촉촉한 벨벳 질감. 시간이 지나도 촉촉함 유지.',descEn:'Moisturising velvet texture. Stays comfortable over time.',q:'PERIPERA Ink Velvet'},
    {rank:3,brand:'ETUDE',name:'픽싱 틴트',nameEn:'Fixing Tint',price:'₩9,500',desc:'가성비 틴트 1위. 선명 발색으로 오래오래.',descEn:'Best-value tint. Vivid pigment that lasts.',q:'ETUDE tint'},
    {rank:4,brand:'CLIO',name:'버짓 매트 립',nameEn:'Budge-Proof Matte Lip',price:'₩14,000',desc:'번들거림 없이 선명한 컬러. 꽉 채워주는 느낌.',descEn:'Non-glossy vivid colour. Fully saturated feel.',q:'CLIO lip'},
    {rank:5,brand:'3CE',name:'매트 립 컬러',nameEn:'Matte Lip Color',price:'₩16,000',desc:'3CE 시그니처 매트 립. 트렌디한 컬러 라인업.',descEn:'3CE signature matte. Trendy colour lineup.',q:'3CE Matte Lip Color'},
    {rank:6,brand:'BLACK ROUGE',name:'씨씨 립 블러 틴트',nameEn:'CC Lip Blur Tint',price:'₩14,000',desc:'블러 효과로 흐릿하고 촉촉한 입술. 그라데이션 최적.',descEn:'Blurred, dewy effect. Perfect for gradient lips.',q:'BLACK ROUGE lip tint'},
    {rank:7,brand:'AMUSE',name:'듀이 글라스 틴트',nameEn:'Dew Glass Tint',price:'₩16,000',desc:'글로시 유리알 입술 연출. 수분감 가득.',descEn:'Glossy glass-ball effect. Packed with moisture.',q:'AMUSE Dew Glass Tint'},
    {rank:8,brand:'HINCE',name:'세컨드 스킨 샤인 립',nameEn:'Second Skin Shine Lip',price:'₩24,000',desc:'얇게 밀착되는 세컨드 스킨 발림. 고급스러운 광택.',descEn:'Second-skin finish. Luxe glossy sheen.',q:'HINCE lip'},
    {rank:9,brand:'ESPOIR',name:'노 필터 립스틱',nameEn:'No Filter Lipstick',price:'₩16,000',desc:'강한 지속력과 선명 발색. 지우기 전까지 유지.',descEn:'Strong wear, vivid pigment. Stays until removed.',q:'ESPOIR lipstick'},
    {rank:10,brand:'INNISFREE',name:'비비드 코튼 틴트',nameEn:'Vivid Cotton Tint',price:'₩12,000',desc:'맑고 촉촉한 발색. 건조한 입술에도 편하게.',descEn:'Clear, moisturising pigment. Comfortable even on dry lips.',q:'INNISFREE tint'},
  ]},
  { grad:'linear-gradient(135deg,#f0c9bb,#d4918a)', icon:'❍', items:[
    {rank:1,brand:'ROM&ND',name:'더 쉐이딩 팔레트',nameEn:'The Shading Palette',price:'₩19,000',desc:'블러셔+쉐딩+하이라이터 올인원. 국민 팔레트.',descEn:'Blush + shading + highlighter all-in-one. The ultimate palette.',q:'ROMAND shading'},
    {rank:2,brand:'CLIO',name:'프로 블러쉬 팔레트',nameEn:'Pro Blush Palette',price:'₩16,000',desc:'자연스러운 혈색 표현에 최적. 발색 오래가요.',descEn:'Natural flush. Pigment lasts all day.',q:'CLIO blush'},
    {rank:3,brand:'ETUDE',name:'루킹포레스트 블러쉬',nameEn:'Lookingforest Blusher',price:'₩9,000',desc:'자연스러운 혈색 표현. 가성비 블러셔 대표.',descEn:'Natural flush. The budget blusher staple.',q:'ETUDE blusher'},
    {rank:4,brand:'TOOCOOLFORSCHOOL',name:'아트클래스 블러쉬',nameEn:'Art Class Blush',price:'₩22,000',desc:'피부 타입 불문 자연스러운 혈색. 음영 표현까지.',descEn:'Works for all skin types. Flush and shading in one.',q:'toocoolforschool blush'},
    {rank:5,brand:'INNISFREE',name:'미네랄 블러쉬',nameEn:'Mineral Blusher',price:'₩14,000',desc:'미네랄 성분으로 피부 결 살리며 자연스러운 혈색.',descEn:'Mineral formula refines texture for a natural flush.',q:'INNISFREE blusher'},
    {rank:6,brand:'3CE',name:'무드 레시피 블러쉬',nameEn:'Mood Recipe Blush',price:'₩24,000',desc:'3가지 컬러로 다양한 혈색 표현 가능.',descEn:'3 shades for varied flush expression.',q:'3CE blush'},
    {rank:7,brand:'AMUSE',name:'글로우 블러쉬',nameEn:'Glow Blush',price:'₩19,000',desc:'트렌디한 컬러 구성. 글로우 + 매트 믹스.',descEn:'Trendy shades. Glow and matte mix.',q:'AMUSE blush'},
    {rank:8,brand:'ESPOIR',name:'노 필터 블러쉬',nameEn:'No Filter Blush',price:'₩18,000',desc:'발색 선명하고 자연스러운 마무리.',descEn:'Vivid pigment, natural finish.',q:'ESPOIR blush'},
    {rank:9,brand:'PERIPERA',name:'잉크 블러쉬',nameEn:'Ink Blusher',price:'₩12,000',desc:'가볍고 선명한 발색. 쉽게 블렌딩돼요.',descEn:'Lightweight, vivid pigment. Blends easily.',q:'PERIPERA blush'},
    {rank:10,brand:'HOLIKA HOLIKA',name:'글로우 블러셔',nameEn:'Glow Blusher',price:'₩10,000',desc:'글로우 피니시. 화사한 혈색과 은은한 광택.',descEn:'Glow finish. Radiant flush with subtle sheen.',q:'HOLIKA HOLIKA blusher'},
  ]},
];

let _activeTab = 0;

function renderKitProducts(areaIdx) {
  const db = PRODUCT_DB[areaIdx];
  $('kitProducts').innerHTML = `<div class="prod-grid">${
    db.items.map(p => `
      <a class="prod-card" href="${OY}${encodeURIComponent(p.q)}" target="_blank" rel="noopener">
        <div class="prod-img" style="background:${db.grad}">
          <span class="prod-rank"># ${p.rank}</span>${db.icon}
        </div>
        <div class="prod-body">
          <div class="prod-brand">${p.brand}</div>
          <div class="prod-name">${lang === 'en' && p.nameEn ? p.nameEn : p.name}</div>
          <div class="prod-desc">${lang === 'en' && p.descEn ? p.descEn : p.desc}</div>
          <div class="prod-foot">
            <span class="prod-price">${p.price}</span>
            <span class="prod-go">Olive Young Global ↗</span>
          </div>
        </div>
      </a>`).join('')
  }</div>`;
}

function selectKitTab(idx) {
  _activeTab = idx;
  document.querySelectorAll('.kit-tab').forEach((t, i) => t.classList.toggle('active', i === idx));
  renderKitProducts(idx);
}

function buildShareURL(muse, score) {
  return `${location.origin}${location.pathname}?muse=${encodeURIComponent(muse.name)}&group=${encodeURIComponent(muse.group)}&score=${score}&g=${muse.g}`;
}

function showShareToast(msg) {
  const t = $('shareToast');
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(t._tid);
  t._tid = setTimeout(() => { t.style.display = 'none'; }, 3000);
}

function renderSharePanel(muse, score) {
  const url = buildShareURL(muse, score);
  const txt = lang === 'ko'
    ? `나는 ${muse.name}(${muse.group})와 ${score}% 닮았대요! Mirror Muse에서 내 K-pop 뮤즈를 찾아보세요.`
    : `I'm ${score}% similar to ${nameEn(muse.name, muse.group)} of ${displayGroup(muse.group)}! Find your K-pop muse on Mirror Muse.`;

  history.replaceState({}, '', url);

  $('shrX').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(txt)}&url=${encodeURIComponent(url)}`;
  $('shrFb').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  $('shrCopy').onclick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      showShareToast(lang === 'ko' ? '링크 복사됨 ✓' : 'Link copied ✓');
    } catch { prompt(lang === 'ko' ? '링크를 복사하세요:' : 'Copy this link:', url); }
  };

  $('shrIg').onclick = () => {
    if (navigator.share) {
      navigator.share({ title: 'Mirror Muse', text: txt, url }).catch(() => downloadShareCard(muse, score));
    } else {
      downloadShareCard(muse, score);
    }
  };
}

function downloadShareCard(muse, score) {
  const c = document.createElement('canvas');
  c.width = 1080; c.height = 1080;
  const ctx = c.getContext('2d');

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, 1080, 1080);
  bg.addColorStop(0, '#f4ebe3'); bg.addColorStop(0.6, '#f0dfd4'); bg.addColorStop(1, '#e8c4b8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, 1080, 1080);

  // Decorative blobs
  ctx.beginPath(); ctx.arc(980, 100, 340, 0, Math.PI*2);
  ctx.fillStyle = 'rgba(200,127,115,.14)'; ctx.fill();
  ctx.beginPath(); ctx.arc(100, 1000, 260, 0, Math.PI*2);
  ctx.fillStyle = 'rgba(176,138,94,.11)'; ctx.fill();

  ctx.textAlign = 'center';

  // Brand
  ctx.font = 'italic 600 42px Georgia, serif';
  ctx.fillStyle = '#8c3a4f';
  ctx.fillText('MIRROR MUSE', 540, 180);

  // Gold rule
  ctx.beginPath(); ctx.moveTo(420, 215); ctx.lineTo(660, 215);
  ctx.strokeStyle = '#b08a5e'; ctx.lineWidth = 1.5; ctx.stroke();

  // Label
  ctx.font = 'italic 38px Georgia, serif';
  ctx.fillStyle = '#7a6a60';
  ctx.fillText(lang === 'ko' ? '가장 닮은 K-pop 뮤즈' : 'your closest K-pop muse', 540, 360);

  // Muse name
  ctx.font = 'bold 128px "Apple SD Gothic Neo", "Malgun Gothic", sans-serif';
  ctx.fillStyle = '#2c211d';
  ctx.fillText(nameEn(muse.name, muse.group), 540, 540);

  // Group
  ctx.font = '40px "Apple SD Gothic Neo", "Malgun Gothic", sans-serif';
  ctx.fillStyle = '#7a6a60';
  ctx.fillText(displayGroup(muse.group), 540, 630);

  // Score
  ctx.font = 'italic bold 100px Georgia, serif';
  ctx.fillStyle = '#8c3a4f';
  ctx.fillText(score + '%', 540, 790);
  ctx.font = '32px "Apple SD Gothic Neo", "Malgun Gothic", sans-serif';
  ctx.fillStyle = '#7a6a60';
  ctx.fillText(lang === 'ko' ? '닮음 지수' : 'resemblance', 540, 855);

  // URL hint
  ctx.font = '26px Georgia, serif';
  ctx.fillStyle = '#c0a898';
  ctx.fillText('mirror-muse.web.app', 540, 990);

  const link = document.createElement('a');
  link.download = `mirror-muse-${muse.name}.png`;
  link.href = c.toDataURL('image/png');
  link.click();
  showShareToast(lang === 'ko' ? '이미지 저장 완료! 인스타그램에 올려보세요 📷' : 'Image saved! Post it on Instagram 📷');
}

function checkShareParams() {
  const p = new URLSearchParams(location.search);
  if (!p.has('muse')) return;
  const name = p.get('muse'), group = p.get('group') || '';
  const score = Math.max(50, Math.min(99, parseInt(p.get('score')) || 85));
  const g = p.get('g') || 'F';
  const muse = MUSES.find(m => m.name === name && m.group === group) || MUSES.find(m => m.name === name);
  if (!muse) return;
  lastResult = {
    muse,
    runners: MUSES.filter(m => m.g === muse.g && m !== muse).slice(0, 3),
    features: { ...ARCH_T[muse.arch] },
    detections: { expressions: { neutral: 1 } },
    overrideScore: score
  };
  const canvas = $('resultCanvas');
  canvas.width = 300; canvas.height = 375;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#efe3da';
  ctx.fillRect(0, 0, 300, 375);
  ctx.fillStyle = 'rgba(140,58,79,.2)';
  ctx.font = '88px serif';
  ctx.textAlign = 'center';
  ctx.fillText('✦', 150, 215);
  updateResultUI();
  ['resultSection','cosmeticSection','tutorialSection'].forEach(id => $( id).style.display = 'block');
  setTimeout(() => $('resultSection').scrollIntoView({ behavior: 'smooth' }), 400);
}

const LANG_NAMES = {en:'English',ko:'한국어',ja:'日本語',zh:'中文',es:'Español',pt:'Português'};
const I18N = {
  en:{
    t:{
      docTitle:"MIRROR MUSE — Your K-pop Face Muse", tagline:"K-Beauty Resemblance Studio",
      heroEyebrow:"Find your face muse", heroTitle:"<span class='h1-pre'>The face in the mirror,</span>meet your closest<br><em>K-pop muse</em>.",
      heroLede:"We read your facial proportions and features to find your closest match among today's most popular K-pop stars — with the cosmetics and area-by-area tutorials to channel that look.",
      cta1:"Start the analysis →", cta2:"How it works", scroll:"scroll to begin",
      s01num:"01 — The Mirror", s01title:"Step up to the mirror", s01desc:"Face forward with your whole face visible, or upload a photo. Brighter light gives better results.",
      chipAuto:"Auto-detect", chipF:"Female muse pool", chipM:"Male muse pool", placeholder:"Turn on the camera or upload a face photo — it will be analyzed right here.",
      camBtn:"Turn on camera", shotBtn:"📸 Take photo", uploadBtn:"Upload photo", analyzeBtn:"✦ Find my muse",
      howtoTitle:"How the analysis works", step1:"We locate 68 facial points and measure your contour, eyes, nose and lips.",
      step2:"We compare them with the face-shape data of popular K-pop stars to score resemblance.",
      step3:"We recommend cosmetics tuned to your closest muse's signature mood.",
      step4:"We link you to 'most-viewed' YouTube tutorials, area by area.",
      privacy:"<b>Your photo is never sent to a server.</b> All face analysis runs inside your own browser, and no image is kept beyond the result.",
      s02num:"02 — Your Muse", s02title:"The muse you resemble most", matchwith:"your face muse is", simLabel:"resemblance", alsoResembling:"also resembling",
      s03num:"03 — The Kit", cosTitle:"Cosmetics to channel {name}", cosTitleMuse:"your muse",
      s03desc:"The key items that build your muse's face-shape mood. Follow the textures and color moods, area by area.",
      s04num:"04 — Watch & Learn", s04title:"Area-by-area makeup tutorials",
      s04desc:"Each button opens YouTube results sorted by <b>most views</b> right now — so you always get the most popular tutorials of the moment.",
      s04note:"※ Links open view-sorted search results, so the latest popular videos always appear.",
      restart:"↺ Try another photo", loaderText:"Waking the muse…", ribbon:"analysed", scanLabel:"analysing facial geometry…",
      ytSuffix:"· sorted by views", ytGo:"Watch on YouTube ↗", fullCoverTitle:"{name} — full cover makeup",
      stModelFail:"Couldn't load face model. Check connection.", stModelLoading:"Loading model…", stNoPhoto:"Take/upload a photo first.",
      stAnalyzing:"Analyzing proportions…", stNoFace:"No face found. Try again.", stDone:"Done! See below ↓",
      stPhotoReady:"Photo ready.", stImgFail:"Image fail.", stCamOn:"Camera on.", stCamFail:"Camera fail.", stCamNotReady:"Not ready.",
      partnerBtn:"Partnership",
      prevBadge:"✦ Sample Result", prevMuseGrp:"IVE · slim V-line", prevDisclaimer:"* Results vary for each person",
      shrCopyLbl:"Copy",
      s03desc:"The key items that build your muse's face-shape mood. Follow the textures and colour moods, area by area.",
      decoChip1:"✦ Instant", decoChip2:"◠ No server storage", decoChip3:"❀ Product picks",
      qrModalTitle:"Open on mobile", qrModalDesc:"Scan the QR code with your phone camera<br>to start analysing right away.",
      partnerTitle:"Partnership Enquiry", partnerDesc:"Send us your brand collab, ad or sponsorship proposal and we'll reply promptly.",
      cfName:"Name / Contact", cfNamePh:"Jane Doe", cfEmail:"Email", cfCompany:"Company / Brand", cfCompanyPh:"Enter your brand name",
      cfMessage:"Message", cfMessagePh:"Tell us your idea or proposal.", cfSubmit:"Send enquiry →", cfDone:"Thank you! We'll be in touch soon.",
      cfSending:"Sending…", cfErrRetry:"Send enquiry →", cfErrAlert:"Failed to send. Please try again.", cfNetAlert:"Network error. Please try again.",
      footerLine:"<span class='foot-brand'>Mirror Muse</span> — Resemblance analysis is an entertainment estimate based on facial proportion data and is not a scientific or medical judgement. The muse roster consists of 200 popular K-pop artists as of 2026; facial measurements are archetype-based estimates, not values from real photos. This service has no affiliation with the artists or agencies mentioned. Cosmetic recommendations are texture and colour-mood guides and do not endorse specific brands. Uploaded photos are processed only in the browser and are not stored on any server. © 2026",
    },
    mood:{happy:"bright, smiling expression",neutral:"calm expression",surprised:"lively expression",sad:"quiet expression",angry:"sharp gaze",fearful:"delicate expression",disgusted:"distinctive expression"},
    vtpl:"Your {mood} carries a hint of {name}'s {shape}. {vibe}",
    tn:{face:"Face shape",jaw:"Jawline",eye:"Eyes",lip:"Lips",spacing:"Spacing"},
    tv:{faceLong:"long",faceRound:"rounded",faceOval:"oval",jawV:"V-line",jawSquare:"angular",jawSoft:"soft",eyeBig:"large",eyeLong:"sleek",eyeBalanced:"balanced",lipFull:"full",lipThin:"thin",lipBalanced:"balanced",spacingWide:"wide",spacingClose:"close"},
    al:{doll_long:"doll shape",vline_cat:"cat shape",soft_oval:"oval shape",cat_defined:"defined cat",round_cute:"lovable shape",clear_chic:"chic shape",petite_neat:"neat oval",heart_alluring:"heart shape",golden_oval:"balanced oval",strong_jaw:"defined jaw",long_sharp:"sharp shape",broad_soft:"gentle shape"},
    ar:[["Base & Skin","base makeup skin"],["Eye Makeup","eye makeup"],["Brows","eyebrow tutorial"],["Lips","lip makeup"],["Blush & Contour","blush contour"]],
    fk:"full cover makeup tutorial",
    kits:{
      doll:{v:"Clear dewy glow and big round eyes.",F:[["Glow cushion","One shade up."],["Pearl shadow","For big eyes."],["Brow pencil","Soft arch."],["Glossy tint","Juicy."],["Cream blush","Rosy flush."]],M:[["Glow base","Clear."],["Shading","Define eyes."],["Brow","Natural."],["Lip balm","Pink."],["Shading","Bridge."]]},
      chic:{v:"Porcelain finish and long eye line.",F:[["Matte foundation","Cool tone."],["Matte shadow","Smoky."],["Brow","Angular."],["Matte lip","Defined."],["Contour","Cool tone."]],M:[["Matte base","Clean."],["Line shadow","Sharp."],["Straight brow","Bold."],["Nude lip","Beige."],["Contour","Slim."]]},
      natural:{v:"Subtle sheen and soft shading.",F:[["Satin cushion","Natural."],["Daily shadow","Warm."],["Natural brow","Curve."],["Velvet tint","Rose."],["Powder blush","Soft."]],M:[["Satin base","Even."],["Warm shading","Warm."],["Natural brow","Neat."],["Lip balm","Warm."],["Light shading","Dimension."]]},
      defined:{v:"Healthy sheen and defined cat-eye.",F:[["Satin foundation","Healthy."],["Warm shadow","Cat-eye."],["Full brow","Straight."],["MLBB matte","Nude."],["Matte blush","Long."]],M:[["Satin base","Clean."],["Cat-line","Sharp."],["Full brow","Defined."],["Lip balm","Natural."],["Contour","Soft."]]},
      elegant:{v:"Radiant sheen and striking eye.",F:[["Glow foundation","Radiant."],["Gold shadow","Defined."],["Arched brow","Elegant."],["Velvet lip","Vivid."],["Contour blush","Elegant."]],M:[["Glow base","Radiant."],["Gold shading","Alluring."],["Arched brow","Clear."],["Lip balm","Subtle."],["Contour","Along cheek."]]},
      clean:{v:"Crisp finish and restrained shading.",F:[["Matte base","Crisp."],["Neutral shadow","Clean."],["Slim brow","Thin."],["Matte lip","Calm."],["Neutral shading","Subtle."]],M:[["Matte base","Crisp."],["Neutral shading","Refined."],["Slim brow","Thin."],["Lip balm","Calm."],["Neutral shading","Tidy."]]},
    }
  },
  ko:{
    t:{
      docTitle:"MIRROR MUSE — 당신과 닮은 K-pop 뮤즈", tagline:"K-뷰티 닮은꼴 스튜디오",
      heroEyebrow:"Find your face muse", heroTitle:"<span class='h1-pre'>거울 속 그 얼굴,</span>가장 닮은 <em>K-pop</em><br>뮤즈를 만나다.",
      heroLede:"얼굴의 비율과 이목구비를 읽어 현시점 인기 K-pop 스타 중 당신과 가장 닮은 뮤즈를 찾고, 그 무드에 닿는 화장품과 부위별 튜토리얼까지 안내해요.",
      cta1:"분석 시작하기 →", cta2:"어떻게 작동하나요", scroll:"scroll to begin",
      s01num:"01 — The Mirror", s01title:"거울 앞에 서기", s01desc:"정면을 바라보고 얼굴 전체가 보이게 촬영하거나 사진을 올려주세요. 밝은 곳일수록 정확해요.",
      chipAuto:"성별 자동 인식", chipF:"여성 뮤즈 풀", chipM:"남성 뮤즈 풀", placeholder:"카메라를 켜거나 얼굴 사진을 업로드하면 이 자리에서 분석돼요.",
      camBtn:"카메라 켜기", shotBtn:"📸 촬영하기", uploadBtn:"사진 업로드", analyzeBtn:"✦ 닮은 뮤즈 찾기",
      howtoTitle:"분석은 이렇게 진행돼요", step1:"얼굴 68개 포인트를 찾아 윤곽·눈·코·입의 비율을 측정해요.",
      step2:"인기 K-pop 스타들의 얼굴형 데이터와 비교해 닮음 지수를 계산해요.",
      step3:"가장 닮은 뮤즈의 시그니처 무드에 맞춘 화장품을 추천해요.",
      step4:"부위별로 '조회수 순' 유튜브 튜토리얼로 바로 연결해 드려요.",
      privacy:"<b>사진은 서버로 전송되지 않습니다.</b> 모든 얼굴 분석은 브라우저 안에서만 이루어집니다.",
      s02num:"02 — Your Muse", s02title:"당신과 가장 닮은 뮤즈", matchwith:"your face muse is", simLabel:"resemblance", alsoResembling:"also resembling",
      s03num:"03 — The Kit", cosTitle:"{name}에게 닿는 화장품", cosTitleMuse:"뮤즈",
      s03desc:"닮은 뮤즈의 얼굴형 무드를 만드는 핵심 아이템이에요.",
      s04num:"04 — Watch & Learn", s04title:"부위별 메이크업 튜토리얼",
      s04desc:"조회수가 가장 높은 영상 순으로 연결됩니다.",
      s04note:"※ 조회수 정렬 검색으로 연결됩니다.",
      restart:"↺ 다시 하기", loaderText:"뮤즈를 깨우는 중…", ribbon:"analysed", scanLabel:"얼굴 분석 중…",
      ytSuffix:"· 조회수 높은 순", ytGo:"YouTube ↗", fullCoverTitle:"{name} 풀 커버",
      stModelFail:"모델 로드 실패", stModelLoading:"준비 중…", stNoPhoto:"사진 필요",
      stAnalyzing:"분석 중…", stNoFace:"얼굴 없음", stDone:"완료 ↓",
      stPhotoReady:"사진 준비됨", stImgFail:"이미지 오류", stCamOn:"카메라 켬", stCamFail:"카메라 오류", stCamNotReady:"준비 안 됨",
      partnerBtn:"제휴 문의",
      prevBadge:"✦ 분석 결과 예시", prevMuseGrp:"IVE · 갸름한 V라인형", prevDisclaimer:"* 실제 분석 결과는 개인마다 달라요",
      shrCopyLbl:"복사",
      s03desc:"닮은 뮤즈의 얼굴형 무드를 만드는 핵심 아이템이에요. 부위별로 텍스처와 컬러 무드를 따라가 보세요.",
      decoChip1:"✦ 즉시 분석", decoChip2:"◠ 서버 저장 없음", decoChip3:"❀ 화장품 추천",
      qrModalTitle:"모바일로 열기", qrModalDesc:"QR 코드를 스마트폰 카메라로 스캔하면<br>바로 분석을 시작할 수 있어요.",
      partnerTitle:"제휴 문의", partnerDesc:"브랜드 협업·광고·콜라보 제안을 보내주시면 빠르게 답변드릴게요.",
      cfName:"이름 / 담당자", cfNamePh:"홍길동", cfEmail:"이메일", cfCompany:"회사 / 브랜드명", cfCompanyPh:"브랜드명을 입력해주세요",
      cfMessage:"문의 내용", cfMessagePh:"제안하실 내용을 자유롭게 작성해주세요.", cfSubmit:"문의 보내기 →", cfDone:"감사합니다! 빠른 시일 내 연락드릴게요.",
      cfSending:"전송 중…", cfErrRetry:"문의 보내기 →", cfErrAlert:"전송에 실패했어요. 다시 시도해주세요.", cfNetAlert:"네트워크 오류가 발생했어요. 다시 시도해주세요.",
      footerLine:"<span class='foot-brand'>Mirror Muse</span> — 닮음 분석은 얼굴 비율 데이터를 기반으로 한 엔터테인먼트용 추정이며 과학적·의학적 판단이 아닙니다. 뮤즈 명단은 2026년 기준 인기 K-pop 아티스트 200명으로 구성했으며, 얼굴형 수치는 아키타입 기반 추정값입니다. 언급된 아티스트 및 소속사와 제휴 관계가 없습니다. 화장품 추천은 무드 가이드이며 특정 브랜드를 보증하지 않습니다. 업로드한 사진은 브라우저에서만 처리되고 서버에 저장되지 않습니다. © 2026",
    },
    mood:{happy:"웃는 표정에서",neutral:"정제된 표정에서",surprised:"생기 있는 표정에서",sad:"잔잔한 표정에서",angry:"또렷한 눈빛에서",fearful:"섬세한 표정에서",disgusted:"개성 있는 표정에서"},
    vtpl:"{mood} {name}의 {shape} 무드가 묻어나요. {vibe}",
    tn:{face:"얼굴형",jaw:"턱선",eye:"눈",lip:"입술",spacing:"간격"},
    tv:{faceLong:"길고 갸름",faceRound:"동그란",faceOval:"타원형",jawV:"V라인",jawSquare:"각진",jawSoft:"부드러운",eyeBig:"큼직",eyeLong:"시원한",eyeBalanced:"균형",lipFull:"도톰",lipThin:"얇은",lipBalanced:"균형",spacingWide:"시원",spacingClose:"또렷"},
    al:{doll_long:"인형형",vline_cat:"고양이형",soft_oval:"타원형",cat_defined:"고양이형",round_cute:"사랑스러운형",clear_chic:"시크형",petite_neat:"타원형",heart_alluring:"하트형",golden_oval:"타원형",strong_jaw:"턱선형",long_sharp:"윤곽형",broad_soft:"윤곽형"},
    ar:[["베이스","베이스 메이크업"],["아이","아이 메이크업"],["눈썹","눈썹 그리는 법"],["립","립 메이크업"],["블러셔","블러셔 쉐딩"]],
    fk:"커버 메이크업",
    kits:{
      doll:{v:"물광 피부와 동그랗고 큰 눈.",F:[["쿠션","촉촉."],["펄 섀도우","눈 크게."],["브로우","아치형."],["틴트","글로시."],["블러셔","핑크."]],M:[["베이스","화사."],["섀도우","부드럽게."],["브로우","곡선."],["립밤","핑크."],["쉐딩","콧대."]]},
      chic:{v:"도자기 피부와 시크한 무드.",F:[["파운데이션","매끈."],["섀도우","스모키."],["브로우","직선."],["립","매트."],["쉐딩","음영."]],M:[["베이스","깔끔."],["섀도우","날렵."],["브로우","일자."],["립","누드."],["쉐딩","갸름."]]},
      natural:{v:"은은한 윤기와 따뜻한 무드.",F:[["쿠션","자연."],["섀도우","음영."],["브로우","곡선."],["틴트","벨벳."],["블러셔","은은."]],M:[["베이스","윤기."],["섀도우","따뜻."],["브로우","단정."],["립밤","혈색."],["쉐딩","가볍게."]]},
      defined:{v:"건강한 윤기와 또렷한 무드.",F:[["파운데이션","생기."],["섀도우","캣아이."],["브로우","채워."],["립","누드."],["블러셔","시크."]],M:[["베이스","깔끔."],["섀도우","라인."],["브로우","또렷."],["립밤","혈색."],["컨투어","음영."]]},
      elegant:{v:"화사한 윤기와 우아한 무드.",F:[["파운데이션","우아."],["섀도우","음영."],["브로우","아치."],["립","강렬."],["블러셔","우아."]],M:[["베이스","윤기."],["섀도우","고혹."],["브로우","아치."],["립밤","혈색."],["쉐딩","음영."]]},
      clean:{v:"매끈한 피부와 단아한 무드.",F:[["베이스","깔끔."],["섀도우","단정."],["브로우","슬림."],["립","차분."],["쉐딩","음영."]],M:[["베이스","깔끔."],["섀도우","세련."],["브로우","슬림."],["립밤","차분."],["쉐딩","정돈."]]},
    }
  }
};

let lang = 'en', modelsReady = false, stream = null, analysisImage = null, genderMode = 'auto', lastResult = null;
const $ = (id) => document.getElementById(id);

function setLanguage(l){
  lang = I18N[l] ? l : 'en';
  const d = I18N[lang];
  document.title = d.t.docTitle;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if(d.t[k]) el.textContent = d.t[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if(d.t[k]) el.innerHTML = d.t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if(d.t[k]) el.placeholder = d.t[k];
  });
  $('langSelect').value = lang;
  if(lastResult) updateResultUI();
  else if($('kitProducts').innerHTML) renderKitProducts(_activeTab);
}

async function loadModels(){
  try {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
    ]);
    modelsReady = true;
  } catch(e) {
    console.error(e);
    setStatus(I18N[lang].t.stModelFail, 'err');
  } finally {
    const ldr = $('loader');
    if(ldr) ldr.classList.add('hide');
  }
}

function setStatus(msg, type=''){
  const s = $('status');
  if(s){ s.textContent = msg; s.className = 'status' + (type?' '+type:''); }
}

const dist = (a,b) => Math.hypot(a.x-b.x, a.y-b.y);
const mid = (a,b) => ({x:(a.x+b.x)/2, y:(a.y+b.y)/2});

function extractFeatures(landmarks){
  const p = landmarks.positions;
  const faceWidth = dist(p[1], p[15]) || 1;
  const faceHeight = dist(mid(p[19],p[24]), p[8]) * 1.35;
  const eyeW = (dist(p[36],p[39]) + dist(p[42],p[45])) / 2;
  return {
    faceRatio: faceHeight/faceWidth,
    jawRatio: dist(p[4],p[12])/faceWidth,
    eyeSize: eyeW/faceWidth,
    eyeSpacing: dist(p[39],p[42])/faceWidth,
    noseWidth: dist(p[31],p[35])/faceWidth,
    lipFull: dist(p[51],p[57])/faceWidth,
  };
}

function getScore(user, muse){
  const spread = {faceRatio:.16,jawRatio:.085,eyeSize:.045,eyeSpacing:.055,noseWidth:.05,lipFull:.045};
  const weight = {faceRatio:1.0,jawRatio:1.1,eyeSize:1.2,eyeSpacing:.9,noseWidth:.8,lipFull:1.0};
  let s=0, w=0;
  for(const k in spread){
    const d = (user[k]-muse.t[k])/spread[k];
    s += d*d*weight[k];
    w += weight[k];
  }
  return Math.max(78, Math.min(98, Math.round(97 - Math.sqrt(s/w)*8.5)));
}

const AREA_ICONS = ['✦','◠','⌒','❀','❍'];

function updateResultUI(){
  if(!lastResult) return;
  const d = I18N[lang];
  const { muse, runners, features, detections } = lastResult;

  const scoreVal = lastResult.overrideScore !== undefined ? lastResult.overrideScore : getScore(features, muse);
  $('rStarName').textContent = displayMuseName(muse.name, muse.group);
  $('rStarGroup').textContent = displayGroup(muse.group);
  $('rSim').textContent = scoreVal;
  $('rSimBar').style.width = scoreVal + '%';

  // 모바일 사진 오버레이
  $('rPhotoStarName').textContent = displayMuseName(muse.name, muse.group);
  $('rPhotoGroup').textContent = displayGroup(muse.group);
  $('rPhotoSim').textContent = scoreVal;
  $('rPhotoName').style.display = 'block';

  const exp = detections.expressions;
  const topExp = Object.keys(exp).reduce((a,b)=>exp[a]>exp[b]?a:b);
  const moodStr = d.mood[topExp] || d.mood.neutral;
  $('rVibe').textContent = d.vtpl
    .replace('{mood}', moodStr)
    .replace('{name}', displayMuseName(muse.name, muse.group))
    .replace('{shape}', d.al[muse.arch])
    .replace('{vibe}', d.kits[muse.kit].v);

  const t = d.tn; const v = d.tv;
  const traitData = [
    [t.face, features.faceRatio>1.50?v.faceLong:features.faceRatio<1.36?v.faceRound:v.faceOval],
    [t.jaw, features.jawRatio<0.77?v.jawV:features.jawRatio>0.84?v.jawSquare:v.jawSoft],
    [t.eye, features.eyeSize>0.275?v.eyeBig:features.eyeSize<0.245?v.eyeLong:v.eyeBalanced],
    [t.lip, features.lipFull>0.185?v.lipFull:features.lipFull<0.155?v.lipThin:v.lipBalanced],
    [t.spacing, features.eyeSpacing>0.31?v.spacingWide:v.spacingClose],
  ];
  $('rTraits').innerHTML = traitData.map(tr=>`<span class="trait">${tr[0]}: <b>${tr[1]}</b></span>`).join('');
  $('rRunners').innerHTML = runners.map(r=>`<span class="runner"><em>${displayMuseName(r.name, r.group)}</em> (${displayGroup(r.group)})</span>`).join('');

  $('s03title').textContent = d.t.cosTitle.replace('{name}', displayMuseName(muse.name, muse.group));
  const kitPicks = d.kits[muse.kit][muse.g];
  _activeTab = 0;
  $('kitTabs').innerHTML = PRODUCT_DB.map((db, i) => `
    <button class="kit-tab ${i === 0 ? 'active' : ''}" onclick="selectKitTab(${i})">
      <span class="tab-num">0${i+1}</span>
      <span class="tab-area">${kitPicks[i][0]}</span>
      <span class="tab-pick">${kitPicks[i][1]}</span>
    </button>`).join('');
  renderKitProducts(0);

  const museName4search = nameEn(muse.name, muse.group);
  const tuts = d.ar.map(a => ({ label:a[0], q: museName4search + ' ' + a[1] }));
  const fullCover = { label: d.t.fullCoverTitle.replace('{name}', displayMuseName(muse.name, muse.group)), q: museName4search + ' ' + d.fk };
  const allTuts = [fullCover, ...tuts];
  $('tutList').innerHTML = allTuts.map((t,i)=>`
    <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(t.q)}&sp=CAMSAhAB" target="_blank" class="tut-row">
      <div class="tut-icon">${AREA_ICONS[i-1] || '✦'}</div>
      <div class="tut-main">
        <div class="t1">${t.label}</div>
        <div class="t2">${t.q} ${d.t.ytSuffix}</div>
      </div>
      <div class="tut-go">${d.t.ytGo}</div>
    </a>
  `).join('');

  renderSharePanel(muse, scoreVal);
}

async function runAnalysis(){
  if(!modelsReady) { setStatus(I18N[lang].t.stModelLoading, 'err'); return; }
  if(!analysisImage) { setStatus(I18N[lang].t.stNoPhoto, 'err'); return; }

  $('analyzeBtn').disabled = true;
  $('scan').classList.add('on');

  const steps = lang === 'ko'
    ? ['얼굴 68개 포인트 감지 중…', '눈·코·입 비율 측정 중…', 'K-pop 스타 데이터와 비교 중…', '뮤즈를 찾는 중…']
    : ['Detecting 68 facial points…', 'Measuring eye, nose & lip ratios…', 'Comparing with K-pop star data…', 'Finding your muse…'];

  let si = 0;
  setStatus(steps[0]);
  const ticker = setInterval(() => {
    si = Math.min(si + 1, steps.length - 1);
    setStatus(steps[si]);
  }, 800);

  const [det] = await Promise.all([
    faceapi.detectSingleFace(analysisImage,
      new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.5 }))
      .withFaceLandmarks().withFaceExpressions().withAgeAndGender(),
    new Promise(r => setTimeout(r, 3000)),
  ]);

  clearInterval(ticker);
  $('scan').classList.remove('on');

  if(!det){
    setStatus(I18N[lang].t.stNoFace, 'err');
    $('analyzeBtn').disabled = false;
    return;
  }

  const features = extractFeatures(det.landmarks);
  const gTarget = genderMode === 'auto' ? (det.gender === 'female' ? 'F' : 'M') : genderMode;
  const scored = MUSES.filter(m => m.g === gTarget)
    .map(m => ({ muse: m, score: getScore(features, m) }))
    .sort((a,b) => b.score - a.score);

  lastResult = { muse: scored[0].muse, runners: scored.slice(1, 4).map(s => s.muse), features, detections: det };

  const canvas = $('resultCanvas');
  const ctx = canvas.getContext('2d');
  const ratio = analysisImage.naturalHeight / analysisImage.naturalWidth;
  canvas.width = 600; canvas.height = 600 * ratio;
  ctx.drawImage(analysisImage, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,247,242,.85)';
  const sx = canvas.width / analysisImage.naturalWidth, sy = canvas.height / analysisImage.naturalHeight;
  det.landmarks.positions.forEach(p => {
    ctx.beginPath(); ctx.arc(p.x*sx, p.y*sy, 1.8, 0, Math.PI*2); ctx.fill();
  });

  updateResultUI();
  $('resultSection').style.display = 'block';
  $('cosmeticSection').style.display = 'block';
  $('tutorialSection').style.display = 'block';
  setStatus(I18N[lang].t.stDone, 'ok');
  window.scrollTo({ top: $('resultSection').offsetTop - 20, behavior: 'smooth' });
}

$('langSelect').onchange = (e) => setLanguage(e.target.value);
$('camBtn').onclick = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
    $('liveVideo').srcObject = stream;
    $('liveVideo').style.display = 'block';
    $('placeholder').style.display = 'none';
    $('camBtn').style.display = 'none';
    $('shotBtn').style.display = 'inline-flex';
    setStatus(I18N[lang].t.stCamOn);
  } catch(e) { setStatus(I18N[lang].t.stCamFail, 'err'); }
};
$('shotBtn').onclick = () => {
  const video = $('liveVideo');
  const canvas = $('previewCanvas');
  canvas.width = video.videoWidth; canvas.height = video.videoHeight;
  canvas.getContext('2d').translate(canvas.width, 0);
  canvas.getContext('2d').scale(-1, 1);
  canvas.getContext('2d').drawImage(video, 0, 0);
  analysisImage = new Image();
  analysisImage.src = canvas.toDataURL('image/jpeg');
  analysisImage.onload = () => {
    $('liveVideo').style.display = 'none';
    canvas.style.display = 'block';
    $('shotBtn').style.display = 'none';
    $('analyzeBtn').style.display = 'inline-flex';
    setStatus(I18N[lang].t.stPhotoReady, 'ok');
    if(stream) stream.getTracks().forEach(t => t.stop());
  };
};
$('uploadBtn').onclick = () => $('fileInput').click();
$('fileInput').onchange = (e) => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    analysisImage = new Image();
    analysisImage.src = ev.target.result;
    analysisImage.onload = () => {
      $('placeholder').style.display = 'none';
      $('liveVideo').style.display = 'none';
      const canvas = $('previewCanvas');
      const ratio = analysisImage.naturalHeight / analysisImage.naturalWidth;
      canvas.width = 800; canvas.height = 800 * ratio;
      canvas.getContext('2d').drawImage(analysisImage, 0, 0, canvas.width, canvas.height);
      canvas.style.display = 'block';
      $('camBtn').style.display = 'inline-flex';
      $('shotBtn').style.display = 'none';
      $('analyzeBtn').style.display = 'inline-flex';
      setStatus(I18N[lang].t.stPhotoReady, 'ok');
    };
  };
  reader.readAsDataURL(file);
};
$('analyzeBtn').onclick = runAnalysis;
$('restartBtn').onclick = () => location.reload();
document.querySelectorAll('.chip').forEach(ch => {
  ch.onclick = () => {
    document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
    ch.setAttribute('aria-pressed', 'true');
    genderMode = ch.getAttribute('data-gender');
  };
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---- QR modal ---- */
const qrModal = $('qrModal');
$('qrBtn').addEventListener('click', () => {
  const url = location.origin + location.pathname;
  $('qrModalImg').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&bgcolor=ffffff&color=2c211d&margin=8&qzone=1`;
  $('qrModalUrl').textContent = url;
  qrModal.classList.add('open');
});
$('qrModalClose').addEventListener('click', () => qrModal.classList.remove('open'));
qrModal.addEventListener('click', e => { if(e.target === qrModal) qrModal.classList.remove('open'); });
/* ---- partner modal ---- */
const modal = $('partnerModal');
$('partnerBtn').addEventListener('click', () => modal.classList.add('open'));
$('modalClose').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') { modal.classList.remove('open'); qrModal.classList.remove('open'); }
});
$('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = $('cfSubmit');
  btn.disabled = true; btn.textContent = I18N[lang].t.cfSending;
  try {
    const res = await fetch(e.target.action, {
      method:'POST', body: new FormData(e.target), headers:{ Accept:'application/json' }
    });
    if(res.ok){
      e.target.reset();
      $('cfDone').style.display = 'block';
      btn.style.display = 'none';
    } else {
      btn.disabled = false; btn.textContent = I18N[lang].t.cfErrRetry;
      alert(I18N[lang].t.cfErrAlert);
    }
  } catch {
    btn.disabled = false; btn.textContent = I18N[lang].t.cfErrRetry;
    alert(I18N[lang].t.cfNetAlert);
  }
});

const userLang = navigator.language.split('-')[0];
setLanguage(LANG_NAMES[userLang] ? userLang : 'en');
loadModels();
checkShareParams();
