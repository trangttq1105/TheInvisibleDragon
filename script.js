// ============================================================
// THE INVISIBLE DRAGON — SUPPORT TOOL
// Main Configuration
// ============================================================

const CONFIG = {

    // ========================================================
    // PHASE 1 — OFFICIAL TRAILER
    // Thailand time / GMT+7
    // ========================================================

    trailerTime: "2026-08-24T17:11:00+07:00",


    // ========================================================
    // PHASE 2 — SPECIAL EP
    // Thailand time / GMT+7
    // ========================================================

    specialEPTime: "2026-08-27T17:50:00+07:00",


    // ========================================================
    // PHASE 1 ACHIEVEMENT
    // ========================================================

    trailerAchievement: {
        views: 0,
        posts: 0,
        countries: 0,
        numberOne: 0
    },


    // ========================================================
    // PHASE 2 ACHIEVEMENT
    // ========================================================

    epAchievement: {
        posts: 0,
        countries: 0,
        numberOne: 0
    },


    // ========================================================
    // LATEST UPDATE
    // ========================================================

    trailerLatestUpdate: "XXPM 28.08.2026",

    epLatestUpdate: "XXPM 29.08.2026"

};


// ============================================================
// LINKS
// ============================================================

const LINKS = {

    // -----------------------------
    // GENERAL
    // -----------------------------

    howToTrend:
        "https://fktrendhouse.carrd.co/#one",

    howToStream:
        "https://fktrendhouse.carrd.co/#four",

    character:
        "https://firstkhaotunginterfc.carrd.co/",

    myDramaList:
        "https://mydramalist.com/802908-the-invisible-dragon",

    imdb:
        "https://www.imdb.com/title/tt39029343/",

    iqiyi:
        "https://www.iq.com/?lang=en_us",


    // -----------------------------
    // PHASE 1
    // -----------------------------

    trailerYoutube:
        "https://www.youtube.com/watch?v=vM6E73hy9-8",

    trailerX:
        "https://x.com/GMMTV/status/1993291330819440690",

    trailerInstagram:
        "https://www.instagram.com/p/DRep6pak7IX/",

    trailerTiktok:
        "https://www.tiktok.com/@gmmtvofficial/video/7576668411497942280",

    trailerFacebook:
        "https://www.facebook.com/gmmtvofficial/posts/%E0%B9%80%E0%B8%84%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A3-the-invisible-dragon-official-account-theinvisibledragongmmtv2026/1429554118540825/",

    trailerHashtag:
        "#TheInvisibleDragon",

    trailerPost:
        "https://x.com/intent/tweet?text=%0A%0A%23TheInvisibleDragon",


    // -----------------------------
    // PHASE 2
    // -----------------------------

    epYoutube1:
        "https://www.youtube.com/watch?v=vM6E73hy9-8",

    epYoutube2:
        "https://www.youtube.com/watch?v=vM6E73hy9-8",

    epYoutube3:
        "https://www.youtube.com/watch?v=vM6E73hy9-8",

    epYoutube4:
        "https://www.youtube.com/watch?v=vM6E73hy9-8",

    epIqiyi:
        "https://www.iq.com/?lang=en_us",

    epHashtag:
        "#TheInvisibleDragonSpecial",

    epPost:
        "https://x.com/intent/tweet?text=%0A%0A%23TheInvisibleDragonSpecialEP",


    // -----------------------------
    // X / LATEST UPDATE
    // -----------------------------

    firstKhaoFans:
        "https://x.com/FirstKhaoFans"

};


// ============================================================
// DOM ELEMENTS
// ============================================================

const eventMessage =
    document.getElementById("eventMessage");

const eventTime =
    document.getElementById("eventTime");

const localTimeLabel =
    document.getElementById("localTimeLabel");

const localTime =
    document.getElementById("localTime");

const afterEventMessage =
    document.getElementById("afterEventMessage");

const countdownTitle =
    document.getElementById("countdownTitle");

const countdown =
    document.getElementById("countdown");

const streamingActions =
    document.getElementById("streamingActions");

const trendingActions =
    document.getElementById("trendingActions");

const achievementContent =
    document.getElementById("achievementContent");

const latestUpdate =
    document.getElementById("latestUpdate");


// ============================================================
// DATE HELPERS
// ============================================================

const trailerDate =
    new Date(CONFIG.trailerTime);

const specialEPDate =
    new Date(CONFIG.specialEPTime);

const trailer24hDate =
    new Date(
        trailerDate.getTime() + 24 * 60 * 60 * 1000
    );

const specialEP24hDate =
    new Date(
        specialEPDate.getTime() + 24 * 60 * 60 * 1000
    );


// ============================================================
// FORMAT DATE
// ============================================================

