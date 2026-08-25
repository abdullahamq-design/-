/* ============================================================ */
/* بيانات الهوية والأصول */
/* ============================================================ */
const LOGO = {
  colorMark: "assets/logo-color-mark.png",
  whiteLockup: "assets/logo-white-lockup.png",
  whiteMark: "assets/logo-white-mark.png",
  colorLockup: "assets/logo-color-lockup.png",
};

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2z"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>`,
  save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h11l3 3v13H5V4z"/><path d="M8 4v6h8V4M8 14h8v6H8z"/></svg>`,
  year: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><circle cx="8" cy="14.5" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="14.5" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="14.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  chevronNext: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>`,
  chevronPrev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4z"/><path d="M7 5H4a3 3 0 003 3M17 5h3a3 3 0 01-3 3"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6a1 1 0 011 1v1h1a2 2 0 012 2v13a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h1V4a1 1 0 011-1z"/><path d="M8 12h8M8 16h8M8 8h3"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
};

/* ============================================================ */
/* الثوابت */
/* ============================================================ */
const DAYS = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const DAY_INDEX = {0:"الأحد",1:"الاثنين",2:"الثلاثاء",3:"الأربعاء",4:"الخميس",5:"الجمعة",6:"السبت"};
const TASK_TYPES = ["يومي", "أسبوعي", "شهري", "لمرة واحدة"];
const PRIORITIES = ["عالية", "متوسطة", "منخفضة"];
const PRIORITY_COLOR = { "عالية":"var(--coral)", "متوسطة":"var(--cyan)", "منخفضة":"var(--blue)" };
const STORAGE_KEY = "andalus-activity-platform-data";
const AUTH_KEY = "andalus-activity-platform-auth";
const LOGIN_USERNAME = "عبدالله";
const LOGIN_PASSWORD = "1083991719";

const COMP_LEVELS = ["مدرسي","تعليم المدينة","منطقة","وطني","دولي"];
const COMP_STATUSES = ["تسجيل مفتوح","قيد التحضير","جارية","منتهية"];
const COMP_STATUS_COLOR = {
  "تسجيل مفتوح":"var(--coral)", "قيد التحضير":"var(--cyan)", "جارية":"var(--blue)", "منتهية":"var(--muted)"
};

const DEFAULT_DATA = {
  vision: {
    schoolVision: "بناء جيل متوازن معرفياً ومهارياً ووجدانياً، من خلال أنشطة لاصفية نوعية تعزز الانتماء والمواطنة.",
    activityMission: "تفعيل البرنامج السنوي للنشاط الطلابي بما يخدم أهداف المدرسة ويحقق مشاركة واسعة من الطلاب.",
    ministryGoals: "التوافق مع الإطار العام للنشاط الطلابي الصادر من وزارة التعليم، ورؤية المملكة 2030 في تنمية المهارات والقيم."
  },
  weekly: [
    {id:"w1", day:"الأحد", time:"07:15", title:"الإذاعة المدرسية الصباحية", location:"الطابور"},
    {id:"w2", day:"الاثنين", time:"11:00", title:"اجتماع لجنة النشاط", location:"غرفة النشاط"},
    {id:"w3", day:"الأربعاء", time:"12:30", title:"نادي الأنشطة اللاصفية", location:"الملعب المغطى"}
  ],
  weeklyPlan: [
    {id:"p1", startDate:"2026-08-30", endDate:"2026-09-03", focus:"الأسبوع التمهيدي: تزيين الأروقة بالملصقات وبوابة بالونات، إذاعة ترحيبية بكلمة المدير والوكيل، ضيافة ترحيبية بكل فصل (تمر وقهوة)، توزيع بطاقات تحفيزية، وجولة تعريفية بالأنشطة والمرافق للطلاب المستجدين."},
    {id:"p2", startDate:"2026-09-06", endDate:"2026-09-10", focus:"تشكيل مجلس النشاط الطلابي وانتخاب قادة الفصول، وتوزيع اللجان (إعلامية، رياضية، ثقافية، اجتماعية)."},
    {id:"p3", startDate:"2026-09-13", endDate:"2026-09-17", focus:"إطلاق برنامج الإذاعة المدرسية الأسبوعي، وتفعيل نادي القراءة، وتحفيز الطلاب المتميزين على التسجيل في أولمبياد «إبداع» و«نسمو» وأولمبياد الموهبة (قبل إغلاق التسجيل 30 سبتمبر)."},
    {id:"p4", startDate:"2026-09-20", endDate:"2026-09-24", focus:"الاحتفال باليوم الوطني السعودي (23 سبتمبر): فعاليات وطنية ومسابقة رسم، مع متابعة نادي الابتكار وتذكير الطلاب بقرب إغلاق تسجيل الأولمبياد الوطني نهاية الشهر."},
    {id:"p5", startDate:"2026-09-27", endDate:"2026-10-01", focus:"الدفعة الأخيرة لتسجيل طلاب نادي الابتكار في أولمبياد «إبداع» و«نسمو» وأولمبياد الموهبة قبل إغلاق الباب 30 سبتمبر، وبدء أسبوع اللياقة البدنية ودوري كرة القدم بين الفصول."},
    {id:"p6", startDate:"2026-10-04", endDate:"2026-10-08", focus:"اليوم العالمي للمعلم (5 أكتوبر): فعالية تكريم المعلمين من الطلاب ومسابقة «أجمل رسالة شكر»، وتنسيق لقاء أولياء الأمور مع إدارة المدرسة."},
    {id:"p7", startDate:"2026-10-11", endDate:"2026-10-15", focus:"أسبوع الموهوبين: عرض مشاريع الطلاب الموهوبين وورشة اكتشاف مواهب، مع تنظيم بازار طلابي والتنسيق مع وكالة شؤون الطلاب لبرنامج رحلات العمرة (كل صف في يوم)."},
    {id:"p8", startDate:"2026-10-18", endDate:"2026-10-22", focus:"تفعيل نادي الابتكار والعلوم: ورش تدريبية لفرق أولمبياد «إبداع» و«نسمو»، ومشاركة نادي النشاط في فعالية اليوم المفتوح للمدرسة."},
    {id:"p9", startDate:"2026-10-25", endDate:"2026-10-29", focus:"أسبوع المرور: محاضرة توعوية بالتعاون مع إدارة المرور، ومسابقة «قائد المستقبل الآمن»."},
    {id:"p10", startDate:"2026-11-01", endDate:"2026-11-05", focus:"تقييم منتصف الفصل: استبيان رضا الطلاب عن الأنشطة، واجتماع لجنة النشاط لمراجعة الخطة."},
    {id:"p11", startDate:"2026-11-08", endDate:"2026-11-12", focus:"نادي الإعلام المدرسي: إصدار أول عدد من الصحيفة الإلكترونية للمدرسة، وتغطية فعاليات الفصل."},
    {id:"p12", startDate:"2026-11-15", endDate:"2026-11-19", focus:"مسابقة «الأندلس للخطابة»: تصفيات على مستوى الفصول تمهيداً للنهائي، والاحتفاء باليوم العالمي للتسامح (16 نوفمبر) بفقرة إذاعية قصيرة."},
    {id:"p13", startDate:"2026-11-22", endDate:"2026-11-28", focus:"إجازة الخريف — لا فعاليات مجدولة هذا الأسبوع. فرصة لتوثيق إنجازات الفصل حتى الآن وتجهيز خطة الأسابيع القادمة."},
    {id:"p14", startDate:"2026-11-29", endDate:"2026-12-03", focus:"العودة من إجازة الخريف: نهائي مسابقة الخطابة وتكريم الفائزين، ندوة توعوية عن الاستخدام الآمن للإنترنت والألعاب الإلكترونية، ومتابعة فرق نادي الابتكار قبل نهائيات يناير."},
    {id:"p15", startDate:"2026-12-06", endDate:"2026-12-10", focus:"تجهيز فعاليات اليوم العالمي للغة العربية: مسابقة الخط العربي والإملاء."},
    {id:"p16", startDate:"2026-12-13", endDate:"2026-12-17", focus:"الاحتفال باليوم العالمي للغة العربية (18 ديسمبر): مسابقة الخط والإلقاء الشعري، ومعرض عن جمال اللغة العربية."},
    {id:"p17", startDate:"2026-12-20", endDate:"2026-12-24", focus:"مراجعة إنجازات الفصل الأول وتوثيقها في ملف الإنجاز، والتحضير لاختبارات نهاية الفصل."},
    {id:"p18", startDate:"2026-12-27", endDate:"2026-12-31", focus:"متابعة اختبارات نهاية الفصل الأول بأجواء داعمة، وتجهيز التقرير الفصلي الشامل، مع مراجعة أخيرة لمشاريع مرشّحي نادي الابتكار قبل نهائيات إبداع/نسمو أواخر يناير بالرياض."},
    {id:"p19", startDate:"2027-01-17", endDate:"2027-01-21", focus:"استئناف الفصل الثاني: مراجعة الخطة التشغيلية في ضوء نتائج الفصل الأول، وتحديث لوحة الإنجازات."},
    {id:"p20", startDate:"2027-01-24", endDate:"2027-01-28", focus:"تفعيل نادي الحاسب والتقنية: ورشة عن الذكاء الاصطناعي وأدواته للطلاب."},
    {id:"p21", startDate:"2027-01-31", endDate:"2027-02-04", focus:"أسبوع الإبداع الرقمي: عرض إبداعات فنية وتقنية من نادي المهارات الرقمية."},
    {id:"p22", startDate:"2027-02-07", endDate:"2027-02-11", focus:"تجهيز فعاليات يوم التأسيس وتوزيع مهام اللجان لإحياء المناسبة."},
    {id:"p23", startDate:"2027-02-14", endDate:"2027-02-18", focus:"بروفات فقرات ومسابقات يوم التأسيس القادم، وتجهيز معرض تراثي مصغّر."},
    {id:"p24", startDate:"2027-02-21", endDate:"2027-02-25", focus:"إحياء يوم التأسيس (22 فبراير): فعالية تراثية ومسابقة «تراثنا هويتنا»."},
    {id:"p25", startDate:"2027-03-14", endDate:"2027-03-18", focus:"العودة من إجازة عيد الفطر: استئناف الأنشطة، والاحتفال المتأخر بيوم العلم (11 مارس) الذي تزامن مع الإجازة."},
    {id:"p26", startDate:"2027-03-21", endDate:"2027-03-25", focus:"انطلاق «تحدي القراءة الأندلسي»: المرحلة المدرسية بالتعاون مع مكتبة المدرسة."},
    {id:"p27", startDate:"2027-03-28", endDate:"2027-04-01", focus:"أسبوع الفنون: معرض فني ومسرحية قصيرة من إعداد نادي المسرح المدرسي."},
    {id:"p28", startDate:"2027-04-04", endDate:"2027-04-08", focus:"اليوم العالمي للصحة (7 أبريل): محاضرة توعوية ومسابقة رياضية «الأندلس الأصح»."},
    {id:"p29", startDate:"2027-04-11", endDate:"2027-04-15", focus:"استعدادات الرحلة العلمية السنوية، والتنسيق مع الشؤون المدرسية وأولياء الأمور."},
    {id:"p30", startDate:"2027-04-18", endDate:"2027-04-22", focus:"تنفيذ الرحلة العلمية/الترفيهية السنوية لطلاب النشاط المتميزين."},
    {id:"p31", startDate:"2027-04-25", endDate:"2027-04-29", focus:"تجهيز معرض النشاط الختامي، وتوثيق إنجازات العام لعرضها على الإدارة ووزارة التعليم."},
    {id:"p32", startDate:"2027-05-16", endDate:"2027-05-20", focus:"العودة من إجازة عيد الأضحى: استكمال تجهيزات المعرض الختامي للأنشطة."},
    {id:"p33", startDate:"2027-05-23", endDate:"2027-05-27", focus:"إقامة معرض النشاط الختامي وحفل تكريم الطلاب والمعلمين المتميزين في الأنشطة."},
    {id:"p34", startDate:"2027-05-30", endDate:"2027-06-03", focus:"رفع التقرير السنوي الشامل لريادة النشاط لوكيل الشؤون المدرسية وإدارة التعليم."},
    {id:"p35", startDate:"2027-06-06", endDate:"2027-06-10", focus:"دعم أسبوع الاختبارات النهائية بأجواء محفزة: لوحات تحفيزية وركن تشجيعي."},
    {id:"p36", startDate:"2027-06-13", endDate:"2027-06-17", focus:"إغلاق ملفات الأندية والأرشفة النهائية، وتوثيق الدروس المستفادة للعام القادم."}
  ],
  tasks: [
    {id:"t1", title:"رفع التقرير الأسبوعي لوكيل الشؤون المدرسية", type:"أسبوعي", day:"الخميس", dueDate:"", priority:"عالية", done:false},
    {id:"t2", title:"تحديث لوحة إعلانات النشاط", type:"يومي", day:"", dueDate:"", priority:"متوسطة", done:false},
    {id:"t3", title:"تدشين قيمة الشهر", type:"شهري", day:"", dueDate:"", priority:"متوسطة", done:false},
    {id:"t4", title:"متابعة تعزيز الانضباط المدرسي مع المرشد الطلابي", type:"أسبوعي", day:"الأحد", dueDate:"", priority:"متوسطة", done:false}
  ],
  competitions: [
    {id:"c1", name:"الأولمبياد الوطني للإبداع العلمي «إبداع»", organizer:"مؤسسة موهبة ووزارة التعليم", level:"دولي", status:"تسجيل مفتوح", deadline:"2026-09-30", result:"", students:[], evidence:[]},
    {id:"c2", name:"أولمبياد العلوم والرياضيات الوطني «نسمو»", organizer:"مؤسسة موهبة ووزارة التعليم", level:"دولي", status:"تسجيل مفتوح", deadline:"2026-09-30", result:"", students:[], evidence:[]},
    {id:"c3", name:"أولمبياد الموهبة الوطني (النسخة الأولى)", organizer:"وزارة التعليم ومؤسسة موهبة", level:"وطني", status:"تسجيل مفتوح", deadline:"2026-09-30", result:"", students:[], evidence:[]},
    {id:"c4", name:"تحدي القراءة العربي", organizer:"مؤسسة محمد بن راشد آل مكتوم للمعرفة", level:"وطني", status:"قيد التحضير", deadline:"", result:"", students:[], evidence:[]},
    {id:"c5", name:"مسابقة الإبداع والابتكار (محلية - تعليم جدة)", organizer:"إدارة تعليم جدة", level:"تعليم المدينة", status:"قيد التحضير", deadline:"", result:"", students:[], evidence:[]}
  ],
  evidence: {}
};

