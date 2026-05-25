(() => {
    const STORAGE_KEY = "noor-lang";
    const DEFAULT_LANG = "ar";

    const messages = {
        ar: {
            "meta.titleSuffix": "نور",
            "meta.description": "نور — رفيقك للصلاة والذكر والقرآن. تطبيق iOS للصلاة، الأذكار، القرآن، والسلاسل — بخصوصية كاملة.",
            "logo.alt": "نور",
            "logo.aria": "نور — الصفحة الرئيسية",
            "nav.how": "كيف يعمل",
            "nav.features": "المميزات",
            "nav.screenshots": "لقطات من التطبيق",
            "nav.privacy": "الخصوصية",
            "nav.policy": "سياسة الخصوصية",
            "nav.contact": "تواصل",
            "nav.download": "تحميل التطبيق",
            "footer.tagline": "نورٌ على نور — Light upon Light",
            "footer.download": "تحميل من App Store",
            "footer.copy": "نور. جميع الحقوق محفوظة.",
            "hero.eyebrow": "✨ · خصوصية كاملة · بدون تتبع",
            "hero.title": "صلاتك وذكرك وقرآنك<br /><em>في مكان واحد.</em>",
            "hero.sub": "نور يرافقك يومياً — مواقيت دقيقة، أذكار تفاعلية، سلاسل تحفّزك، وقرآن يسير. كل شيء محفوظ على جهازك — بدون جمع بيانات.",
            "hero.cta": "استكشف المميزات",
            "how.title": "كيف يعمل نور",
            "how.sub": "ثلاث خطوات بسيطة لبناء روتين روحي ثابت — بدون تعقيد.",
            "how.step1.title": "حمّل وفعّل موقعك",
            "how.step1.body": "اسمح بالموقع مرة واحدة لحساب مواقيت الصلاة، اتجاه القبلة، وأقرب المساجد — دون تخزين أو مشاركة.",
            "how.step2.title": "ابنِ يومك الروحي",
            "how.step2.body": "تابع الصلوات، أكمل أذكار الصباح والمساء، واقرأ وردك من القرآن — كل شيء محفوظ على جهازك.",
            "how.step3.title": "حافظ على سلسلتك",
            "how.step3.body": "تذكيرات لطيفة قبل منتصف الليل، عدّاد تسبيح تفاعلي، ولوحة رحلتك لتشجيعك على الاستمرار.",
            "features.title": "كل ما تحتاجه في تطبيق واحد",
            "features.sub": "مصمم للاستخدام اليومي — ليلاً ونهاراً — بأناقة وهدوء.",
            "features.f1.title": "لحظتي — إدراك الصلاة",
            "features.f1.body": "عداد تنازلي دقيق للصلاة القادمة، شريط يومي للصلوات الخمس، وتنبيهات قبل انتهاء السلسلة.",
            "features.f1.li1": "مواقيت محسوبة حسب موقعك",
            "features.f1.li2": "عداد متبقٍ مع حلقة تقدم",
            "features.f1.li3": "تذكير: «لا تفوّت السلسلة»",
            "features.f2.title": "أذكاري — تسبيح تفاعلي",
            "features.f2.body": "أذكار الصباح والمساء وبعد الصلاة مع عدّاد تسبيح، تقدم يومي، وسلاسل تحفّزك على الإتمام.",
            "features.f2.li1": "تبويبات: صباح · مساء · بعد الصلاة",
            "features.f2.li2": "زر «اضغط للتسبيح» مع حلقة تقدم",
            "features.f2.li3": "مصادر الأحاديث والأدعية",
            "features.f3.title": "صلاتي · القرآن · الرحلة",
            "features.f3.body": "جدول صلوات واضح، ورد يومي من القرآن، آية اليوم، استماع للتلاوة، ولوحة رحلتك مع الإحصائيات.",
            "features.f3.li1": "زر «صلّيتُ» بعد وقت الأذان",
            "features.f3.li2": "ورد يومي: ٤ صفحات مع تتبع",
            "features.f3.li3": "تحديات وسلاسل متعددة",
            "features.f4.title": "قبلة · مساجد",
            "features.f4.body": "بوصلة القبلة، أقرب مسجد، وحلقة تحفيظ قريبة — كلها حسب موقعك.",
            "features.f4.li1": "بوصلة قبلة دقيقة حسب موقعك",
            "features.f4.li2": "الموقع للخدمة فقط — لا يُرسل لأي جهة",
            "features.f4.li3": "مناسب لجميع الأعمار (4+)",
            "screens.title": "لقطات من التطبيق",
            "screens.sub": "واجهة داكنة هادئة — مصممة للتركيز والطمأنينة.",
            "screens.c1": "لحظتي",
            "screens.c2": "صلاتي",
            "screens.c3": "أذكاري",
            "screens.c4": "رحلتي",
            "screens.c5": "القرآن",
            "screens.c6": "آية اليوم",
            "screens.c7": "إدراك الصلاة",
            "screens.c8": "شاشة القفل",
            "privacy.title": "خصوصيتك أولاً",
            "privacy.sub": "نور لا يجمع ولا يخزّن ولا يرسل أي بيانات شخصية إلى خوادمنا.",
            "privacy.c1.title": "تخزين محلي فقط",
            "privacy.c1.body": "الأذكار، السلاسل، والإعدادات تبقى على جهازك — دائماً.",
            "privacy.c2.title": "موقع للخدمة فقط",
            "privacy.c2.body": "للقبلة ومواقيت الصلاة والمساجد — بدون تخزين أو مشاركة.",
            "privacy.c3.title": "مدفوعات مشفّرة",
            "privacy.c3.body": "Apple Pay · InstaPay · PayMob — لا نرى بيانات بطاقتك.",
            "privacy.cta": "اقرأ سياسة الخصوصية الكاملة",
            "cta.title": "ابدأ رحلتك مع نور",
            "cta.sub": "مجاني للتحميل · بدون بطاقة · iOS · نورٌ على نور",
            "contact.title": "تواصل معنا",
            "contact.sub": "سؤال، ملاحظة، أو دعاء — يسعدنا سماعك.",
            "contact.body": "للاستفسارات حول التطبيق أو سياسة الخصوصية:",
            "shot.moment": "لحظتي — شاشة التطبيق",
            "shot.prayers": "صلاتي — مواقيت الصلاة",
            "shot.azkar": "أذكاري — أذكار الصباح",
            "shot.journey": "رحلتي — السلاسل والتقدم",
            "shot.quran": "القرآن الكريم — ورد اليوم",
            "shot.prayer-awareness": "إدراك الصلاة — القبلة والمساجد",
            "shot.home-dashboard": "آية اليوم والاستماع",
            "shot.lock-screen": "ودجت شاشة القفل — الصلاة القادمة",
            "page.index": "رفيقك للصلاة والذكر والقرآن",
            "page.privacy": "سياسة الخصوصية"
        },
        en: {
            "meta.titleSuffix": "Noor",
            "meta.description": "Noor — your companion for prayer, dhikr, and the Quran. iOS app for prayer times, adhkar, Quran, and streaks — with full privacy.",
            "logo.alt": "Noor",
            "logo.aria": "Noor — Home",
            "nav.how": "How It Works",
            "nav.features": "Features",
            "nav.screenshots": "App Screenshots",
            "nav.privacy": "Privacy",
            "nav.policy": "Privacy Policy",
            "nav.contact": "Contact",
            "nav.download": "Download",
            "footer.tagline": "Light upon Light — Noor upon Noor",
            "footer.download": "Download on App Store",
            "footer.copy": "Noor App. All rights reserved.",
            "hero.eyebrow": "✨ · Full privacy · No tracking",
            "hero.title": "Your prayer, dhikr, and Quran<br /><em>in one place.</em>",
            "hero.sub": "Noor walks with you daily — accurate prayer times, interactive adhkar, motivating streaks, and gentle Quran reading. Everything stays on your device with zero data collection.",
            "hero.cta": "Explore features",
            "how.title": "How Noor works",
            "how.sub": "Three simple steps to build a steady spiritual routine — without complexity.",
            "how.step1.title": "Download & allow location",
            "how.step1.body": "Allow location once for accurate prayer times, Qibla direction, and nearby mosques — never stored or shared.",
            "how.step2.title": "Build your spiritual day",
            "how.step2.body": "Track prayers, complete morning and evening adhkar, and read your daily Quran portion — all stored locally.",
            "how.step3.title": "Keep your streak",
            "how.step3.body": "Gentle reminders before midnight, an interactive tasbeeh counter, and your journey dashboard to keep you consistent.",
            "features.title": "Everything you need in one app",
            "features.sub": "Designed for daily worship — day and night — with calm elegance.",
            "features.f1.title": "My Moment — prayer awareness",
            "features.f1.body": "A precise countdown to the next prayer, a daily bar for all five prayers, and alerts before your streak window ends.",
            "features.f1.li1": "Prayer times calculated for your location",
            "features.f1.li2": "Time remaining with a progress ring",
            "features.f1.li3": "Catch-up reminders before the window closes",
            "features.f2.title": "My Adhkar — interactive dhikr",
            "features.f2.body": "Morning, evening, and after-prayer adhkar with a tap counter, daily progress, and streaks that motivate completion.",
            "features.f2.li1": "Tabs: Morning · Evening · After prayer",
            "features.f2.li2": "Tap to count with a progress ring",
            "features.f2.li3": "Hadith and dua sources included",
            "features.f3.title": "Prayers · Quran · Journey",
            "features.f3.body": "A clear prayer schedule, daily Quran portion, verse of the day, recitation playback, and a journey dashboard with stats.",
            "features.f3.li1": "Mark \"I prayed\" after adhan time",
            "features.f3.li2": "Daily portion: 4 pages with tracking",
            "features.f3.li3": "Multiple streaks and challenges",
            "features.f4.title": "Qibla · Mosques",
            "features.f4.body": "Qibla compass, nearest mosque, and nearby halaqa — all based on your location.",
            "features.f4.li1": "Accurate Qibla compass for your location",
            "features.f4.li2": "Location for service only — never sent anywhere",
            "features.f4.li3": "Suitable for all ages (4+)",
            "screens.title": "From the app",
            "screens.sub": "A calm dark interface designed for focus and peace.",
            "screens.c1": "My Moment",
            "screens.c2": "My Prayers",
            "screens.c3": "My Adhkar",
            "screens.c4": "My Journey",
            "screens.c5": "Daily Quran",
            "screens.c6": "Verse & Quran",
            "screens.c7": "Prayer Awareness",
            "screens.c8": "Lock Screen Widget",
            "privacy.title": "Your privacy first",
            "privacy.sub": "Noor does not collect, store, or transmit any personal data to our servers.",
            "privacy.c1.title": "Local storage only",
            "privacy.c1.body": "Adhkar, streaks, and settings stay on your device — always.",
            "privacy.c2.title": "Location for service only",
            "privacy.c2.body": "For Qibla, prayer times, and mosques — never stored or shared.",
            "privacy.c3.title": "Encrypted payments",
            "privacy.c3.body": "Apple Pay · InstaPay · PayMob — we never see your card details.",
            "privacy.cta": "Read the full privacy policy",
            "cta.title": "Start your journey with Noor",
            "cta.sub": "Free to download · No card required · iOS · Light upon Light",
            "contact.title": "Contact us",
            "contact.sub": "Questions, feedback, or support — we'd love to hear from you.",
            "contact.body": "For app or privacy policy inquiries:",
            "shot.moment": "My Moment — app screen",
            "shot.prayers": "My Prayers — prayer times",
            "shot.azkar": "My Adhkar — morning adhkar",
            "shot.journey": "My Journey — streaks and progress",
            "shot.quran": "Holy Quran — daily portion",
            "shot.prayer-awareness": "Prayer awareness — Qibla and mosques",
            "shot.home-dashboard": "Verse of the day and Quran listening",
            "shot.lock-screen": "Lock screen widget — next prayer",
            "page.index": "Your companion for prayer, dhikr, and Quran",
            "page.privacy": "Privacy Policy"
        }
    };

    function getStoredLang() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved === "en" || saved === "ar" ? saved : DEFAULT_LANG;
        } catch {
            return DEFAULT_LANG;
        }
    }

    function t(lang, key) {
        return messages[lang]?.[key] ?? messages[DEFAULT_LANG][key] ?? key;
    }

    function applyText(lang) {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const value = t(lang, key);
            if (el.hasAttribute("data-i18n-html")) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
            el.alt = t(lang, el.getAttribute("data-i18n-alt"));
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
            el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
        });
    }

    function applyScreenshots(lang) {
        document.querySelectorAll("[data-shot]").forEach((img) => {
            const shot = img.getAttribute("data-shot");
            img.src = `/images/screenshots/${lang}/${shot}.png`;
        });
    }

    function applyLogo(lang) {
        document.querySelectorAll("[data-logo]").forEach((img) => {
            img.src = lang === "en" ? "/images/logo-full-en.svg" : "/images/logo-full.svg";
        });
    }

    function applyMeta(lang) {
        const suffix = t(lang, "meta.titleSuffix");
        const titleEl = document.querySelector("title");
        const pageKey = titleEl?.dataset.i18nPage;
        const pageTitle = pageKey ? t(lang, pageKey) : titleEl?.dataset.pageTitle;
        if (pageTitle) {
            document.title = `${pageTitle} — ${suffix}`;
        }

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", t(lang, "meta.description"));
        }
    }

    function applyLangButtons(lang) {
        document.querySelectorAll("[data-set-lang]").forEach((btn) => {
            const active = btn.getAttribute("data-set-lang") === lang;
            btn.classList.toggle("is-active", active);
            btn.setAttribute("aria-pressed", active ? "true" : "false");
        });
    }

    function setLanguage(lang) {
        const next = lang === "en" ? "en" : "ar";
        document.documentElement.lang = next;
        document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
        document.documentElement.classList.remove("lang-ar", "lang-en");
        document.documentElement.classList.add(`lang-${next}`);

        applyText(next);
        applyScreenshots(next);
        applyLogo(next);
        applyMeta(next);
        applyLangButtons(next);

        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* ignore */
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        setLanguage(getStoredLang());

        document.querySelectorAll("[data-set-lang]").forEach((btn) => {
            btn.addEventListener("click", () => {
                setLanguage(btn.getAttribute("data-set-lang"));
            });
        });
    });

    window.noorI18n = { setLanguage, t };
})();