function formatThaiTime(date) {

    const options = {
        timeZone: "Asia/Bangkok",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    const parts =
        new Intl.DateTimeFormat(
            "en-US",
            options
        ).formatToParts(date);

    let hour = "";
    let minute = "";
    let day = "";
    let month = "";
    let year = "";
    let dayPeriod = "";

    parts.forEach(part => {

        if (part.type === "hour")
            hour = part.value;

        if (part.type === "minute")
            minute = part.value;

        if (part.type === "day")
            day = part.value;

        if (part.type === "month")
            month = part.value;

        if (part.type === "year")
            year = part.value;

        if (part.type === "dayPeriod")
            dayPeriod = part.value;

    });

    return `${hour}:${minute} ${dayPeriod} ${day}.${month}.${year}`;

}


// ============================================================
// FORMAT LOCAL TIME
// ============================================================

function formatLocalTime(date) {

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    const parts =
        new Intl.DateTimeFormat(
            "en-US",
            options
        ).formatToParts(date);

    let hour = "";
    let minute = "";
    let day = "";
    let month = "";
    let year = "";
    let dayPeriod = "";

    parts.forEach(part => {

        if (part.type === "hour")
            hour = part.value;

        if (part.type === "minute")
            minute = part.value;

        if (part.type === "day")
            day = part.value;

        if (part.type === "month")
            month = part.value;

        if (part.type === "year")
            year = part.value;

        if (part.type === "dayPeriod")
            dayPeriod = part.value;

    });

    return `${hour}:${minute} ${dayPeriod} ${day}.${month}.${year}`;

}


// ============================================================
// CREATE ACTION BUTTON
// ============================================================

function createActionButton(
    name,
    url,
    description = ""
) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "action-item";

    const button =
        document.createElement("a");

    button.className =
        "action-button";

    button.href = url;

    button.target = "_blank";

    button.rel =
        "noopener noreferrer";

    button.textContent = name;

    wrapper.appendChild(button);


    if (description) {

        const desc =
            document.createElement("span");

        desc.className =
            "action-description";

        desc.textContent =
            description;

        wrapper.appendChild(desc);

    }

    return wrapper;

}


// ============================================================
// CREATE TEXT BOX
// ============================================================

function createTextBox(text) {

    const box =
        document.createElement("div");

    box.className =
        "action-button";

    box.textContent = text;

    return box;

}


// ============================================================
// PHASE 1 — BEFORE TRAILER
// ============================================================

function showPhase1Before() {

    eventMessage.innerHTML =
        "The Invisible Dragon official trailer will be released at";

    eventTime.textContent =
        `${formatThaiTime(trailerDate)} (Thai time)`;

    localTimeLabel.textContent =
        "Start time in your location is:";

    localTime.textContent =
        formatLocalTime(trailerDate);

    afterEventMessage.classList.add("hidden");


    countdownTitle.textContent =
        "Countdown:";


    streamingActions.innerHTML = "";

    trendingActions.innerHTML = "";


  streamingActions.appendChild(
    createTextBox("Updating...")
);


trendingActions.appendChild(
    createTextBox("Hashtag: #TheInvisibleDragon")
);


    renderTrailerAchievement();

}


// ============================================================
// PHASE 1 — AFTER TRAILER
// ============================================================

function showPhase1After() {

    eventMessage.innerHTML =
        "<strong>The Invisible Dragon</strong> trailer already released";

    eventTime.textContent = "";

    localTimeLabel.textContent = "";

    localTime.textContent = "";

    afterEventMessage.classList.remove("hidden");


    countdownTitle.textContent =
        "24hours tracking time:";


    renderTrailerActions();

    renderTrailerAchievement();

}


// ============================================================
// PHASE 1 ACTIONS
// ============================================================

function renderTrailerActions() {

    streamingActions.innerHTML = "";

    trendingActions.innerHTML = "";


    // -----------------------------
    // STREAMING
    // -----------------------------


    streamingActions.appendChild(

        createActionButton(
            "YouTube",
            LINKS.trailerYoutube,
            "Watch + Like + Share"
        )

    );


    streamingActions.appendChild(

        createActionButton(
            "X",
            LINKS.trailerX,
            "Like + Repost + Reply + Quote"
        )

    );


    streamingActions.appendChild(

        createActionButton(
            "Instagram",
            LINKS.trailerInstagram,
            "Like + Repost + Share"
        )

    );


    streamingActions.appendChild(

        createActionButton(
            "Tiktok",
            LINKS.trailerTiktok,
            "Like + Repost + Share"
        )

    );


    streamingActions.appendChild(

        createActionButton(
            "Facebook",
            LINKS.trailerFacebook,
            "Like + Share"
        )

    );


    // -----------------------------
    // TRENDING
    // -----------------------------

    trendingActions.appendChild(

        createTextBox(
            `Hashtag: ${LINKS.trailerHashtag}`
        )

    );


    trendingActions.appendChild(

        createActionButton(
            "Click to post",
            LINKS.trailerPost
        )

    );

}