/* ============================================================ */
/* التخزين (يعمل داخل Claude وأيضاً كملف مستقل على الجهاز) */
/* ============================================================ */
async function storageGet(key){
  if (window.storage && typeof window.storage.get === "function") {
    try { const r = await window.storage.get(key); return r ? r.value : null; } catch(e){ return null; }
  }
  try { return localStorage.getItem(key); } catch(e){ return null; }
}
async function storageSet(key, value){
  if (window.storage && typeof window.storage.set === "function") {
    try { await window.storage.set(key, value); return; } catch(e){}
  }
  try { localStorage.setItem(key, value); } catch(e){}
}

/* ============================================================ */
/* أدوات مساعدة */
/* ============================================================ */
function uid(){ return Math.random().toString(36).slice(2,10); }
function todayInfo(){
  const d = new Date();
  return {
    dayName: DAY_INDEX[d.getDay()],
    formatted: d.toLocaleDateString("ar-SA-u-ca-gregory", {year:"numeric", month:"long", day:"numeric"}),
  };
}
function daysUntil(dueDateStr){
  if (!dueDateStr) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  const due = new Date(dueDateStr); due.setHours(0,0,0,0);
  return Math.round((due-today)/86400000);
}
function esc(s){
  return String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function pad2(n){ return String(n).padStart(2,"0"); }
function isoDate(y,m,d){ return `${y}-${pad2(m+1)}-${pad2(d)}`; }
function formatLongAr(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("ar-SA-u-ca-gregory", {year:"numeric", month:"long", day:"numeric", weekday:"long"});
}
function readFileAsDataURL(file){
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
function compressImageDataUrl(dataUrl, maxDim=1100, quality=0.72){
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let {width, height} = img;
      if (width > maxDim || height > maxDim) {
        const scale = maxDim / Math.max(width, height);
        width = Math.round(width*scale); height = Math.round(height*scale);
      }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

/* ============================================================ */
/* الحالة العامة */
/* ============================================================ */
let DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
let AUTHED = false;
let LOGIN_ERROR = "";
let TAB = "dashboard";
let TASK_FILTER = "الكل";
let SHOW_WEEKLY_FORM = false;
let EDIT_WEEKLY_ID = null;
let NEW_WEEKLY_DAY = null;
let SHOW_TASK_FORM = false;
let SHOW_PLAN_FORM = false;
let SHOW_COMP_FORM = false;
const _now = new Date();
let CAL_YEAR = _now.getFullYear();
let CAL_MONTH = _now.getMonth();
let CAL_SELECTED = isoDate(_now.getFullYear(), _now.getMonth(), _now.getDate());
let CAL_VIEW = "grid";
let REPORT_MODE = "weekly";
let REPORT_WEEK_ID = null;
let REPORT_YEAR = _now.getFullYear();
let REPORT_MONTH = _now.getMonth();
let REPORT_COPIED = false;
let EVIDENCE_OPEN_ID = null;
let STUDENTS_OPEN_ID = null;
let EDIT_COMP_ID = null;

async function persist(){ await storageSet(STORAGE_KEY, JSON.stringify(DATA)); }
async function mutate(fn){ fn(DATA); render(); await persist(); }

/* ============================================================ */
/* عناصر واجهة مشتركة */
/* ============================================================ */
function sectionTitle(eyebrow, title, icon){
  return `<div class="section-title">
    <div class="ico">${ICONS[icon]}</div>
    <div><div class="eyebrow">${esc(eyebrow)}</div><h2>${esc(title)}</h2></div>
  </div>`;
}
function emptyState(text){
  return `<div class="empty-state"><img src="${LOGO.colorMark}" alt=""><p>${esc(text)}</p></div>`;
}
function chip(text, color){
  return `<span class="chip" style="background:${color}1A; color:${color}">${esc(text)}</span>`;
}
function gradientDivider(){
  return `<div class="divider"><div class="line l"></div><img src="${LOGO.colorMark}" alt=""><div class="line r"></div></div>`;
}

/* ============================================================ */
/* لوحة اليوم */
/* ============================================================ */
function viewDashboard(){
  const today = todayInfo();
  const todaysWeekly = DATA.weekly.filter(w => w.day === today.dayName);
  const dailyTasks = DATA.tasks.filter(t => t.type === "يومي" && !t.done);
  const weeklyTasksToday = DATA.tasks.filter(t => t.type === "أسبوعي" && t.day === today.dayName && !t.done);
  const dueSoon = DATA.tasks.filter(t => !t.done && t.dueDate)
    .map(t => ({...t, diff: daysUntil(t.dueDate)}))
    .filter(t => t.diff !== null && t.diff <= 3)
    .sort((a,b) => a.diff - b.diff);
  const compsOpen = DATA.competitions.filter(c => c.status === "تسجيل مفتوح");

  const scheduleItems = [
    ...todaysWeekly.map(w => `
      <div class="item">
        <div class="time">${ICONS.clock.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="14" height="14"')}<span>${esc(w.time)}</span></div>
        <div class="flex1"><div class="title">${esc(w.title)}</div>
        ${w.location ? `<div class="meta">${ICONS.pin.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="11" height="11"')} ${esc(w.location)}</div>` : ""}</div>
      </div>`),
    ...weeklyTasksToday.map(t => `
      <div class="item">
        <button class="check ${t.done?"done":""}" data-action="toggleTask" data-id="${t.id}">${ICONS.check}</button>
        <div class="flex1 title">${esc(t.title)}</div>
        ${chip(t.priority, PRIORITY_COLOR[t.priority])}
      </div>`)
  ].join("");

  return `
    <div class="hero">
      <img class="hero-mark" src="${LOGO.whiteMark}" alt="">
      <div class="rel">
        <div class="when">${esc(today.dayName)} · ${esc(today.formatted)}</div>
        <h2>مساء الخير، عبدالله</h2>
        <div class="sub">لديك ${todaysWeekly.length + weeklyTasksToday.length} فعالية مجدولة و${dailyTasks.length} مهمة يومية بانتظارك اليوم.</div>
      </div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="num">${todaysWeekly.length + weeklyTasksToday.length}</div><div class="lbl">فعاليات اليوم</div></div>
      <div class="stat-card"><div class="num">${dailyTasks.length}</div><div class="lbl">مهام يومية متبقية</div></div>
      <div class="stat-card"><div class="num">${dueSoon.length}</div><div class="lbl">مواعيد قريبة</div></div>
      <div class="stat-card"><div class="num">${compsOpen.length}</div><div class="lbl">مسابقات تسجيلها مفتوح</div></div>
    </div>

    <div class="dash-grid">
      <div>
        ${sectionTitle("فعاليات اليوم", "جدول " + today.dayName, "calendar")}
        <div class="list">${scheduleItems || emptyState("لا توجد فعاليات ثابتة مجدولة لهذا اليوم")}</div>

        <div style="height:26px"></div>
        ${sectionTitle("مهام متكررة", "مهامي اليومية", "list")}
        <div class="list">
          ${dailyTasks.length ? dailyTasks.map(t => `
            <div class="item">
              <button class="check ${t.done?"done":""}" data-action="toggleTask" data-id="${t.id}">${ICONS.check}</button>
              <div class="flex1 title">${esc(t.title)}</div>
              ${chip(t.priority, PRIORITY_COLOR[t.priority])}
            </div>`).join("") : emptyState("لا توجد مهام يومية متبقية — أحسنت")}
        </div>
      </div>

      <div class="side-panel">
        <div>
          ${sectionTitle("تنبيه", "مواعيد قريبة", "alert")}
          ${dueSoon.length ? dueSoon.map(t => `
            <div class="alert-row ${t.diff < 0 ? "late" : "soon"}">
              ${ICONS.alert}
              <span class="t">${esc(t.title)}</span>
              <b>${t.diff < 0 ? `متأخر ${Math.abs(t.diff)}ي` : t.diff === 0 ? "اليوم" : `بعد ${t.diff}ي`}</b>
            </div>`).join("") : emptyState("لا مواعيد قريبة")}
        </div>
      </div>
    </div>
  `;
}

/* ============================================================ */
/* الرؤية */
/* ============================================================ */
function viewVision(){
  const v = DATA.vision;
  const plan = [...DATA.weeklyPlan].sort((a,b)=> (a.startDate||"").localeCompare(b.startDate||""));

  const planForm = SHOW_PLAN_FORM ? `
    <div class="panel">
      <div class="field"><label>من تاريخ</label><input id="p-start" type="date"></div>
      <div class="field"><label>إلى تاريخ</label><input id="p-end" type="date"></div>
      <div class="field full"><label>أهداف وأنشطة الأسبوع</label><textarea id="p-focus" rows="2" placeholder="مثال: تنظيم مسابقة القراءة الأسبوعية وتفعيل الإذاعة الصباحية"></textarea></div>
      <div class="actions">
        <button class="btn ghost" data-action="closePlanForm">إلغاء</button>
        <button class="btn" data-action="addPlanWeek">إضافة الأسبوع</button>
      </div>
    </div>` : "";

  const planCards = plan.length ? plan.map(p => `
    <div class="item" style="align-items:flex-start;">
      <div class="flex1">
        <div class="meta" style="font-weight:800; color:var(--blue); margin-bottom:4px;">
          ${p.startDate ? esc(p.startDate) : "؟"} — ${p.endDate ? esc(p.endDate) : "؟"}
        </div>
        <div class="title" style="font-weight:600; line-height:1.7;">${esc(p.focus) || "—"}</div>
      </div>
      <button class="trash-btn" data-action="removePlanWeek" data-id="${p.id}">${ICONS.trash}</button>
    </div>`).join("") : emptyState("لم تُضف بعد أي أسابيع للخطة التشغيلية");

  return `
    ${sectionTitle("الإطار العام", "الخطة والرؤية", "compass")}
    <div class="vision-wrap">
      <div class="vision-field">
        <label>رؤية المدرسة</label>
        <div class="helper">الرؤية العامة التي تسعى المدرسة لتحقيقها</div>
        <textarea id="v-schoolVision" rows="3">${esc(v.schoolVision)}</textarea>
      </div>
      <div class="vision-field">
        <label>رسالة النشاط الطلابي</label>
        <div class="helper">دور قسم النشاط في تحقيق رؤية المدرسة</div>
        <textarea id="v-activityMission" rows="3">${esc(v.activityMission)}</textarea>
      </div>
      <div class="vision-field">
        <label>التوافق مع وزارة التعليم</label>
        <div class="helper">الأهداف والأطر المرجعية الصادرة من الوزارة</div>
        <textarea id="v-ministryGoals" rows="3">${esc(v.ministryGoals)}</textarea>
      </div>
      ${gradientDivider()}
      <button class="btn" data-action="saveVision">${ICONS.save}<span id="save-label">حفظ الخطة</span></button>
    </div>

    <div style="height:34px"></div>
    <div class="topbar" style="margin-bottom:16px;">
      ${sectionTitle("العام الدراسي كاملاً", "الخطة التشغيلية الأسبوعية", "calendar")}
      <button class="btn accent" data-action="togglePlanForm">${SHOW_PLAN_FORM ? ICONS.x : ICONS.plus}<span>إضافة أسبوع</span></button>
    </div>
    ${planForm}
    <div class="list">${planCards}</div>
  `;
}

/* ============================================================ */
/* الجدول الأسبوعي */
/* ============================================================ */
function weeklyFormPanel(){
  const editing = EDIT_WEEKLY_ID ? DATA.weekly.find(w => w.id === EDIT_WEEKLY_ID) : null;
  const defaultDay = editing ? editing.day : (NEW_WEEKLY_DAY || DAYS[0]);
  return `
    <div class="panel">
      <div class="field"><label>اليوم</label>
        <select id="w-day">${DAYS.map(d=>`<option value="${d}" ${defaultDay===d ? "selected":""}>${d}</option>`).join("")}</select>
      </div>
      <div class="field"><label>الوقت</label><input id="w-time" type="time" value="${editing ? esc(editing.time) : ""}"></div>
      <div class="field full"><label>عنوان الفعالية</label><input id="w-title" type="text" placeholder="مثال: اجتماع لجنة النشاط" value="${editing ? esc(editing.title) : ""}"></div>
      <div class="field full"><label>المكان (اختياري)</label><input id="w-location" type="text" placeholder="مثال: غرفة النشاط" value="${editing ? esc(editing.location||"") : ""}"></div>
      <div class="actions">
        <button class="btn ghost" data-action="closeWeeklyForm">إلغاء</button>
        <button class="btn" data-action="${editing ? "saveWeekly" : "addWeekly"}" ${editing ? `data-id="${editing.id}"` : ""}>${editing ? "حفظ التعديل" : "إضافة إلى الجدول"}</button>
      </div>
    </div>`;
}

function inlineWeeklyEditForm(w){
  return `
    <div class="inline-edit">
      <div class="field"><label>اليوم</label>
        <select id="w-day">${DAYS.map(d=>`<option value="${d}" ${w.day===d ? "selected":""}>${d}</option>`).join("")}</select>
      </div>
      <div class="field"><label>الوقت</label><input id="w-time" type="time" value="${esc(w.time)}"></div>
      <div class="field full"><label>العنوان</label><input id="w-title" type="text" value="${esc(w.title)}"></div>
      <div class="field full"><label>المكان</label><input id="w-location" type="text" value="${esc(w.location||"")}"></div>
      <div class="actions">
        <button class="btn ghost" data-action="closeWeeklyForm">إلغاء</button>
        <button class="btn" data-action="saveWeekly" data-id="${w.id}">حفظ</button>
      </div>
    </div>`;
}

function viewWeekly(){
  const formPanel = (SHOW_WEEKLY_FORM && !EDIT_WEEKLY_ID) ? weeklyFormPanel() : "";

  const cols = DAYS.map(day => {
    const items = DATA.weekly.filter(w => w.day === day).sort((a,b)=>a.time.localeCompare(b.time));
    return `
      <div class="day-col">
        <div class="day-col-head"><span>${day}</span><span class="count">${items.length}</span></div>
        ${items.length ? items.map(w => `
          <div class="event-card">
            ${EDIT_WEEKLY_ID === w.id ? inlineWeeklyEditForm(w) : `
            <div class="row">
              <div>
                <div class="t">${esc(w.time)}</div>
                <div class="n">${esc(w.title)}</div>
                ${w.location ? `<div class="loc">${ICONS.pin.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="10" height="10"')} ${esc(w.location)}</div>` : ""}
              </div>
              <div class="event-actions">
                <button class="icon-btn" data-action="editWeekly" data-id="${w.id}">${ICONS.pencil}</button>
                <button class="trash-btn" data-action="removeWeekly" data-id="${w.id}">${ICONS.trash}</button>
              </div>
            </div>`}
          </div>`).join("") : `<div class="day-empty">لا توجد فعاليات</div>`}
      </div>`;
  }).join("");

  return `
    <div class="topbar">
      ${sectionTitle("متكرر أسبوعياً", "الجدول الأسبوعي", "calendar")}
      <button class="btn accent" data-action="toggleWeeklyForm">${SHOW_WEEKLY_FORM ? ICONS.x : ICONS.plus}<span>إضافة فعالية</span></button>
    </div>
    ${formPanel}
    <div class="week-grid">${cols}</div>
  `;
}

/* ============================================================ */
/* المهام */
/* ============================================================ */
function evidenceThumb(e, kind){
  if (e.type === "video") {
    return `<div class="evidence-thumb">
      <video src="${e.dataUrl}" controls></video>
      <button class="evidence-remove" data-action="removeEvidence" data-kind="${kind}" data-id="${e._parentId}" data-eid="${e.id}">${ICONS.x}</button>
    </div>`;
  }
  return `<div class="evidence-thumb">
    <img src="${e.dataUrl}" alt="">
    <button class="evidence-remove" data-action="removeEvidence" data-kind="${kind}" data-id="${e._parentId}" data-eid="${e.id}">${ICONS.x}</button>
  </div>`;
}

function evidencePanel(t, kind="task"){
  const items = (t.evidence || []).map(e => ({...e, _parentId: t.id}));
  return `
    <div class="evidence-panel">
      <label class="upload-btn">📎 إضافة صورة أو فيديو كشاهد
        <input type="file" accept="image/*,video/*" multiple class="evidence-input" data-kind="${kind}" data-id="${t.id}">
      </label>
      ${items.length ? `<div class="evidence-grid">${items.map(e=>evidenceThumb(e, kind)).join("")}</div>` : `<div style="color:var(--muted); font-size:12.5px; margin-top:8px;">لا توجد شواهد مرفوعة بعد</div>`}
    </div>`;
}

function viewTasks(){
  const filters = ["الكل","متبقية","منجزة", ...TASK_TYPES];
  const filtered = DATA.tasks.filter(t => {
    if (TASK_FILTER === "الكل") return true;
    if (TASK_FILTER === "منجزة") return t.done;
    if (TASK_FILTER === "متبقية") return !t.done;
    return t.type === TASK_FILTER;
  });

  const formPanel = SHOW_TASK_FORM ? `
    <div class="panel">
      <div class="field full"><label>عنوان المهمة</label><input id="t-title" type="text" placeholder="مثال: تحديث لوحة الإعلانات"></div>
      <div class="field"><label>النوع</label>
        <select id="t-type" onchange="onTaskTypeChange()">${TASK_TYPES.map(t=>`<option value="${t}">${t}</option>`).join("")}</select>
      </div>
      <div class="field"><label>الأولوية</label>
        <select id="t-priority">${PRIORITIES.map(p=>`<option value="${p}">${p}</option>`).join("")}</select>
      </div>
      <div class="field" id="t-day-wrap"><label>اليوم</label>
        <select id="t-day">${DAYS.map(d=>`<option value="${d}">${d}</option>`).join("")}</select>
      </div>
      <div class="field hidden" id="t-date-wrap"><label>تاريخ الاستحقاق</label><input id="t-dueDate" type="date"></div>
      <div class="actions">
        <button class="btn ghost" data-action="closeTaskForm">إلغاء</button>
        <button class="btn" data-action="addTask">إضافة المهمة</button>
      </div>
    </div>` : "";

  const rows = filtered.map(t => {
    const evCount = (t.evidence || []).length;
    const row = `
    <tr class="${t.done ? "done-row":""}">
      <td style="width:36px"><button class="check ${t.done?"done":""}" data-action="toggleTask" data-id="${t.id}">${ICONS.check}</button></td>
      <td><div class="tt">${esc(t.title)}</div>
        <div class="meta">${esc(t.type)}${t.day?` · ${esc(t.day)}`:""}${t.dueDate?` · ${esc(t.dueDate)}`:""}</div>
      </td>
      <td style="width:110px">${chip(t.priority, PRIORITY_COLOR[t.priority])}</td>
      <td style="width:80px"><button class="evidence-btn ${evCount?'has':''}" data-action="toggleEvidence" data-id="${t.id}">📎${evCount?` ${evCount}`:""}</button></td>
      <td style="width:44px"><button class="trash-btn" data-action="removeTask" data-id="${t.id}">${ICONS.trash}</button></td>
    </tr>`;
    const panelRow = EVIDENCE_OPEN_ID === t.id ? `<tr class="evidence-row"><td colspan="5">${evidencePanel(t)}</td></tr>` : "";
    return row + panelRow;
  }).join("");

  return `
    <div class="topbar">
      ${sectionTitle("كل ما يلزم فعله", "المهام", "list")}
      <button class="btn accent" data-action="toggleTaskForm">${SHOW_TASK_FORM ? ICONS.x : ICONS.plus}<span>مهمة جديدة</span></button>
    </div>
    ${formPanel}
    <div class="filter-row">
      ${filters.map(f => `<button class="filter-pill ${TASK_FILTER===f?"active":""}" data-action="setFilter" data-filter="${f}">${f}</button>`).join("")}
    </div>
    ${filtered.length ? `<table class="tasks-table"><tbody>${rows}</tbody></table>` : emptyState("لا توجد مهام ضمن هذا التصنيف")}
  `;
}

/* ============================================================ */
/* التنبيهات */
/* ============================================================ */
function viewAlerts(){
  const today = todayInfo();
  const overdue = DATA.tasks.filter(t => !t.done && t.dueDate && daysUntil(t.dueDate) < 0)
    .sort((a,b)=>daysUntil(a.dueDate)-daysUntil(b.dueDate));
  const next7 = DATA.tasks.filter(t => !t.done && t.dueDate && daysUntil(t.dueDate) >= 0 && daysUntil(t.dueDate) <= 7)
    .sort((a,b)=>daysUntil(a.dueDate)-daysUntil(b.dueDate));
  const weeklyReminders = DATA.tasks.filter(t => !t.done && t.type === "أسبوعي");
  const compDeadlines = DATA.competitions.filter(c => c.deadline && daysUntil(c.deadline) >= 0 && daysUntil(c.deadline) <= 14)
    .sort((a,b)=>daysUntil(a.deadline)-daysUntil(b.deadline));

  const todayIdx = DAYS.indexOf(today.dayName);
  const weeklyOrdered = todayIdx === -1 ? [] :
    [...DAYS.slice(todayIdx), ...DAYS.slice(0,todayIdx)].map(day => ({day, items: DATA.weekly.filter(w=>w.day===day)}));

  return `
    ${sectionTitle("لا تفوّت شيئاً", "التنبيهات", "bell")}
    <div class="dash-grid">
      <div>
        ${overdue.length ? `
          <div style="font-weight:800;color:var(--coral);margin-bottom:10px;font-size:14px;">متأخرة</div>
          <div class="list" style="margin-bottom:24px;">
            ${overdue.map(t=>`
              <div class="alert-row late">${ICONS.alert}<span class="t">${esc(t.title)}</span><b>منذ ${Math.abs(daysUntil(t.dueDate))} يوم</b></div>`).join("")}
          </div>` : ""}

        <div style="font-weight:800;color:var(--navy);margin-bottom:10px;font-size:14px;">خلال 7 أيام</div>
        <div class="list" style="margin-bottom:24px;">
          ${next7.length ? next7.map(t=>`
            <div class="item"><span style="color:var(--cyan)">${ICONS.clock.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="15" height="15"')}</span>
              <div class="flex1 title">${esc(t.title)}</div>
              <b style="color:var(--cyan); font-size:12px;">${daysUntil(t.dueDate)===0?"اليوم":`بعد ${daysUntil(t.dueDate)} يوم`}</b>
            </div>`).join("") : emptyState("لا مواعيد نهائية قريبة")}
        </div>

        ${weeklyReminders.length ? `
          <div style="font-weight:800;color:var(--navy);margin-bottom:10px;font-size:14px;">مهام أسبوعية متكررة</div>
          <div class="list">
            ${weeklyReminders.map(t=>`
              <div class="item">${ICONS.bell.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="15" height="15" style="color:var(--navy)"')}
                <div class="flex1 title">${esc(t.title)}</div>
                <b style="color:var(--blue); font-size:12px;">${esc(t.day)}</b>
              </div>`).join("")}
          </div>` : ""}

        ${compDeadlines.length ? `
          <div style="font-weight:800;color:var(--magenta);margin-bottom:10px;font-size:14px;">مواعيد مسابقات قريبة</div>
          <div class="list">
            ${compDeadlines.map(c=>`
              <div class="item">${ICONS.trophy.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="15" height="15" style="color:var(--magenta)"')}
                <div class="flex1 title">${esc(c.name)}</div>
                <b style="color:var(--magenta); font-size:12px;">${daysUntil(c.deadline)===0?"اليوم":`بعد ${daysUntil(c.deadline)} يوم`}</b>
              </div>`).join("")}
          </div>` : ""}
      </div>

      <div class="side-panel">
        <div>
          <div style="font-weight:800;color:var(--navy);margin-bottom:10px;font-size:14px;">الجدول الأسبوعي القادم</div>
          ${weeklyOrdered.map(({day,items}) => `
            <div style="margin-bottom:14px;">
              <div style="font-size:11.5px;font-weight:700;color:var(--muted);margin-bottom:6px;">${day}${day===today.dayName?" · اليوم":""}</div>
              ${items.length ? items.sort((a,b)=>a.time.localeCompare(b.time)).map(w=>`
                <div class="item" style="padding:8px 10px; margin-bottom:6px;">
                  <span style="font-size:11px;font-weight:800;color:var(--cyan);width:38px;flex-shrink:0;">${esc(w.time)}</span>
                  <span class="flex1" style="font-size:12.5px;font-weight:700;">${esc(w.title)}</span>
                </div>`).join("") : `<div class="day-empty">لا فعاليات</div>`}
            </div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

/* ============================================================ */
/* الابتكار والمسابقات */
/* ============================================================ */
function studentsPanel(c){
  const students = c.students || [];
  return `
    <div class="evidence-panel">
      <div style="font-weight:800;color:var(--navy);font-size:12.5px;margin-bottom:10px;">عدد الطلاب المسجلين: ${students.length}</div>
      ${students.length ? `<div class="list" style="margin-bottom:12px;">${students.map(s=>`
        <div class="item">
          <div class="flex1"><div class="title">${esc(s.name)}</div><div class="meta">الصف: ${esc(s.grade)}</div></div>
          <button class="trash-btn" data-action="removeStudent" data-id="${c.id}" data-sid="${s.id}">${ICONS.trash}</button>
        </div>`).join("")}</div>` : `<div style="color:var(--muted); font-size:12.5px; margin-bottom:12px;">لا يوجد طلاب مسجّلون بعد</div>`}
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <input id="s-name-${c.id}" type="text" placeholder="اسم الطالب" style="flex:1; min-width:140px; border:1px solid var(--line); border-radius:8px; padding:8px 10px; font-family:'Cairo'; font-size:12.5px;">
        <input id="s-grade-${c.id}" type="text" placeholder="الصف" style="width:110px; border:1px solid var(--line); border-radius:8px; padding:8px 10px; font-family:'Cairo'; font-size:12.5px;">
        <button class="btn small" data-action="addStudent" data-id="${c.id}">إضافة طالب</button>
      </div>
    </div>`;
}

function compFormPanel(){
  const editing = EDIT_COMP_ID ? DATA.competitions.find(c => c.id === EDIT_COMP_ID) : null;
  return `
    <div class="panel">
      <div class="field full"><label>اسم المسابقة / الأولمبياد</label><input id="c-name" type="text" placeholder="مثال: الأولمبياد الوطني للإبداع العلمي" value="${editing ? esc(editing.name) : ""}"></div>
      <div class="field"><label>الجهة المنظمة</label><input id="c-organizer" type="text" placeholder="مثال: مؤسسة موهبة" value="${editing ? esc(editing.organizer) : ""}"></div>
      <div class="field"><label>المستوى</label>
        <select id="c-level">${COMP_LEVELS.map(l=>`<option value="${l}" ${editing && editing.level===l ? "selected":""}>${l}</option>`).join("")}</select>
      </div>
      <div class="field"><label>الحالة</label>
        <select id="c-status">${COMP_STATUSES.map(s=>`<option value="${s}" ${editing && editing.status===s ? "selected":""}>${s}</option>`).join("")}</select>
      </div>
      <div class="field"><label>آخر موعد (تسجيل/تسليم)</label><input id="c-deadline" type="date" value="${editing ? esc(editing.deadline||"") : ""}"></div>
      <div class="field full"><label>النتيجة / الإنجاز (إن وُجد)</label><input id="c-result" type="text" placeholder="مثال: المركز الثاني على مستوى تعليم جدة" value="${editing ? esc(editing.result||"") : ""}"></div>
      <div class="actions">
        <button class="btn ghost" data-action="closeCompForm">إلغاء</button>
        <button class="btn" data-action="${editing ? "saveCompetition" : "addCompetition"}" ${editing ? `data-id="${editing.id}"` : ""}>${editing ? "حفظ التعديل" : "إضافة المسابقة"}</button>
      </div>
    </div>`;
}

function viewCompetitions(){
  const list = [...DATA.competitions].sort((a,b)=>{
    const da = a.deadline ? daysUntil(a.deadline) : 9999;
    const db = b.deadline ? daysUntil(b.deadline) : 9999;
    return da - db;
  });
  const openCount = DATA.competitions.filter(c=>c.status==="تسجيل مفتوح").length;
  const ongoingCount = DATA.competitions.filter(c=>c.status==="جارية").length;
  const wonCount = DATA.competitions.filter(c=>c.result && c.result.trim()).length;

  const formPanel = (SHOW_COMP_FORM && !EDIT_COMP_ID) ? compFormPanel() : "";

  const rows = list.map(c => {
    const d = c.deadline ? daysUntil(c.deadline) : null;
    const deadlineTxt = c.deadline ? (d < 0 ? `فات الموعد` : d === 0 ? "اليوم" : `بعد ${d} يوم`) : "—";
    const studentCount = (c.students || []).length;
    const evidenceCount = (c.evidence || []).length;

    if (EDIT_COMP_ID === c.id) {
      return `<tr><td colspan="5">${compFormPanel()}</td></tr>`;
    }

    const mainRow = `
    <tr>
      <td>
        <div class="tt">${esc(c.name)}</div>
        <div class="meta">${esc(c.organizer)}${c.result ? ` · 🏆 ${esc(c.result)}` : ""}${studentCount ? ` · 👥 ${studentCount} طالب` : ""}</div>
      </td>
      <td style="width:110px">${chip(c.level, "var(--blue)")}</td>
      <td style="width:130px">
        <select class="comp-status-select" data-id="${c.id}" style="border:1px solid var(--line); border-radius:8px; padding:5px 8px; font-size:12px; font-weight:700; color:${COMP_STATUS_COLOR[c.status]};">
          ${COMP_STATUSES.map(s=>`<option value="${s}" ${s===c.status?"selected":""}>${s}</option>`).join("")}
        </select>
      </td>
      <td style="width:100px; font-size:12px; font-weight:700; color:${d!==null && d<0 ? "var(--coral)" : "var(--muted)"};">${deadlineTxt}</td>
      <td style="width:150px; white-space:nowrap;">
        <button class="icon-btn" data-action="toggleStudents" data-id="${c.id}" title="الطلاب المسجلون">👥</button>
        <button class="icon-btn" data-action="toggleEvidence" data-id="${c.id}" title="الشواهد">${evidenceCount ? `📎${evidenceCount}` : "📎"}</button>
        <button class="icon-btn" data-action="editCompetition" data-id="${c.id}" title="تعديل">${ICONS.pencil}</button>
        <button class="trash-btn" data-action="removeCompetition" data-id="${c.id}">${ICONS.trash}</button>
      </td>
    </tr>`;

    const studentsRow = STUDENTS_OPEN_ID === c.id ? `<tr class="evidence-row"><td colspan="5">${studentsPanel(c)}</td></tr>` : "";
    const evidenceRow = EVIDENCE_OPEN_ID === c.id ? `<tr class="evidence-row"><td colspan="5">${evidencePanel(c, "competition")}</td></tr>` : "";

    return mainRow + studentsRow + evidenceRow;
  }).join("");

  return `
    <div class="topbar">
      ${sectionTitle("تثبيت الحضور والتميز", "الابتكار والمسابقات", "trophy")}
      <button class="btn accent" data-action="toggleCompForm">${SHOW_COMP_FORM ? ICONS.x : ICONS.plus}<span>مسابقة جديدة</span></button>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="num">${DATA.competitions.length}</div><div class="lbl">إجمالي المسابقات المتابَعة</div></div>
      <div class="stat-card"><div class="num">${openCount}</div><div class="lbl">تسجيل مفتوح الآن</div></div>
      <div class="stat-card"><div class="num">${wonCount}</div><div class="lbl">إنجازات محقّقة</div></div>
    </div>

    ${formPanel}
    ${list.length ? `<table class="tasks-table"><tbody>${rows}</tbody></table>` : emptyState("لم تُضف بعد أي مسابقة — ابدأ بتسجيل نادي الابتكار في الأولمبياد الوطني")}
  `;
}

/* ============================================================ */
/* التقويم السنوي */
/* ============================================================ */
const FULL_DAYS = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
const MONTH_NAME_FMT = new Intl.DateTimeFormat("ar-SA-u-ca-gregory", {month:"long", year:"numeric"});

function getDayItems(iso, weekdayName){
  const weeklyEvents = DATA.weekly.filter(w => w.day === weekdayName).sort((a,b)=>a.time.localeCompare(b.time));
  const tasksDue = DATA.tasks.filter(t => t.dueDate === iso);
  const planEntry = DATA.weeklyPlan.find(p => p.startDate && p.endDate && iso >= p.startDate && iso <= p.endDate);
  return {weeklyEvents, tasksDue, planEntry};
}

function buildTableRows(){
  const daysInMonth = new Date(CAL_YEAR, CAL_MONTH+1, 0).getDate();
  const todayIso = isoDate(_now.getFullYear(), _now.getMonth(), _now.getDate());
  let rows = "";
  for (let d=1; d<=daysInMonth; d++){
    const iso = isoDate(CAL_YEAR, CAL_MONTH, d);
    const weekdayName = DAY_INDEX[new Date(CAL_YEAR, CAL_MONTH, d).getDay()];
    const {weeklyEvents, tasksDue, planEntry} = getDayItems(iso, weekdayName);
    const items = [];
    weeklyEvents.forEach(w => items.push(`<div style="display:flex; align-items:center; gap:6px;">🕐 <b>${esc(w.time)}</b> — ${esc(w.title)}${w.location?` <span style="color:var(--muted)">(${esc(w.location)})</span>`:""}<button class="icon-btn" data-action="editWeekly" data-id="${w.id}" style="margin-inline-start:auto;">${ICONS.pencil}</button><button class="trash-btn" data-action="removeWeekly" data-id="${w.id}">${ICONS.trash}</button></div>`));
    tasksDue.forEach(t => items.push(`<div style="color:${t.done?'var(--muted)':'var(--coral)'}">${t.done?"✔":"◻"} ${esc(t.title)}</div>`));
    if (planEntry) items.push(`<div style="color:var(--magenta)">📌 ${esc(planEntry.focus)}</div>`);
    const rowClasses = ["cal-row"];
    if (iso === todayIso) rowClasses.push("cal-row-today");
    else if (planEntry) rowClasses.push("cal-row-plan");
    rows += `
      <tr class="${rowClasses.join(" ")}">
        <td class="cal-table-day">${weekdayName}</td>
        <td class="cal-table-date">${esc(formatLongAr(iso))}</td>
        <td class="cal-table-items">${items.length ? items.join("") : `<span style="color:var(--muted)">—</span>`}</td>
      </tr>`;
  }
  return rows;
}

function viewCalendar(){
  const first = new Date(CAL_YEAR, CAL_MONTH, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(CAL_YEAR, CAL_MONTH+1, 0).getDate();
  const todayIso = isoDate(_now.getFullYear(), _now.getMonth(), _now.getDate());

  let cells = "";
  for (let i=0; i<startWeekday; i++) cells += `<div class="cal-cell blank"></div>`;
  for (let d=1; d<=daysInMonth; d++){
    const iso = isoDate(CAL_YEAR, CAL_MONTH, d);
    const weekdayName = DAY_INDEX[new Date(CAL_YEAR, CAL_MONTH, d).getDay()];
    const {weeklyEvents, tasksDue, planEntry} = getDayItems(iso, weekdayName);

    const labels = [];
    weeklyEvents.forEach(w => labels.push(`<div class="cal-label" style="background:#EAF1FC; color:var(--navy);">${esc(w.title)}</div>`));
    tasksDue.forEach(t => {
      const col = (!t.done && t.priority==="عالية") ? "var(--coral)" : "var(--cyan)";
      const bg = (!t.done && t.priority==="عالية") ? "#FCEBEA" : "#E7F6FA";
      labels.push(`<div class="cal-label" style="background:${bg}; color:${col};">${esc(t.title)}</div>`);
    });
    if (planEntry) labels.push(`<div class="cal-label" style="background:#F6EAF5; color:var(--magenta);">📌 ${esc(planEntry.focus)}</div>`);

    const maxShown = 3;
    const shown = labels.slice(0, maxShown).join("");
    const moreCount = labels.length - maxShown;
    const more = moreCount > 0 ? `<div class="cal-more">+${moreCount} أخرى</div>` : "";

    const classes = ["cal-cell"];
    if (iso === todayIso) classes.push("today");
    if (iso === CAL_SELECTED) classes.push("selected");
    if (planEntry) classes.push("in-plan");
    cells += `<div class="${classes.join(" ")}" data-action="calSelectDay" data-date="${iso}">
        <div class="cal-date">${d}</div>
        <div class="cal-labels">${shown}${more}</div>
      </div>`;
  }
  const totalCells = startWeekday + daysInMonth;
  const trailing = (7 - (totalCells % 7)) % 7;
  for (let i=0; i<trailing; i++) cells += `<div class="cal-cell blank"></div>`;

  const selWeekday = DAY_INDEX[new Date(CAL_SELECTED + "T00:00:00").getDay()];
  const sel = getDayItems(CAL_SELECTED, selWeekday);

  const detailBody = `
    ${sel.planEntry ? `
      <div class="alert-row soon" style="background:#F6EAF5; color:var(--magenta); margin-bottom:14px;">
        ${ICONS.compass}<span class="t" style="color:var(--ink);">خطة الأسبوع (${esc(sel.planEntry.startDate)} — ${esc(sel.planEntry.endDate)}): ${esc(sel.planEntry.focus)}</span>
      </div>` : ""}
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
      <div style="font-weight:800;color:var(--navy);font-size:13px;">الفعاليات المتكررة</div>
    </div>
    ${sel.weeklyEvents.length ? `
      <div class="list" style="margin-bottom:16px;">
        ${sel.weeklyEvents.map(w=> EDIT_WEEKLY_ID === w.id ? `
          <div class="item" style="display:block;">${inlineWeeklyEditForm(w)}</div>` : `
          <div class="item">
            <div class="time">${ICONS.clock.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="14" height="14"')}<span>${esc(w.time)}</span></div>
            <div class="flex1"><div class="title">${esc(w.title)}</div>${w.location?`<div class="meta">${ICONS.pin.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="11" height="11"')} ${esc(w.location)}</div>`:""}</div>
            <button class="icon-btn" data-action="editWeekly" data-id="${w.id}">${ICONS.pencil}</button>
            <button class="trash-btn" data-action="removeWeekly" data-id="${w.id}">${ICONS.trash}</button>
          </div>`).join("")}
      </div>` : (SHOW_WEEKLY_FORM ? "" : `<div style="color:var(--muted); font-size:12.5px; margin-bottom:16px;">لا توجد فعاليات متكررة في هذا اليوم</div>`)}
    ${sel.tasksDue.length ? `
      <div style="font-weight:800;color:var(--navy);margin-bottom:8px;font-size:13px;">المهام المستحقة</div>
      <div class="list">
        ${sel.tasksDue.map(t=>`
          <div class="item">
            <button class="check ${t.done?"done":""}" data-action="toggleTask" data-id="${t.id}">${ICONS.check}</button>
            <div class="flex1 title" style="${t.done?'text-decoration:line-through;opacity:.6;':''}">${esc(t.title)}</div>
            ${chip(t.priority, PRIORITY_COLOR[t.priority])}
            <button class="trash-btn" data-action="removeTask" data-id="${t.id}">${ICONS.trash}</button>
          </div>`).join("")}
      </div>` : ""}
  `;

  const gridView = `
    <div class="card">
      <div class="cal-header">
        <div class="cal-nav">
          <button data-action="calPrevMonth">${ICONS.chevronNext}</button>
          <button class="cal-today-btn" data-action="calToday">اليوم</button>
          <button data-action="calNextMonth">${ICONS.chevronPrev}</button>
        </div>
        <div class="cal-title">${MONTH_NAME_FMT.format(new Date(CAL_YEAR, CAL_MONTH, 1))}</div>
      </div>
      <div class="cal-grid">
        ${FULL_DAYS.map(d=>`<div class="cal-daylabel">${d}</div>`).join("")}
        ${cells}
      </div>
    </div>

    <div class="cal-details">
      <div class="head">${formatLongAr(CAL_SELECTED)}</div>
      ${detailBody}
    </div>
  `;

  const tableView = `
    <div class="card">
      <div class="cal-header">
        <div class="cal-nav">
          <button data-action="calPrevMonth">${ICONS.chevronNext}</button>
          <button class="cal-today-btn" data-action="calToday">اليوم</button>
          <button data-action="calNextMonth">${ICONS.chevronPrev}</button>
        </div>
        <div class="cal-title">${MONTH_NAME_FMT.format(new Date(CAL_YEAR, CAL_MONTH, 1))}</div>
      </div>
      <table class="cal-table">
        <thead><tr><th>اليوم</th><th>التاريخ</th><th>المناسبة / الفعالية</th></tr></thead>
        <tbody>${buildTableRows()}</tbody>
      </table>
    </div>
  `;

  return `
    <div class="topbar">
      ${sectionTitle("العام الدراسي", "التقويم السنوي", "year")}
      <div style="display:flex; gap:10px; align-items:center;">
        <div class="cal-view-toggle">
          <button class="${CAL_VIEW==='grid'?'active':''}" data-action="calSetView" data-view="grid">عرض الشبكة</button>
          <button class="${CAL_VIEW==='table'?'active':''}" data-action="calSetView" data-view="table">عرض الجدول</button>
        </div>
        <button class="btn accent" data-action="calAddWeekly" data-day="${selWeekday}">${ICONS.plus}<span>إضافة فعالية</span></button>
      </div>
    </div>
    ${(SHOW_WEEKLY_FORM && !EDIT_WEEKLY_ID) ? weeklyFormPanel() : ""}
    ${CAL_VIEW === "grid" ? gridView : tableView}
  `;
}

/* ============================================================ */
/* التقارير الأسبوعية والشهرية */
/* ============================================================ */
function buildReportData(startDate, endDate){
  let weeklyEvents = [];
  let d = new Date(startDate + "T00:00:00");
  const end = new Date(endDate + "T00:00:00");
  while (d <= end){
    const iso = isoDate(d.getFullYear(), d.getMonth(), d.getDate());
    const wd = DAY_INDEX[d.getDay()];
    DATA.weekly.filter(w=>w.day===wd).forEach(w => weeklyEvents.push({date: iso, ...w}));
    d.setDate(d.getDate()+1);
  }
  weeklyEvents.sort((a,b)=> a.date===b.date ? a.time.localeCompare(b.time) : a.date.localeCompare(b.date));

  const tasksInRange = DATA.tasks.filter(t => t.dueDate && t.dueDate>=startDate && t.dueDate<=endDate);
  const recurringTasks = DATA.tasks.filter(t => (t.type==="أسبوعي" || t.type==="يومي"));
  const plansInRange = DATA.weeklyPlan.filter(p => p.startDate<=endDate && p.endDate>=startDate);
  const compsInRange = DATA.competitions.filter(c =>
    (c.deadline && c.deadline>=startDate && c.deadline<=endDate) || c.status==="تسجيل مفتوح" || c.status==="جارية");

  return {weeklyEvents, tasksInRange, recurringTasks, plansInRange, compsInRange};
}

function reportPlainText(title, rangeLabel, data){
  const lines = [];
  lines.push(`تقرير: ${title}`);
  lines.push(`الفترة: ${rangeLabel}`);
  lines.push("");
  if (data.plansInRange.length){
    lines.push("الخطة والتركيز:");
    data.plansInRange.forEach(p => lines.push(`- (${p.startDate} إلى ${p.endDate}) ${p.focus}`));
    lines.push("");
  }
  lines.push("الفعاليات والأنشطة المنفذة:");
  if (data.weeklyEvents.length) data.weeklyEvents.forEach(w => lines.push(`- ${w.date} | ${w.time} — ${w.title}${w.location?` (${w.location})`:""}`));
  else lines.push("- لا يوجد");
  lines.push("");
  const done = data.tasksInRange.filter(t=>t.done);
  const notDone = data.tasksInRange.filter(t=>!t.done);
  lines.push(`المهام المنجزة (${done.length} من ${data.tasksInRange.length}):`);
  if (done.length) done.forEach(t => lines.push(`- ✔ ${t.title}`));
  else lines.push("- لا يوجد");
  if (notDone.length){
    lines.push("مهام لم تُنجز بعد:");
    notDone.forEach(t => lines.push(`- ◻ ${t.title}`));
  }
  lines.push("");
  if (data.recurringTasks.length){
    lines.push("المهام المتكررة (يومية/أسبوعية):");
    data.recurringTasks.forEach(t => lines.push(`- ${t.done?"✔":"◻"} ${t.title} (${t.type}${t.day?" - "+t.day:""})`));
    lines.push("");
  }
  lines.push("متابعة الابتكار والمسابقات:");
  if (data.compsInRange.length) data.compsInRange.forEach(c => lines.push(`- ${c.name} — ${c.status}${c.deadline?` (الموعد: ${c.deadline})`:""}${c.result?` — النتيجة: ${c.result}`:""}`));
  else lines.push("- لا توجد مسابقات نشطة هذه الفترة");
  return lines.join("\n");
}

function reportHtml(title, rangeLabel, data){
  const done = data.tasksInRange.filter(t=>t.done);
  const notDone = data.tasksInRange.filter(t=>!t.done);
  const allEvidence = [];
  done.forEach(t => (t.evidence||[]).forEach(e => allEvidence.push({...e, taskTitle:t.title})));
  const evidenceCount = allEvidence.length;
  const completionPct = data.tasksInRange.length ? Math.round((done.length/data.tasksInRange.length)*100) : 0;

  const statCards = [
    {num: data.weeklyEvents.length, lbl:"فعالية متكررة منفذة", bg:"var(--navy)"},
    {num: done.length, lbl:"مهمة منجزة", bg:"var(--blue)"},
    {num: data.compsInRange.length, lbl:"مسابقة متابَعة", bg:"var(--purple)"},
    {num: evidenceCount, lbl:"شاهد موثّق (صور/فيديو)", bg:"var(--magenta)"},
    {num: `${completionPct}%`, lbl:"نسبة إنجاز المهام", bg:"var(--cyan)"},
    {num: data.recurringTasks.length, lbl:"مهمة متكررة قيد المتابعة", bg:"#8A6D1F"},
  ];

  return `
    <div class="rpt-cover">
      <div class="rpt-cover-top">
        <img src="${LOGO.colorMark}" alt="">
        <div class="rpt-cover-school">
          <div class="n">مدارس الأندلس الأهلية</div>
          <div class="b">القسم الثانوي — بنين</div>
        </div>
      </div>
      <div class="rpt-cover-eyebrow">${esc(title)}</div>
      <div class="rpt-cover-title">تقرير النشاط الطلابي</div>
      <div class="rpt-cover-range">الفترة: ${esc(rangeLabel)}</div>
      <div class="rpt-cover-pills">
        <div class="rpt-pill"><b>${data.weeklyEvents.length}</b>فعالية منفذة</div>
        <div class="rpt-pill"><b>${done.length}</b>مهمة منجزة</div>
        <div class="rpt-pill"><b>${data.compsInRange.length}</b>مسابقة نشطة</div>
        <div class="rpt-pill"><b>${evidenceCount}</b>شاهد موثّق</div>
      </div>
    </div>

    <div class="rpt-stat-grid">
      ${statCards.map(s=>`<div class="rpt-stat-card" style="background:${s.bg}"><div class="num">${s.num}</div><div class="lbl">${esc(s.lbl)}</div></div>`).join("")}
    </div>

    ${data.plansInRange.length ? `
    <div class="rpt-section">
      <div class="rpt-section-eyebrow">الإطار العام</div>
      <div class="rpt-section-title">الخطة والتركيز</div>
      ${data.plansInRange.map(p=>`<div class="rpt-plan-bar">📌 (${esc(p.startDate)} إلى ${esc(p.endDate)}) — ${esc(p.focus)}</div>`).join("")}
    </div>` : ""}

    <div class="rpt-section">
      <div class="rpt-section-eyebrow">التنفيذ</div>
      <div class="rpt-section-title">الفعاليات والأنشطة المنفذة</div>
      ${data.weeklyEvents.length ? data.weeklyEvents.map(w=>`
        <div class="rpt-activity-card done">
          <span class="badge">${esc(w.date)}</span>
          <div class="body"><div class="t">${esc(w.title)}</div><div class="m">${esc(w.time)}${w.location?` · ${esc(w.location)}`:""}</div></div>
        </div>`).join("") : `<div class="rpt-empty">لا توجد فعاليات متكررة ضمن هذه الفترة</div>`}
    </div>

    <div class="rpt-section">
      <div class="rpt-section-eyebrow">الإنجاز</div>
      <div class="rpt-section-title">المهام المنجزة (${done.length} من ${data.tasksInRange.length})</div>
      ${done.length ? done.map(t=>`
        <div class="rpt-activity-card done">
          <span class="badge" style="background:var(--cyan)">✔</span>
          <div class="body"><div class="t">${esc(t.title)}</div>${(t.evidence&&t.evidence.length)?`<div class="m">📎 ${t.evidence.length} شاهد مرفق</div>`:""}</div>
        </div>`).join("") : `<div class="rpt-empty">لا توجد مهام منجزة بعد ضمن هذه الفترة</div>`}
      ${notDone.length ? `
        <div style="font-weight:800; color:var(--coral); font-size:13px; margin:14px 0 8px;">مهام لم تُنجز بعد</div>
        ${notDone.map(t=>`
          <div class="rpt-activity-card pending">
            <span class="badge" style="background:var(--coral)">◻</span>
            <div class="body"><div class="t">${esc(t.title)}</div></div>
          </div>`).join("")}` : ""}
    </div>

    ${data.recurringTasks.length ? `
    <div class="rpt-section">
      <div class="rpt-section-eyebrow">المتابعة الدورية</div>
      <div class="rpt-section-title">المهام المتكررة (يومية/أسبوعية)</div>
      ${data.recurringTasks.map(t=>`
        <div class="rpt-activity-card ${t.done?'done':'pending'}">
          <span class="badge" style="background:${t.done?'var(--cyan)':'var(--coral)'}">${t.done?"✔":"◻"}</span>
          <div class="body"><div class="t">${esc(t.title)}</div><div class="m">${esc(t.type)}${t.day?` · ${esc(t.day)}`:""}</div></div>
        </div>`).join("")}
    </div>` : ""}

    <div class="rpt-section">
      <div class="rpt-section-eyebrow">تثبيت الحضور والتميز</div>
      <div class="rpt-section-title">متابعة الابتكار والمسابقات</div>
      ${data.compsInRange.length ? data.compsInRange.map(c=>`
        <div class="rpt-comp-card">
          <div class="t">${esc(c.name)}${c.result?` — 🏆 ${esc(c.result)}`:""}</div>
          <div class="rpt-status-pill" style="background:${COMP_STATUS_COLOR[c.status]}">${esc(c.status)}</div>
        </div>`).join("") : `<div class="rpt-empty">لا توجد مسابقات نشطة هذه الفترة</div>`}
    </div>

    <div class="rpt-section">
      <div class="rpt-section-eyebrow">لقطات من الميدان</div>
      <div class="rpt-section-title">معرض الشواهد</div>
      ${evidenceCount ? `
        <div class="rpt-gallery">
          ${allEvidence.map(e=>`
            <figure>
              ${e.type==="video" ? `<video src="${e.dataUrl}" controls></video>` : `<img src="${e.dataUrl}" alt="">`}
              <figcaption>${esc(e.taskTitle)}</figcaption>
            </figure>`).join("")}
        </div>` : `<div class="rpt-empty">لا توجد شواهد مصوّرة مرفوعة بعد لمهام هذه الفترة — أضِفها من تبويب "المهام"</div>`}
    </div>

    <div class="rpt-closing">
      <div class="h">شكراً وتقديراً</div>
      <div class="p">هذا التقرير يوثّق ما تحقق فعلياً على أرض الواقع من برامج وفعاليات ريادة النشاط خلال هذه الفترة، تمهيداً لرفعه للإدارة ومتابعة الأثر التربوي على مدار العام.</div>
      <div class="sig">
        <div><b>عبدالله</b>رائد النشاط الطلابي — القسم الثانوي</div>
        <div class="school">مدارس الأندلس الأهلية<br>${esc(rangeLabel)}</div>
      </div>
    </div>
  `;
}

function viewReports(){
  const todayIso = isoDate(_now.getFullYear(), _now.getMonth(), _now.getDate());
  if (!REPORT_WEEK_ID){
    const current = DATA.weeklyPlan.find(p => todayIso >= p.startDate && todayIso <= p.endDate);
    REPORT_WEEK_ID = current ? current.id : (DATA.weeklyPlan[0] ? DATA.weeklyPlan[0].id : null);
  }

  let title, rangeLabel, data;
  if (REPORT_MODE === "weekly"){
    const week = DATA.weeklyPlan.find(p => p.id === REPORT_WEEK_ID) || DATA.weeklyPlan[0];
    if (week){
      title = "التقرير الأسبوعي";
      rangeLabel = `${formatLongAr(week.startDate)} — ${formatLongAr(week.endDate)}`;
      data = buildReportData(week.startDate, week.endDate);
    }
  } else {
    const monthStart = isoDate(REPORT_YEAR, REPORT_MONTH, 1);
    const monthEnd = isoDate(REPORT_YEAR, REPORT_MONTH, new Date(REPORT_YEAR, REPORT_MONTH+1, 0).getDate());
    title = "التقرير الشهري";
    rangeLabel = MONTH_NAME_FMT.format(new Date(REPORT_YEAR, REPORT_MONTH, 1));
    data = buildReportData(monthStart, monthEnd);
  }

  const weekOptions = DATA.weeklyPlan.map(p => `<option value="${p.id}" ${p.id===REPORT_WEEK_ID?"selected":""}>${p.startDate} — ${p.endDate}</option>`).join("");

  return `
    <div class="topbar">
      ${sectionTitle("الإنجاز والتوثيق", "التقارير الأسبوعية والشهرية", "report")}
    </div>

    <div class="report-toolbar">
      <div class="report-mode-toggle">
        <button class="${REPORT_MODE==='weekly'?'active':''}" data-action="reportSetMode" data-mode="weekly">أسبوعي</button>
        <button class="${REPORT_MODE==='monthly'?'active':''}" data-action="reportSetMode" data-mode="monthly">شهري</button>
      </div>
      ${REPORT_MODE==='weekly' ? `
        <select id="report-week-select" data-action-change="reportSelectWeek">${weekOptions}</select>
      ` : `
        <div class="cal-nav">
          <button data-action="reportPrevMonth">${ICONS.chevronNext}</button>
          <button data-action="reportNextMonth">${ICONS.chevronPrev}</button>
        </div>
        <div style="font-weight:800; color:var(--navy);">${MONTH_NAME_FMT.format(new Date(REPORT_YEAR, REPORT_MONTH, 1))}</div>
      `}
      <button class="btn accent" data-action="reportCopy">${ICONS.report}<span>${REPORT_COPIED ? "✓ تم النسخ" : "نسخ التقرير"}</span></button>
      <button class="btn ghost" data-action="reportPrint">🖨️ طباعة / PDF</button>
    </div>

    <div class="report-card" id="report-card">
      ${data ? reportHtml(title, rangeLabel, data) : emptyState("لا توجد خطة أسبوعية مسجّلة بعد")}
    </div>
  `;
}
function onTaskTypeChange(){
  const type = document.getElementById("t-type").value;
  const dayWrap = document.getElementById("t-day-wrap");
  const dateWrap = document.getElementById("t-date-wrap");
  if (!dayWrap || !dateWrap) return;
  dayWrap.classList.toggle("hidden", type !== "أسبوعي");
  dateWrap.classList.toggle("hidden", !(type === "شهري" || type === "لمرة واحدة"));
}

/* ============================================================ */
/* التصيير الرئيسي */
/* ============================================================ */
const TABS = [
  {key:"dashboard", label:"اليوم", icon:"home"},
  {key:"vision", label:"الرؤية", icon:"compass"},
  {key:"weekly", label:"الجدول", icon:"calendar"},
  {key:"calendar", label:"التقويم", icon:"year"},
  {key:"competitions", label:"المسابقات", icon:"trophy"},
  {key:"reports", label:"التقارير", icon:"report"},
  {key:"tasks", label:"المهام", icon:"list"},
  {key:"alerts", label:"التنبيهات", icon:"bell"},
];
const TAB_TITLES = {
  dashboard:["نظرة عامة","لوحة اليوم"],
  vision:["الإطار العام","الخطة والرؤية"],
  weekly:["الجدولة","الجدول الأسبوعي"],
  calendar:["العام الدراسي","التقويم السنوي"],
  competitions:["تثبيت الحضور والتميز","الابتكار والمسابقات"],
  reports:["الإنجاز والتوثيق","التقارير الأسبوعية والشهرية"],
  tasks:["الإدارة","المهام"],
  alerts:["المتابعة","التنبيهات"],
};

function viewLogin(){
  return `
    <div class="login-screen">
      <div class="login-card">
        <img class="login-logo" src="${LOGO.colorLockup}" alt="مدارس الأندلس الأهلية">
        <div class="login-sub">منصة رائد النشاط · القسم الثانوي بنين</div>
        <form id="login-form" class="login-form">
          <div class="field">
            <label>اسم المستخدم</label>
            <input type="text" id="login-username" autocomplete="username" placeholder="أدخل اسم المستخدم" autofocus>
          </div>
          <div class="field">
            <label>كلمة المرور</label>
            <input type="password" id="login-password" autocomplete="current-password" placeholder="أدخل كلمة المرور">
          </div>
          ${LOGIN_ERROR ? `<div class="login-error">${LOGIN_ERROR}</div>` : ""}
          <button type="submit" class="btn accent full">تسجيل الدخول</button>
        </form>
      </div>
    </div>
  `;
}

function render(){
  if (!AUTHED) {
    document.getElementById("app").innerHTML = viewLogin();
    return;
  }
  const today = todayInfo();
  const [eyebrow, title] = TAB_TITLES[TAB];
  const body =
    TAB === "dashboard" ? viewDashboard() :
    TAB === "vision" ? viewVision() :
    TAB === "weekly" ? viewWeekly() :
    TAB === "calendar" ? viewCalendar() :
    TAB === "competitions" ? viewCompetitions() :
    TAB === "reports" ? viewReports() :
    TAB === "tasks" ? viewTasks() :
    viewAlerts();

  const showTopbarDefault = TAB !== "weekly" && TAB !== "tasks" && TAB !== "calendar" && TAB !== "vision" && TAB !== "competitions" && TAB !== "reports";

  document.getElementById("app").innerHTML = `
    <div class="app">
      <aside class="sidebar">
        <div class="sidebar-logo"><img src="${LOGO.whiteLockup}" alt="مدارس الأندلس الأهلية"></div>
        <div class="sidebar-sub">القسم الثانوي بنين · منصة رائد النشاط</div>
        <nav class="nav-list">
          ${TABS.map(t => `
            <button class="nav-item ${TAB===t.key?"active":""}" data-action="setTab" data-tab="${t.key}">
              ${ICONS[t.icon]}<span>${t.label}</span>
            </button>`).join("")}
        </nav>
        <div class="sidebar-footer">
          <button class="logout-btn" data-action="logout">تسجيل الخروج</button>
          <div>مدارس الأندلس الأهلية · 1984</div>
        </div>
      </aside>

      <main class="content">
        <div class="content-inner">
          ${showTopbarDefault ? `
            <div class="topbar">
              <div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1></div>
              <div class="date-pill">${today.dayName} · ${today.formatted}</div>
            </div>` : ""}
          ${body}
        </div>
      </main>
    </div>
  `;

  if (TAB === "tasks") onTaskTypeChange();
}

/* ============================================================ */
/* تسجيل الدخول */
/* ============================================================ */
document.addEventListener("submit", (e) => {
  if (e.target.id !== "login-form") return;
  e.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  if (username === LOGIN_USERNAME && password === LOGIN_PASSWORD) {
    AUTHED = true;
    LOGIN_ERROR = "";
    try { sessionStorage.setItem(AUTH_KEY, "1"); } catch(e){}
  } else {
    LOGIN_ERROR = "اسم المستخدم أو كلمة المرور غير صحيحة";
  }
  render();
});

/* ============================================================ */
/* التعامل مع الأحداث (تفويض الأحداث) */
/* ============================================================ */
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const action = btn.dataset.action;

  if (action === "setTab") { TAB = btn.dataset.tab; SHOW_WEEKLY_FORM=false; EDIT_WEEKLY_ID=null; NEW_WEEKLY_DAY=null; SHOW_TASK_FORM=false; REPORT_COPIED=false; render(); return; }

  if (action === "logout") {
    AUTHED = false;
    try { sessionStorage.removeItem(AUTH_KEY); } catch(e){}
    render();
    return;
  }

  if (action === "toggleTask") {
    const id = btn.dataset.id;
    await mutate(d => { const t = d.tasks.find(x=>x.id===id); if (t) t.done = !t.done; });
    return;
  }

  if (action === "saveVision") {
    const vision = {
      schoolVision: document.getElementById("v-schoolVision").value,
      activityMission: document.getElementById("v-activityMission").value,
      ministryGoals: document.getElementById("v-ministryGoals").value,
    };
    await mutate(d => { d.vision = vision; });
    const label = document.getElementById("save-label");
    if (label) { label.textContent = "تم الحفظ"; setTimeout(()=>{ if(document.getElementById("save-label")) document.getElementById("save-label").textContent="حفظ الخطة"; }, 1500); }
    return;
  }

  if (action === "toggleWeeklyForm") { SHOW_WEEKLY_FORM = !SHOW_WEEKLY_FORM; EDIT_WEEKLY_ID = null; NEW_WEEKLY_DAY = null; render(); return; }
  if (action === "closeWeeklyForm") { SHOW_WEEKLY_FORM = false; EDIT_WEEKLY_ID = null; NEW_WEEKLY_DAY = null; render(); return; }
  if (action === "calAddWeekly") { SHOW_WEEKLY_FORM = true; EDIT_WEEKLY_ID = null; NEW_WEEKLY_DAY = btn.dataset.day; render(); return; }
  if (action === "editWeekly") { EDIT_WEEKLY_ID = btn.dataset.id; SHOW_WEEKLY_FORM = true; render(); return; }
  if (action === "addWeekly") {
    const day = document.getElementById("w-day").value;
    const time = document.getElementById("w-time").value;
    const title = document.getElementById("w-title").value.trim();
    const location = document.getElementById("w-location").value.trim();
    if (!title || !time) return;
    await mutate(d => { d.weekly.push({id:uid(), day, time, title, location}); });
    SHOW_WEEKLY_FORM = false; NEW_WEEKLY_DAY = null; render();
    return;
  }
  if (action === "saveWeekly") {
    const id = btn.dataset.id;
    const day = document.getElementById("w-day").value;
    const time = document.getElementById("w-time").value;
    const title = document.getElementById("w-title").value.trim();
    const location = document.getElementById("w-location").value.trim();
    if (!title || !time) return;
    await mutate(d => {
      const w = d.weekly.find(x=>x.id===id);
      if (w) { w.day=day; w.time=time; w.title=title; w.location=location; }
    });
    SHOW_WEEKLY_FORM = false; EDIT_WEEKLY_ID = null; render();
    return;
  }
  if (action === "removeWeekly") {
    const id = btn.dataset.id;
    await mutate(d => { d.weekly = d.weekly.filter(w=>w.id!==id); });
    return;
  }

  if (action === "toggleTaskForm") { SHOW_TASK_FORM = !SHOW_TASK_FORM; render(); return; }
  if (action === "closeTaskForm") { SHOW_TASK_FORM = false; render(); return; }
  if (action === "addTask") {
    const title = document.getElementById("t-title").value.trim();
    const type = document.getElementById("t-type").value;
    const priority = document.getElementById("t-priority").value;
    const day = document.getElementById("t-day").value;
    const dueDate = document.getElementById("t-dueDate").value;
    if (!title) return;
    await mutate(d => { d.tasks.push({id:uid(), title, type, priority, day: type==="أسبوعي"?day:"", dueDate: (type==="شهري"||type==="لمرة واحدة")?dueDate:"", done:false}); });
    SHOW_TASK_FORM = false; render();
    return;
  }
  if (action === "removeTask") {
    const id = btn.dataset.id;
    await mutate(d => { d.tasks = d.tasks.filter(t=>t.id!==id); });
    return;
  }

  if (action === "setFilter") { TASK_FILTER = btn.dataset.filter; render(); return; }

  if (action === "togglePlanForm") { SHOW_PLAN_FORM = !SHOW_PLAN_FORM; render(); return; }
  if (action === "closePlanForm") { SHOW_PLAN_FORM = false; render(); return; }
  if (action === "addPlanWeek") {
    const startDate = document.getElementById("p-start").value;
    const endDate = document.getElementById("p-end").value;
    const focus = document.getElementById("p-focus").value.trim();
    if (!startDate || !endDate || !focus) return;
    await mutate(d => { d.weeklyPlan.push({id:uid(), startDate, endDate, focus}); });
    SHOW_PLAN_FORM = false; render();
    return;
  }
  if (action === "removePlanWeek") {
    const id = btn.dataset.id;
    await mutate(d => { d.weeklyPlan = d.weeklyPlan.filter(p=>p.id!==id); });
    return;
  }

  if (action === "calPrevMonth") { CAL_MONTH--; if (CAL_MONTH<0){CAL_MONTH=11; CAL_YEAR--;} render(); return; }
  if (action === "calNextMonth") { CAL_MONTH++; if (CAL_MONTH>11){CAL_MONTH=0; CAL_YEAR++;} render(); return; }
  if (action === "calToday") { CAL_YEAR=_now.getFullYear(); CAL_MONTH=_now.getMonth(); CAL_SELECTED=isoDate(_now.getFullYear(),_now.getMonth(),_now.getDate()); render(); return; }
  if (action === "calSelectDay") { CAL_SELECTED = btn.dataset.date; render(); return; }
  if (action === "calSetView") { CAL_VIEW = btn.dataset.view; render(); return; }

  if (action === "reportSetMode") { REPORT_MODE = btn.dataset.mode; REPORT_COPIED=false; render(); return; }
  if (action === "reportPrevMonth") { REPORT_MONTH--; if (REPORT_MONTH<0){REPORT_MONTH=11; REPORT_YEAR--;} REPORT_COPIED=false; render(); return; }
  if (action === "reportNextMonth") { REPORT_MONTH++; if (REPORT_MONTH>11){REPORT_MONTH=0; REPORT_YEAR++;} REPORT_COPIED=false; render(); return; }
  if (action === "reportPrint") { window.print(); return; }
  if (action === "reportCopy") {
    const card = document.getElementById("report-card");
    const text = card ? card.innerText : "";
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(text);
    } catch(e) {}
    REPORT_COPIED = true; render();
    return;
  }

  if (action === "toggleCompForm") { SHOW_COMP_FORM = !SHOW_COMP_FORM; EDIT_COMP_ID = null; render(); return; }
  if (action === "closeCompForm") { SHOW_COMP_FORM = false; EDIT_COMP_ID = null; render(); return; }
  if (action === "editCompetition") { EDIT_COMP_ID = btn.dataset.id; SHOW_COMP_FORM = true; render(); return; }
  if (action === "addCompetition") {
    const name = document.getElementById("c-name").value.trim();
    const organizer = document.getElementById("c-organizer").value.trim();
    const level = document.getElementById("c-level").value;
    const status = document.getElementById("c-status").value;
    const deadline = document.getElementById("c-deadline").value;
    const result = document.getElementById("c-result").value.trim();
    if (!name) return;
    await mutate(d => { d.competitions.push({id:uid(), name, organizer, level, status, deadline, result, students:[], evidence:[]}); });
    SHOW_COMP_FORM = false; render();
    return;
  }
  if (action === "saveCompetition") {
    const id = btn.dataset.id;
    const name = document.getElementById("c-name").value.trim();
    const organizer = document.getElementById("c-organizer").value.trim();
    const level = document.getElementById("c-level").value;
    const status = document.getElementById("c-status").value;
    const deadline = document.getElementById("c-deadline").value;
    const result = document.getElementById("c-result").value.trim();
    if (!name) return;
    await mutate(d => {
      const c = d.competitions.find(x=>x.id===id);
      if (c) { c.name=name; c.organizer=organizer; c.level=level; c.status=status; c.deadline=deadline; c.result=result; }
    });
    SHOW_COMP_FORM = false; EDIT_COMP_ID = null; render();
    return;
  }
  if (action === "removeCompetition") {
    const id = btn.dataset.id;
    await mutate(d => { d.competitions = d.competitions.filter(c=>c.id!==id); });
    return;
  }
  if (action === "toggleStudents") { STUDENTS_OPEN_ID = (STUDENTS_OPEN_ID === btn.dataset.id ? null : btn.dataset.id); render(); return; }
  if (action === "addStudent") {
    const id = btn.dataset.id;
    const nameInput = document.getElementById(`s-name-${id}`);
    const gradeInput = document.getElementById(`s-grade-${id}`);
    const name = nameInput.value.trim();
    const grade = gradeInput.value.trim();
    if (!name) return;
    await mutate(d => {
      const c = d.competitions.find(x=>x.id===id);
      if (c) { if (!c.students) c.students=[]; c.students.push({id:uid(), name, grade}); }
    });
    return;
  }
  if (action === "removeStudent") {
    const id = btn.dataset.id, sid = btn.dataset.sid;
    await mutate(d => {
      const c = d.competitions.find(x=>x.id===id);
      if (c && c.students) c.students = c.students.filter(s=>s.id!==sid);
    });
    return;
  }

  if (action === "toggleEvidence") { EVIDENCE_OPEN_ID = (EVIDENCE_OPEN_ID === btn.dataset.id ? null : btn.dataset.id); render(); return; }
  if (action === "removeEvidence") {
    const id = btn.dataset.id, eid = btn.dataset.eid, kind = btn.dataset.kind || "task";
    await mutate(d => {
      const arr = kind === "competition" ? d.competitions : d.tasks;
      const item = arr.find(x=>x.id===id);
      if (item && item.evidence) item.evidence = item.evidence.filter(e=>e.id!==eid);
    });
    return;
  }
});

document.addEventListener("change", async (e) => {
  if (e.target.classList.contains("evidence-input")) {
    const id = e.target.dataset.id;
    const kind = e.target.dataset.kind || "task";
    const files = Array.from(e.target.files || []);
    const MAX_BYTES = 15 * 1024 * 1024;
    const newItems = [];
    for (const file of files) {
      if (file.size > MAX_BYTES) continue;
      const isVideo = file.type.startsWith("video/");
      let dataUrl;
      try { dataUrl = await readFileAsDataURL(file); } catch(err) { continue; }
      if (!isVideo) { try { dataUrl = await compressImageDataUrl(dataUrl); } catch(err){} }
      newItems.push({id: uid(), type: isVideo ? "video" : "image", dataUrl, name: file.name});
    }
    if (newItems.length) {
      await mutate(d => {
        const arr = kind === "competition" ? d.competitions : d.tasks;
        const item = arr.find(x=>x.id===id);
        if (item) { if (!item.evidence) item.evidence = []; item.evidence.push(...newItems); }
      });
    }
    e.target.value = "";
    return;
  }
  if (e.target.id === "report-week-select") {
    REPORT_WEEK_ID = e.target.value;
    REPORT_COPIED = false;
    render();
    return;
  }
  if (e.target.classList.contains("comp-status-select")) {
    const id = e.target.dataset.id;
    const status = e.target.value;
    await mutate(d => { const c = d.competitions.find(x=>x.id===id); if (c) c.status = status; });
  }
});

/* ============================================================ */
/* التشغيل */
/* ============================================================ */
(async function init(){
  try { AUTHED = sessionStorage.getItem(AUTH_KEY) === "1"; } catch(e){ AUTHED = false; }
  const saved = await storageGet(STORAGE_KEY);
  if (saved) {
    try { DATA = JSON.parse(saved); } catch(e) { DATA = JSON.parse(JSON.stringify(DEFAULT_DATA)); }
  }
  render();
})();
