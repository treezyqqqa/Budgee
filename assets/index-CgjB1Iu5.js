(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>`/Budgee/${e}`;window.BudgeeData={features:[{icon:`wallet`,title:`Счета`,text:`Карты, наличные и кошельки в одной аккуратной картине.`,tone:`mint`},{icon:`arrows`,title:`Доходы и расходы`,text:`Записывайте операции быстро и понимайте, куда уходят деньги.`,tone:`blue`},{icon:`transfer`,title:`Переводы`,text:`Перемещайте деньги между счетами без двойного учёта.`,tone:`lilac`},{icon:`calendar`,title:`Планы`,text:`Задайте ритм месяца и заранее увидьте обязательные траты.`,tone:`peach`},{icon:`target`,title:`Накопления`,text:`Двигайтесь к целям маленькими, но заметными шагами.`,tone:`mint`},{icon:`shield`,title:`Подушка`,text:`Следите, на сколько месяцев спокойствия уже накоплено.`,tone:`blue`},{icon:`hand`,title:`Долги`,text:`Помните, кому вы должны и кто должен вам.`,tone:`lilac`},{icon:`credit`,title:`Кредиты`,text:`Держите платежи, остаток и ближайшие даты перед глазами.`,tone:`peach`},{icon:`chart`,title:`Инвестиции`,text:`Учитывайте активы как часть общей финансовой картины.`,tone:`mint`},{icon:`analytics`,title:`Аналитика`,text:`Находите закономерности без сложных таблиц и формул.`,tone:`blue`}],screens:[{id:`summary`,title:`Сводка`,subtitle:`Всё важное на сегодня`,balance:`284 350 ₽`,accent:`mint`,type:`summary`,image:e(`images/budgee/summary.png`)},{id:`transactions`,title:`Операции`,subtitle:`История без путаницы`,balance:`– 4 870 ₽`,accent:`blue`,type:`list`,image:e(`images/budgee/operations.png`)},{id:`plans`,title:`Планы`,subtitle:`Июнь под контролем`,balance:`63%`,accent:`peach`,type:`plans`,image:e(`images/budgee/plans.png`)},{id:`analytics`,title:`Аналитика`,subtitle:`Расходы за месяц`,balance:`89 420 ₽`,accent:`lilac`,type:`analytics`,image:e(`images/budgee/analytics.png`)},{id:`savings`,title:`Накопления`,subtitle:`На важные мечты`,balance:`420 000 ₽`,accent:`mint`,type:`savings`,image:e(`images/budgee/savings.png`)},{id:`debts`,title:`Долги`,subtitle:`Всё, что нужно вернуть`,balance:`32 000 ₽`,accent:`blue`,type:`debts`,image:e(`images/budgee/debts.png`)},{id:`credits`,title:`Кредиты`,subtitle:`Следующий платёж`,balance:`18 900 ₽`,accent:`peach`,type:`credit`,image:e(`images/budgee/credits.png`)},{id:`investments`,title:`Инвестиции`,subtitle:`Часть общего капитала`,balance:`612 480 ₽`,accent:`lilac`,type:`invest`,image:e(`images/budgee/investments.png`)},{id:`appearance`,title:`Оформление`,subtitle:`Баджи под ваш характер`,balance:`Мята`,accent:`mint`,type:`theme`,image:e(`images/budgee/appearance.png`)},{id:`menu`,title:`Меню`,subtitle:`Все разделы рядом`,balance:`11 разделов`,accent:`blue`,type:`menu`,image:e(`images/budgee/menu.png`)},{id:`categories`,title:`Категории`,subtitle:`Порядок по-своему`,balance:`24 категории`,accent:`peach`,type:`categories`,image:e(`images/budgee/categories.png`)}],faq:[{question:`Когда Баджи появится в App Store?`,answer:`Приложение находится в разработке. Оставьте email в листе ожидания, и мы сообщим о тестировании и запуске.`},{question:`Нужно ли разбираться в финансах?`,answer:`Нет. Баджи проектируется для обычной жизни: понятные слова, спокойные подсказки и только нужные цифры.`},{question:`Баджи будет ругать меня за траты?`,answer:`Нет. Приложение помогает увидеть картину и принять собственное решение, а не оценивает покупки и привычки.`},{question:`Можно учитывать долги, кредиты и инвестиции?`,answer:`Да. Они встроены в общую картину финансов вместе со счетами, планами, накоплениями и подушкой.`},{question:`Как устроены хранение и синхронизация?`,answer:`Баджи проектируется как local-first приложение: основные данные доступны на устройстве, а синхронизация помогает переносить и восстанавливать их.`},{question:`Будет ли версия для Android?`,answer:`Сначала мы сосредоточены на качественной версии для iPhone. Новости о других платформах появятся позже.`}]},(function(){let e=window.BudgeeData,t=e=>`/Budgee/${e}`,n={wallet:`<path d="M4 7.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3h12v5"/><path d="M15 12h5v4h-5a2 2 0 0 1 0-4Z"/>`,arrows:`<path d="m7 7 3-3 3 3"/><path d="M10 4v12"/><path d="m17 17-3 3-3-3"/><path d="M14 20V8"/>`,transfer:`<path d="M5 7h14"/><path d="m16 4 3 3-3 3"/><path d="M19 17H5"/><path d="m8 20-3-3 3-3"/>`,calendar:`<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/>`,target:`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m15.5 8.5 4-4"/>`,shield:`<path d="M12 3 4.5 6v5.3c0 4.7 3 8.1 7.5 9.7 4.5-1.6 7.5-5 7.5-9.7V6L12 3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>`,hand:`<path d="M7 11V7a1.5 1.5 0 0 1 3 0v3-5a1.5 1.5 0 0 1 3 0v5-4a1.5 1.5 0 0 1 3 0v5-2a1.5 1.5 0 0 1 3 0v5c0 4.4-3 7-7.2 7H11c-2.1 0-3.4-.9-4.5-2.5L3 13.8a1.7 1.7 0 0 1 2.6-2.1L8 14"/>`,credit:`<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19M6 15h4"/>`,chart:`<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/><path d="m4 7 6-4 6 6 5-5"/>`,analytics:`<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/><path d="m4 8 6-4 6 5 5-5"/>`,spark:`<path d="m12 3 1.3 4.1L17 9l-3.7 1.9L12 15l-1.3-4.1L7 9l3.7-1.9L12 3Z"/><path d="m18.5 14 .7 2.2 2.3.8-2.3.8-.7 2.2-.7-2.2-2.3-.8 2.3-.8.7-2.2ZM5 14l.7 2.1L8 17l-2.3.9L5 20l-.7-2.1L2 17l2.3-.9L5 14Z"/>`,eye:`<path d="M2 12s3.7-6 10-6 10 6 10 6-3.7 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>`,heart:`<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 22l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>`,lock:`<rect x="4" y="10" width="16" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>`,cloud:`<path d="M17.5 19H6a4 4 0 0 1-.5-8 6.5 6.5 0 0 1 12.4-1.4A4.8 4.8 0 0 1 17.5 19Z"/><path d="m9 15 3 3 3-3M12 18v-7"/>`,check:`<path d="m5 12 4 4L19 6"/>`,menu:`<path d="M4 7h16M4 12h16M4 17h16"/>`,close:`<path d="m6 6 12 12M18 6 6 18"/>`,arrow:`<path d="M5 12h14M14 7l5 5-5 5"/>`,chevron:`<path d="m6 9 6 6 6-6"/>`,apple:`<path d="M16.7 12.4c0-2.4 2-3.6 2.1-3.7a4.6 4.6 0 0 0-3.6-1.9c-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9a4.9 4.9 0 0 0-4.1 2.5c-1.8 3-.5 7.5 1.2 9.9.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5a10.6 10.6 0 0 0 1.4-2.9 4.3 4.3 0 0 1-3-3.9ZM14.2 5.2a4.3 4.3 0 0 0 1-3.1 4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1.1 3c1.1.1 2.2-.5 3-1.4Z"/>`};function r(e,t=``){return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${n[e]||n.spark}</svg>`}function i(){return`
      <a class="brand" href="#top" aria-label="Баджи, на главную">
        <span class="brand-mark"><img src="${t(`images/budgee/icon.png`)}" alt="" /></span>
        <span class="brand-copy"><span class="brand-name">Баджи</span><small>финансы спокойно</small></span>
      </a>
    `}function a(e,t=``){return`
      <article class="phone ${t}" aria-label="Экран приложения «${e.title}»">
        <div class="phone-shell">
          <div class="phone-island"></div>
          <div class="phone-screen">
            <img src="${e.image}" alt="Интерфейс Budgee: ${e.title}" decoding="async" />
          </div>
        </div>
        ${t.includes(`gallery`)?`<div class="phone-label"><b>${e.title}</b><span>${e.subtitle}</span></div>`:``}
      </article>
    `}function o(){return`
      <header class="site-header" id="top">
        <div class="container header-inner">
          ${i()}
          <nav class="desktop-nav" aria-label="Основная навигация">
            <a href="#features">Возможности</a>
            <a href="#screens">Приложение</a>
            <a href="#security">Безопасность</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a class="button button-small button-dark header-cta" href="#waitlist">В лист ожидания</a>
          <button class="menu-button" type="button" aria-label="Открыть меню" aria-expanded="false">
            ${r(`menu`,`menu-open-icon`)}${r(`close`,`menu-close-icon`)}
          </button>
        </div>
        <nav class="mobile-nav" aria-label="Мобильная навигация">
          <a href="#features">Возможности</a>
          <a href="#screens">Приложение</a>
          <a href="#security">Безопасность</a>
          <a href="#faq">FAQ</a>
          <a class="button button-dark" href="#waitlist">В лист ожидания</a>
        </nav>
      </header>
    `}function s(){let n=e.screens[0];return`
      <main id="main">
        <section class="hero section">
          <div class="hero-glow hero-glow-one"></div>
          <div class="hero-glow hero-glow-two"></div>
          <div class="container hero-grid">
            <div class="hero-copy reveal">
              <div class="eyebrow">${r(`apple`)}Для iPhone · скоро</div>
              <h1>Баджи <span>—</span><br />рубль к рублю</h1>
              <p>Финансовый трекер для iPhone, который помогает видеть деньги целиком: расходы, планы, накопления, долги, кредиты и инвестиции — в одном понятном приложении.</p>
              <div class="hero-actions">
                <a class="button button-primary" href="#waitlist">Присоединиться к ожиданию ${r(`arrow`)}</a>
                <a class="button button-ghost" href="#features">Посмотреть возможности</a>
              </div>
              <div class="hero-note">
                <span class="avatar-stack"><i>А</i><i>М</i><i>К</i></span>
                <span><b>Спокойнее с деньгами</b><small>Без стыда за траты и сложных таблиц</small></span>
              </div>
            </div>
            <div class="hero-visual reveal reveal-delay">
              <div class="hero-halo halo-one"></div>
              <div class="hero-halo halo-two"></div>
              <div class="mascot-card">
                <img src="${t(`images/budgee/icon.png`)}" alt="Иконка приложения Баджи с волнистым попугайчиком" />
                <span><i></i>Баджи рядом</span>
              </div>
              <div class="floating-chip chip-plan"><i>${r(`calendar`)}</i><span><small>Планы</small><b>Месяц под контролем</b></span></div>
              <div class="floating-chip chip-savings"><i>${r(`target`)}</i><span><small>Накопления</small><b>Видимый прогресс</b></span></div>
              <div class="floating-chip chip-invest"><i>${r(`chart`)}</i><span><small>Инвестиции</small><b>В общей картине</b></span></div>
              <div class="floating-chip chip-debt"><i>${r(`hand`)}</i><span><small>Долги</small><b>Без путаницы</b></span></div>
              ${a(n,`phone-hero`)}
            </div>
          </div>
          <div class="container trust-row">
            <span>Одна картина вместо десятка заметок</span>
            <div>
              <b>${r(`check`)} Без осуждения</b>
              <b>${r(`check`)} Понятным языком</b>
              <b>${r(`check`)} Для реальной жизни</b>
            </div>
          </div>
        </section>
    `}function c(){return`
      <section class="section problem-section" id="why">
        <div class="container">
          <div class="section-heading centered reveal">
            <span class="kicker">Знакомая история?</span>
            <h2>Деньги есть везде.<br /><em>Цельной картины нет.</em></h2>
            <p>Баланс в банке показывает сегодняшний день, заметки помнят не всё, а таблицу снова не хочется открывать.</p>
          </div>
          <div class="problem-grid">
            <article class="problem-card reveal">
              <span class="problem-number">01</span>
              <div class="problem-visual visual-cards">
                <i class="bank-card card-one">Банк</i><i class="bank-card card-two">Карта</i><i class="bank-card card-three">Наличные</i>
              </div>
              <h3>Всё разбросано</h3>
              <p>Счета в банках, долги в чатах, планы в голове, а цели где-то в заметках.</p>
            </article>
            <article class="problem-card reveal reveal-delay">
              <span class="problem-number">02</span>
              <div class="problem-visual visual-noise"><span>– 690 ₽</span><span>– 2 140 ₽</span><span>+ 145 000 ₽</span><span>– 8 900 ₽</span></div>
              <h3>Цифры шумят</h3>
              <p>Операций много, но непонятно, что они значат для месяца и будущих планов.</p>
            </article>
            <article class="problem-card reveal reveal-delay-2">
              <span class="problem-number">03</span>
              <div class="problem-visual visual-guilt"><div>${r(`heart`)}</div><span>Вы не «плохой»<br />из-за покупки</span></div>
              <h3>Учёт давит</h3>
              <p>Финансовые приложения часто заставляют чувствовать вину вместо того, чтобы помогать.</p>
            </article>
          </div>
        </div>
      </section>
    `}function l(){return`
      <section class="section solution-section">
        <div class="container solution-grid">
          <div class="solution-copy reveal">
            <span class="kicker">Поэтому появился Баджи</span>
            <h2>Спокойный взгляд<br />на ваши деньги</h2>
            <p>Баджи собирает финансовую жизнь в одну понятную систему. Не решает за вас, не оценивает и не требует идеальности.</p>
            <ul class="check-list">
              <li>${r(`check`)} Показывает общую картину</li>
              <li>${r(`check`)} Помогает планировать в своём темпе</li>
              <li>${r(`check`)} Объясняет цифры человеческим языком</li>
            </ul>
          </div>
          <div class="solution-bento reveal reveal-delay">
            <article class="bento-card bento-main">
              <span>Финансовое самочувствие</span>
              <div class="wellbeing"><strong>Хорошо</strong><i>82</i></div>
              <p>Планы выполняются, а подушка постепенно растёт.</p>
              <div class="wellbeing-line"><i></i></div>
            </article>
            <article class="bento-card bento-goal"><span>Подушка</span><strong>4,2</strong><small>месяца спокойствия</small></article>
            <article class="bento-card bento-tip">${r(`spark`)}<span><b>Небольшой шаг</b><small>Отложите 3 000 ₽ после зарплаты</small></span></article>
            <article class="bento-card bento-bird">${r(`heart`)}<p>Не идеальный бюджет.<br /><b>Ваш бюджет.</b></p></article>
          </div>
        </div>
      </section>
    `}function u(){return`
      <section class="section features-section" id="features">
        <div class="container">
          <div class="section-heading split reveal">
            <div><span class="kicker">Возможности</span><h2>Всё важное<br />живёт вместе</h2></div>
            <p>От ежедневной покупки до долгосрочной цели. Каждый раздел связан с общей картиной, но остаётся простым.</p>
          </div>
          <div class="features-grid">
            ${e.features.map((e,t)=>`
                  <article class="feature-card tone-${e.tone} reveal" style="--delay:${t%5*60}ms">
                    <span class="feature-index">${String(t+1).padStart(2,`0`)}</span>
                    <div class="feature-icon">${r(e.icon)}</div>
                    <h3>${e.title}</h3>
                    <p>${e.text}</p>
                    <span class="feature-arrow">${r(`arrow`)}</span>
                  </article>
                `).join(``)}
          </div>
        </div>
      </section>
    `}function d(){return`
      <section class="section screens-section" id="screens">
        <div class="screens-ambient ambient-one"></div>
        <div class="screens-ambient ambient-two"></div>
        <div class="container">
          <div class="section-heading centered reveal">
            <span class="kicker">Внутри приложения</span>
            <h2>Много возможностей.<br /><em>Никакой перегрузки.</em></h2>
            <p>Привычные жесты, ясная навигация и ровно столько деталей, сколько нужно сейчас.</p>
          </div>
        </div>
        <div class="screens-track-wrap">
          <div class="screens-track">
            ${e.screens.map(e=>a(e,`phone-gallery`)).join(``)}
          </div>
        </div>
        <div class="container screen-caption">
          <span><b>11 реальных экранов</b> · потяните в сторону, чтобы посмотреть</span>
          <button class="screens-next" type="button" aria-label="Показать следующие экраны">${r(`arrow`)}</button>
        </div>
      </section>
    `}function f(){return`
      <section class="section life-section">
        <div class="container">
          <div class="section-heading split reveal">
            <div><span class="kicker">Финансы в реальной жизни</span><h2>Баджи рядом<br />в обычный месяц</h2></div>
            <p>Не только когда вы «ведёте бюджет», а в привычных решениях: после зарплаты, перед покупкой и при планировании будущего.</p>
          </div>
          <div class="life-timeline">
            <article class="life-card reveal">
              <span class="life-day">01</span><small>Начало месяца</small>
              <div class="life-icon tone-mint">${r(`calendar`)}</div>
              <h3>Разложить планы</h3>
              <p>Зарплата, обязательные платежи, продукты и приятные покупки.</p>
              <div class="life-stat"><span>Свободно после планов</span><b>42 800 ₽</b></div>
            </article>
            <article class="life-card reveal reveal-delay">
              <span class="life-day">12</span><small>В процессе</small>
              <div class="life-icon tone-blue">${r(`eye`)}</div>
              <h3>Свериться с ритмом</h3>
              <p>Без запретов увидеть, где всё идёт по плану, а где хочется поправить.</p>
              <div class="life-stat"><span>План месяца</span><b>63%</b></div>
            </article>
            <article class="life-card reveal reveal-delay-2">
              <span class="life-day">28</span><small>Конец месяца</small>
              <div class="life-icon tone-lilac">${r(`target`)}</div>
              <h3>Позаботиться о будущем</h3>
              <p>Перевести остаток в накопления и понять, что изменилось за месяц.</p>
              <div class="life-stat"><span>В цели и подушку</span><b>+ 18 000 ₽</b></div>
            </article>
          </div>
        </div>
      </section>
    `}function p(){return`
      <section class="section literacy-section">
        <div class="container literacy-grid">
          <div class="literacy-visual reveal">
            <div class="lesson-card lesson-back"><span>03</span><b>Кредиты</b></div>
            <div class="lesson-card lesson-middle"><span>02</span><b>Подушка</b></div>
            <div class="lesson-card lesson-front">
              <small>Короткий разбор · 3 минуты</small>
              <span class="lesson-emoji">🌱</span>
              <h3>Зачем нужна финансовая подушка?</h3>
              <p>Простой ответ без сложных терминов и назиданий.</p>
              <button>Читать ${r(`arrow`)}</button>
            </div>
            <div class="bird-peek"><img src="${t(`images/budgee/icon.png`)}" alt="" /></div>
          </div>
          <div class="literacy-copy reveal reveal-delay">
            <span class="kicker">Финансовая грамотность</span>
            <h2>Понимать,<br />а не заучивать</h2>
            <p>Короткие объяснения появляются там, где они действительно полезны. Без лекций, сложных слов и обещаний лёгких денег.</p>
            <div class="literacy-points">
              <span>${r(`spark`)} <b>По делу</b><small>Только применимые знания</small></span>
              <span>${r(`heart`)} <b>Без давления</b><small>Ваш темп и ваши решения</small></span>
            </div>
          </div>
        </div>
      </section>
    `}function m(){return`
      <section class="section customization-section">
        <div class="container">
          <div class="customization-card">
            <div class="custom-copy reveal">
              <span class="kicker">Кастомизация</span>
              <h2>Пусть Баджи<br />будет вашим</h2>
              <p>Выберите настроение, порядок разделов и категории, которые подходят именно вашей финансовой жизни.</p>
              <div class="theme-pills">
                <button class="theme-pill active" data-theme="mint"><i></i>Мята</button>
                <button class="theme-pill" data-theme="sky"><i></i>Небо</button>
                <button class="theme-pill" data-theme="lavender"><i></i>Лаванда</button>
                <button class="theme-pill" data-theme="sand"><i></i>Песок</button>
              </div>
            </div>
            <div class="custom-phones reveal reveal-delay">
              ${a(e.screens[8],`phone-custom phone-custom-back`)}
              ${a(e.screens[10],`phone-custom phone-custom-front`)}
            </div>
          </div>
        </div>
      </section>
    `}function h(){return`
      <section class="section security-section" id="security">
        <div class="container">
          <div class="security-card">
            <div class="security-copy reveal">
              <span class="kicker kicker-light">Безопасность и синхронизация</span>
              <h2>Ваши данные<br />остаются рядом</h2>
              <p>Баджи проектируется как local-first приложение. Основные данные доступны на устройстве, а синхронизация помогает переносить и восстанавливать их.</p>
              <div class="security-note">${r(`shield`)}<span><b>Честный подход</b><small>Мы не обещаем невозможного и продолжаем продумывать защиту на каждом этапе разработки.</small></span></div>
            </div>
            <div class="security-visual reveal reveal-delay">
              <div class="security-orbit orbit-one"></div>
              <div class="security-orbit orbit-two"></div>
              <div class="device-node">${r(`apple`)}<span>Ваш iPhone</span><b>Основные данные</b></div>
              <div class="sync-node">${r(`cloud`)}<span>Синхронизация</span></div>
              <div class="security-badge badge-lock">${r(`lock`)}<span>Доступ<br />на устройстве</span></div>
              <div class="security-badge badge-restore">${r(`transfer`)}<span>Перенос и<br />восстановление</span></div>
            </div>
          </div>
        </div>
      </section>
    `}function g(){return`
      <section class="section faq-section" id="faq">
        <div class="container faq-grid">
          <div class="faq-intro reveal">
            <span class="kicker">FAQ</span>
            <h2>О чём часто<br />спрашивают</h2>
            <p>Не нашли ответ? Мы постепенно дополняем этот раздел по мере разработки.</p>
            <div class="faq-bird">${r(`spark`)}<span>Есть вопрос?</span></div>
          </div>
          <div class="faq-list reveal reveal-delay">
            ${e.faq.map((e,t)=>`
                  <details class="faq-item" ${t===0?`open`:``}>
                    <summary><span>${String(t+1).padStart(2,`0`)}. ${e.question}</span><i>${r(`chevron`)}</i></summary>
                    <p>${e.answer}</p>
                  </details>
                `).join(``)}
          </div>
        </div>
      </section>
    `}function _(){return`
      <section class="section final-section" id="waitlist">
        <div class="container">
          <div class="final-card">
            <div class="final-glow"></div>
            <img class="final-bird" src="${t(`images/budgee/icon.png`)}" alt="Иконка приложения Баджи" />
            <div class="final-copy reveal">
              <span class="kicker">Скоро на iPhone</span>
              <h2>Рубль к рублю.<br />План к плану.</h2>
              <p>Оставьте email, чтобы узнать о тестировании и запуске Баджи.</p>
              <form class="waitlist-form" novalidate>
                <label class="sr-only" for="waitlist-email">Ваш email</label>
                <input id="waitlist-email" name="email" type="email" autocomplete="email" placeholder="Ваш email" required />
                <button class="button button-dark" type="submit">Присоединиться ${r(`arrow`)}</button>
              </form>
              <p class="form-message" role="status" aria-live="polite"></p>
              <small>Без спама. Только важные новости о Баджи.</small>
            </div>
          </div>
        </div>
      </section>
    `}function v(){return`
      <footer class="site-footer">
        <div class="container footer-inner">
          <div>${i()}<p>Финансы целиком.<br />Спокойно и понятно.</p></div>
          <div class="footer-links"><a href="#features">Возможности</a><a href="#screens">Приложение</a><a href="#security">Безопасность</a><a href="#faq">FAQ</a></div>
          <div class="footer-meta"><span>© 2026 Баджи</span><span>Сделано с заботой о ваших деньгах</span></div>
        </div>
      </footer>
      </main>
    `}window.BudgeeComponents={render(){return[o(),s(),c(),l(),u(),d(),f(),p(),m(),h(),g(),_(),v()].join(``)}}})(),(function(){let e=document.querySelector(`#app`);e.innerHTML=window.BudgeeComponents.render();let t=document.querySelector(`.site-header`),n=document.querySelector(`.menu-button`),r=document.querySelectorAll(`.mobile-nav a`);function i(){t.classList.remove(`menu-active`),document.body.classList.remove(`menu-open`),n.setAttribute(`aria-expanded`,`false`)}n.addEventListener(`click`,()=>{let e=t.classList.toggle(`menu-active`);document.body.classList.toggle(`menu-open`,e),n.setAttribute(`aria-expanded`,String(e))}),r.forEach(e=>e.addEventListener(`click`,i)),window.addEventListener(`scroll`,()=>{t.classList.toggle(`scrolled`,window.scrollY>16)},{passive:!0});let a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),a.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -35px`});document.querySelectorAll(`.reveal`).forEach(e=>a.observe(e));let o=document.querySelector(`.screens-track-wrap`),s=!1,c=0,l=0;o.addEventListener(`pointerdown`,e=>{s=!0,c=e.clientX,l=o.scrollLeft,o.classList.add(`dragging`),o.setPointerCapture(e.pointerId)}),o.addEventListener(`pointermove`,e=>{s&&(o.scrollLeft=l-(e.clientX-c))});function u(){s=!1,o.classList.remove(`dragging`)}o.addEventListener(`pointerup`,u),o.addEventListener(`pointercancel`,u),document.querySelector(`.screens-next`).addEventListener(`click`,()=>{o.scrollBy({left:Math.min(o.clientWidth*.78,620),behavior:`smooth`})});let d={mint:`#5fd2a4`,sky:`#8bc9ee`,lavender:`#a9a6ef`,sand:`#f3b98f`};document.querySelectorAll(`.theme-pill`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.theme-pill`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),document.documentElement.style.setProperty(`--theme-accent`,d[e.dataset.theme])})});let f=document.querySelector(`.waitlist-form`),p=document.querySelector(`.form-message`);f.addEventListener(`submit`,e=>{e.preventDefault();let t=f.elements.email;if(!t.validity.valid){p.textContent=`Проверьте, пожалуйста, адрес email.`,p.classList.add(`error`),t.focus();return}p.textContent=`Скоро подключим регистрацию. Сейчас адрес никуда не отправлен.`,p.classList.remove(`error`),f.reset()})})();