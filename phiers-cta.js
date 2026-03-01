/**
 * PHIERS CTA — Modal + Sticky Bar
 * Injected entirely via DOM. No HTML parsing required.
 * Modal: once per session (sessionStorage), on first page visited only.
 * Sticky bar: always present, X closes for session, returns on next visit.
 */
(function () {
  'use strict';

  var MODAL_KEY = 'phiers_modal_seen';
  var BAR_KEY   = 'phiers_bar_dismissed';

  var PETITION_URL = 'https://www.change.org/p/put-the-600-telehealth-plan-on-the-aca-exchange-now';
  var SURVEY_URL   = 'https://docs.google.com/forms/d/e/1FAIpQLSeWd9p2O5sxzWpBGWgsOHhNccbHFLJCivBqNbk1YZSbzniXIA/viewform';
  var ACTION_URL   = 'action.html';
  var FAQ_URL      = 'FAQ.html';

  /* ── CSS ─────────────────────────────────────────────────── */
  var css = [
    /* sticky bar */
    '#phiers-bar{position:fixed;bottom:0;left:0;right:0;z-index:9000;',
    'background:linear-gradient(90deg,#0d2137,#1a3a2a);',
    'border-top:2px solid #4caf50;padding:10px 20px;',
    'display:flex;align-items:center;justify-content:space-between;',
    'gap:12px;box-shadow:0 -4px 20px rgba(0,0,0,.5);',
    'transition:transform .3s ease;font-family:inherit;}',
    '#phiers-bar.ph-hidden{transform:translateY(110%);}',
    '#phiers-bar .ph-txt{color:#c8e6c9;font-size:.9rem;font-weight:500;',
    'white-space:nowrap;flex-shrink:0;}',
    '#phiers-bar .ph-txt strong{color:#4caf50;}',
    '#phiers-bar .ph-acts{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}',
    '.ph-btn{padding:8px 18px;border-radius:6px;font-size:.85rem;font-weight:700;',
    'text-decoration:none;border:none;cursor:pointer;',
    'transition:all .2s;white-space:nowrap;display:inline-block;}',
    '.ph-btn-p{background:#4caf50;color:#000;}',
    '.ph-btn-p:hover{background:#66bb6a;transform:translateY(-1px);}',
    '.ph-btn-s{background:transparent;color:#81c784;border:1px solid #4caf50;}',
    '.ph-btn-s:hover{background:rgba(76,175,80,.15);}',
    '.ph-x{background:none;border:none;color:#556655;font-size:1.3rem;',
    'cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1;',
    'transition:color .2s;font-family:inherit;}',
    '.ph-x:hover{color:#aaa;}',
    /* overlay */
    '#ph-overlay{position:fixed;inset:0;z-index:10000;',
    'background:rgba(0,0,0,.82);display:flex;align-items:center;',
    'justify-content:center;padding:20px;',
    'opacity:0;transition:opacity .35s ease;pointer-events:none;}',
    '#ph-overlay.ph-on{opacity:1;pointer-events:all;}',
    /* modal box */
    '#ph-modal{background:linear-gradient(145deg,#0f2339,#162a1e);',
    'border:2px solid rgba(76,175,80,.5);border-radius:16px;',
    'max-width:580px;width:100%;padding:2.5rem 2rem 2rem;position:relative;',
    'box-shadow:0 20px 60px rgba(0,0,0,.7);',
    'transform:translateY(20px);transition:transform .35s ease;',
    'font-family:inherit;}',
    '#ph-overlay.ph-on #ph-modal{transform:translateY(0);}',
    '.ph-close-x{position:absolute;top:14px;right:18px;background:none;',
    'border:none;color:#4a6a4a;font-size:1.5rem;cursor:pointer;',
    'line-height:1;transition:color .2s;padding:4px;font-family:inherit;}',
    '.ph-close-x:hover{color:#81c784;}',
    '.ph-eyebrow{font-size:.75rem;text-transform:uppercase;letter-spacing:.15em;',
    'color:#4caf50;margin-bottom:.6rem;}',
    '.ph-headline{font-size:1.55rem;font-weight:800;color:#fff;',
    'line-height:1.25;margin:0 0 .6rem;}',
    '.ph-sub{font-size:.92rem;color:#81c784;margin-bottom:1.8rem;line-height:1.5;}',
    /* choice grid */
    '.ph-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1.2rem;}',
    '.ph-choice{display:block;text-decoration:none;',
    'background:rgba(255,255,255,.03);border:1.5px solid rgba(76,175,80,.25);',
    'border-radius:10px;padding:1rem .9rem;',
    'transition:all .2s;cursor:pointer;color:inherit;}',
    '.ph-choice:hover{background:rgba(76,175,80,.1);border-color:#4caf50;',
    'transform:translateY(-2px);box-shadow:0 6px 20px rgba(76,175,80,.15);}',
    '.ph-choice-icon{font-size:1.5rem;margin-bottom:.4rem;display:block;}',
    '.ph-choice-label{font-size:.82rem;font-weight:700;color:#fff;',
    'display:block;margin-bottom:.2rem;}',
    '.ph-choice-desc{font-size:.75rem;color:#6a9a6a;line-height:1.35;}',
    /* primary choice spans both cols */
    '.ph-primary{border-color:#4caf50;background:rgba(76,175,80,.08);',
    'grid-column:span 2;display:flex;align-items:center;gap:1rem;',
    'padding:1.1rem 1.2rem;}',
    '.ph-primary:hover{background:rgba(76,175,80,.18);}',
    '.ph-primary .ph-choice-icon{font-size:2rem;margin:0;flex-shrink:0;}',
    '.ph-primary .ph-choice-label{font-size:1rem;color:#4caf50;}',
    '.ph-primary .ph-choice-desc{color:#a5d6a7;}',
    '.ph-dismiss{text-align:center;font-size:.78rem;color:#3a5a3a;',
    'cursor:pointer;transition:color .2s;user-select:none;margin-top:.5rem;}',
    '.ph-dismiss:hover{color:#6a9a6a;}',
    /* mobile */
    '@media(max-width:540px){',
    '#phiers-bar .ph-txt{display:none;}',
    '.ph-grid{grid-template-columns:1fr;}',
    '.ph-primary{grid-column:span 1;}',
    '#ph-modal{padding:2rem 1.2rem 1.5rem;}',
    '.ph-headline{font-size:1.25rem;}}'
  ].join('');

  function injectCSS() {
    var s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ── STICKY BAR ──────────────────────────────────────────── */
  function buildBar() {
    var bar = document.createElement('div');
    bar.id = 'phiers-bar';
    if (sessionStorage.getItem(BAR_KEY)) bar.classList.add('ph-hidden');

    var txt = document.createElement('div');
    txt.className = 'ph-txt';
    txt.innerHTML = '<strong>11.6M needed.</strong> Every signature matters.';

    var acts = document.createElement('div');
    acts.className = 'ph-acts';

    var btnP = document.createElement('a');
    btnP.href = PETITION_URL;
    btnP.target = '_blank';
    btnP.rel = 'noopener';
    btnP.className = 'ph-btn ph-btn-p';
    btnP.textContent = '✍️ Sign the Petition';

    var btnS = document.createElement('a');
    btnS.href = SURVEY_URL;
    btnS.target = '_blank';
    btnS.rel = 'noopener';
    btnS.className = 'ph-btn ph-btn-s';
    btnS.textContent = '📋 Survey';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'ph-x';
    closeBtn.setAttribute('aria-label', 'Close bar');
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', function () {
      bar.classList.add('ph-hidden');
      sessionStorage.setItem(BAR_KEY, '1');
    });

    acts.appendChild(btnP);
    acts.appendChild(btnS);
    acts.appendChild(closeBtn);
    bar.appendChild(txt);
    bar.appendChild(acts);
    document.body.appendChild(bar);
  }

  /* ── MODAL ───────────────────────────────────────────────── */
  function buildChoice(href, isExternal, isPrimary, icon, label, desc) {
    var a = document.createElement('a');
    a.href = href;
    if (isExternal) { a.target = '_blank'; a.rel = 'noopener'; }
    a.className = 'ph-choice' + (isPrimary ? ' ph-primary' : '');
    a.addEventListener('click', closeModal);

    var iconEl = document.createElement('span');
    iconEl.className = 'ph-choice-icon';
    iconEl.textContent = icon;

    var inner = document.createElement('div');

    var lbl = document.createElement('span');
    lbl.className = 'ph-choice-label';
    lbl.textContent = label;

    var dsc = document.createElement('span');
    dsc.className = 'ph-choice-desc';
    dsc.textContent = desc;

    inner.appendChild(lbl);
    inner.appendChild(dsc);
    a.appendChild(iconEl);
    a.appendChild(inner);
    return a;
  }

  function buildModal() {
    var overlay = document.createElement('div');
    overlay.id = 'ph-overlay';
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    var modal = document.createElement('div');
    modal.id = 'ph-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'ph-headline');

    // Close X
    var closeX = document.createElement('button');
    closeX.className = 'ph-close-x';
    closeX.setAttribute('aria-label', 'Close');
    closeX.textContent = '✕';
    closeX.addEventListener('click', closeModal);

    var eyebrow = document.createElement('div');
    eyebrow.className = 'ph-eyebrow';
    eyebrow.textContent = 'You\'re here. Make it count.';

    var headline = document.createElement('h2');
    headline.className = 'ph-headline';
    headline.id = 'ph-headline';
    headline.innerHTML = '234 million Americans need this to work.<br>What will you do?';

    var sub = document.createElement('p');
    sub.className = 'ph-sub';
    sub.textContent = 'Takes 30 seconds to sign. Takes one share to double our reach. Choose your next move.';

    var grid = document.createElement('div');
    grid.className = 'ph-grid';

    grid.appendChild(buildChoice(
      PETITION_URL, true, true,
      '✍️', 'Sign the Petition — 30 seconds',
      'Add your name to the 3.5% that forces Congress to act. The most important thing you can do right now.'
    ));
    grid.appendChild(buildChoice(
      SURVEY_URL, true, false,
      '📋', 'Fill the Survey',
      'Tell us your healthcare story. Your voice shapes the movement.'
    ));
    grid.appendChild(buildChoice(
      ACTION_URL, false, false,
      '📣', 'Spread the Word',
      'Share with your union, your family, your community. One share reaches people we can\'t.'
    ));
    grid.appendChild(buildChoice(
      FAQ_URL, false, false,
      '🔍', 'Dig Deeper',
      'Still have questions? Every skeptical question answered honestly.'
    ));

    var dismiss = document.createElement('div');
    dismiss.className = 'ph-dismiss';
    dismiss.textContent = 'Not now — I\'ll come back to this';
    dismiss.addEventListener('click', closeModal);

    modal.appendChild(closeX);
    modal.appendChild(eyebrow);
    modal.appendChild(headline);
    modal.appendChild(sub);
    modal.appendChild(grid);
    modal.appendChild(dismiss);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  function openModal() {
    var overlay = document.getElementById('ph-overlay');
    if (overlay) overlay.classList.add('ph-on');
  }

  function closeModal() {
    var overlay = document.getElementById('ph-overlay');
    if (overlay) overlay.classList.remove('ph-on');
    sessionStorage.setItem(MODAL_KEY, '1');
  }

  window.phiersCloseModal = closeModal;

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ── INIT ────────────────────────────────────────────────── */
  function init() {
    injectCSS();
    buildBar();
    buildModal();

    // Modal fires once per session, on first page visited only
    if (!sessionStorage.getItem(MODAL_KEY)) {
      setTimeout(openModal, 2800);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