// ============================================================
// PHASE 2 — BEFORE SPECIAL EP
// ============================================================

function showPhase2Before() {

    eventMessage.innerHTML =
        "The Invisible Dragon Special EP will start at";

    eventTime.textContent =
        `${formatThaiTime(specialEPDate)} (Thai time)`;

    localTimeLabel.textContent =
        "Start time in your location is:";

    localTime.textContent =
        formatLocalTime(specialEPDate);

    afterEventMessage.classList.add("hidden");


    countdownTitle.textContent =
        "Countdown:";


    renderPhase2BeforeActions();

    renderEPAchievement();

}


// ============================================================
// PHASE 2 — AFTER SPECIAL EP
// ============================================================

function showPhase2After() {

    eventMessage.innerHTML =
        "<strong>The Invisible Dragon Special EP has started</strong>";

    eventTime.textContent = "";

    localTimeLabel.textContent = "";

    localTime.textContent = "";

    afterEventMessage.classList.remove("hidden");


    countdownTitle.textContent =
        "24hours tracking time:";


    renderPhase2AfterActions();

    renderEPAchievement();

}


// ============================================================
// PHASE 2 — BEFORE ACTIONS
// ============================================================

function renderPhase2BeforeActions() {

    streamingActions.innerHTML = "";

    trendingActions.innerHTML = "";


    // NEW EP

    const epButton =
    
    streamingActions.appendChild(epButton);


    // TRENDING

    trendingActions.appendChild(

        createTextBox("Hashtag: #TheInvisibleDragonSpecial")
        )

    );

}


// ============================================================
// PHASE 2 — AFTER ACTIONS
// ============================================================

function renderPhase2AfterActions() {

    streamingActions.innerHTML = "";

    trendingActions.innerHTML = "";


    // -----------------------------
    // NEW EP
    // -----------------------------

    streamingActions.appendChild(


    streamingActions.appendChild(

        createActionButton(
            "YouTube 1/4",
            LINKS.epYoutube1,
            "Watch + Like + Share"
        )

    );


    streamingActions.appendChild(

        createActionButton(
            "YouTube 2/4",
            LINKS.epYoutube2,
            "Watch + Like + Share"
        )

    );


    streamingActions.appendChild(

        createActionButton(
            "YouTube 3/4",
            LINKS.epYoutube3,
            "Watch + Like + Share"
        )

    );


    streamingActions.appendChild(

        createActionButton(
            "YouTube 4/4",
            LINKS.epYoutube4,
            "Watch + Like + Share"
        )

    );


    streamingActions.appendChild(

        createActionButton(
            "iQIYI",
            LINKS.epIqiyi
        )

    );


    // -----------------------------
    // TRENDING
    // -----------------------------

    trendingActions.appendChild(


    trendingActions.appendChild(

        createTextBox(
            `Hashtag: ${LINKS.epHashtag}`
        )

    );


    trendingActions.appendChild(

        createActionButton(
            "Click to post",
            LINKS.epPost
        )

    );

}


// ============================================================
// PHASE 1 ACHIEVEMENT
// ============================================================

function renderTrailerAchievement() {

    achievementContent.innerHTML = "";

    achievementContent.style.gridTemplateColumns =
        "repeat(4, 1fr)";


    const items = [

        [
            "Total views",
            CONFIG.trailerAchievement.views
        ],

        [
            "Total posts",
            CONFIG.trailerAchievement.posts
        ],

        [
            "Total countries",
            CONFIG.trailerAchievement.countries
        ],

        [
            "Total #1",
            CONFIG.trailerAchievement.numberOne
        ]

    ];


    items.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "achievement-item";

        div.innerHTML = `
            <span class="achievement-label">
                ${item[0]}
            </span>

            <span class="achievement-value">
                ${item[1]}
            </span>
        `;

        achievementContent.appendChild(div);

    });


    latestUpdate.textContent =
        CONFIG.trailerLatestUpdate;

    latestUpdate.href =
        LINKS.firstKhaoFans;

}


// ============================================================
// PHASE 2 ACHIEVEMENT
// ============================================================

function renderEPAchievement() {

    achievementContent.innerHTML = "";

    achievementContent.style.gridTemplateColumns =
        "repeat(3, 1fr)";


    const items = [

        [
            "Total posts",
            CONFIG.epAchievement.posts
        ],

        [
            "Total countries",
            CONFIG.epAchievement.countries
        ],

        [
            "Total #1",
            CONFIG.epAchievement.numberOne
        ]

    ];


    items.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "achievement-item";

        div.innerHTML = `
            <span class="achievement-label">
                ${item[0]}
            </span>

            <span class="achievement-value">
                ${item[1]}
            </span>
        `;

        achievementContent.appendChild(div);

    });


    latestUpdate.textContent =
        CONFIG.epLatestUpdate;

    latestUpdate.href =
        LINKS.firstKhaoFans;

}


// ============================================================
// COUNTDOWN FORMAT
// ============================================================

function formatCountdown(
    milliseconds,
    includeDays
) {

    if (milliseconds <= 0) {

        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

    }


    const totalSeconds =
        Math.floor(
            milliseconds / 1000
        );


    const seconds =
        totalSeconds % 60;


    const totalMinutes =
        Math.floor(
            totalSeconds / 60
        );


    const minutes =
        totalMinutes % 60;


    const totalHours =
        Math.floor(
            totalMinutes / 60
        );


    const hours =
        includeDays
            ? totalHours % 24
            : totalHours;


    const days =
        includeDays
            ? Math.floor(totalHours / 24)
            : 0;


    return {
        days,
        hours,
        minutes,
        seconds
    };

}


// ============================================================
// UPDATE COUNTDOWN
// ============================================================

function updateCountdown() {

    const now =
        new Date();


    // ========================================================
    // PHASE 1
    // ========================================================

    if (now < trailerDate) {

        const remaining =
            formatCountdown(
                trailerDate - now,
                false
            );


        countdown.textContent =
            `${String(remaining.hours).padStart(2, "0")} Hours ` +
            `${String(remaining.minutes).padStart(2, "0")} Minutes ` +
            `${String(remaining.seconds).padStart(2, "0")} Seconds`;

        return;

    }


    // ========================================================
    // PHASE 1 — 24 HOURS
    // ========================================================

    if (
        now >= trailerDate &&
        now < trailer24hDate
    ) {

        const remaining =
            formatCountdown(
                trailer24hDate - now,
                false
            );


        countdown.textContent =
            `${String(remaining.hours).padStart(2, "0")} Hours ` +
            `${String(remaining.minutes).padStart(2, "0")} Minutes ` +
            `${String(remaining.seconds).padStart(2, "0")} Seconds`;

        return;

    }


    // ========================================================
    // PHASE 2 — BEFORE SPECIAL EP
    // ========================================================

    if (
        now >= trailer24hDate &&
        now < specialEPDate
    ) {

        const remaining =
            formatCountdown(
                specialEPDate - now,
                true
            );


        countdown.textContent =
            `${String(remaining.days).padStart(2, "0")} Days ` +
            `${String(remaining.hours).padStart(2, "0")} Hours ` +
            `${String(remaining.minutes).padStart(2, "0")} Minutes ` +
            `${String(remaining.seconds).padStart(2, "0")} Seconds`;

        return;

    }


    // ========================================================
    // PHASE 2 — 24 HOURS
    // ========================================================

    if (
        now >= specialEPDate &&
        now < specialEP24hDate
    ) {

        const remaining =
            formatCountdown(
                specialEP24hDate - now,
                false
            );


        countdown.textContent =
            `${String(remaining.hours).padStart(2, "0")} Hours ` +
            `${String(remaining.minutes).padStart(2, "0")} Minutes ` +
            `${String(remaining.seconds).padStart(2, "0")} Seconds`;

        return;

    }


    // ========================================================
    // AFTER SPECIAL EP 24 HOURS
    // ========================================================

    countdown.textContent =
        "00 Hours 00 Minutes 00 Seconds";

}


// ============================================================
// UPDATE PAGE STATE
// ============================================================

function updatePageState() {

    const now =
        new Date();


    // Phase 1 — before trailer

    if (now < trailerDate) {

        showPhase1Before();

        return;

    }


    // Phase 1 — trailer released / tracking

    if (
        now >= trailerDate &&
        now < trailer24hDate
    ) {

        showPhase1After();

        return;

    }


    // Phase 2 — before Special EP

    if (
        now >= trailer24hDate &&
        now < specialEPDate
    ) {

        showPhase2Before();

        return;

    }


    // Phase 2 — Special EP released

    if (
        now >= specialEPDate
    ) {

        showPhase2After();

        return;

    }

}


// ============================================================
// INITIALIZE
// ============================================================

function initialize() {

    updatePageState();

    updateCountdown();

}


// ============================================================
// RUN
// ============================================================

initialize();


// Update countdown every second

setInterval(
    updateCountdown,
    1000
);


// Check page state every second

setInterval(
    updatePageState,
    1000
);
