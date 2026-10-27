(()=>{'use strict';
const $=s=>document.querySelector(s);
window.renderWorldCase=(module,esc)=>{
  const c=module.travelCase,n=c.notebook;
  const photo=(p,cls='')=>`<button class="world-photo ${cls}" data-img="${esc(p.src)}" data-caption="${esc(p.alt)}"><img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy"><span>${esc(p.title)} <i>↗</i></span></button>`;
  return `<article class="world-case">
    <header class="world-hero">
      <div class="world-hero-copy"><p class="eyebrow">${esc(c.kicker)}</p><h3>${esc(c.headline).replace(/\n/g,'<br>')}</h3><p class="world-lead">${esc(c.lead)}</p><span class="world-draft-label">${esc(c.introLabel)}</span><div class="world-stamp" aria-hidden="true"><span>STAY CURIOUS</span><b>↗</b><span>KEEP WANDERING</span></div></div>
      <div class="world-hero-album">${photo({src:c.heroImage,alt:c.heroAlt,title:c.heroCaption},'world-hero-main')}${photo({src:c.sideImage,alt:c.sideAlt,title:c.sideCaption},'world-hero-side')}<span class="world-orbit" aria-hidden="true">✳</span><span class="world-album-index">LIFE, IN LITTLE FRAMES. / 01—08</span></div>
    </header>
    <nav class="world-jump" aria-label="探索世界页内导航"><a href="#world-practice" data-world-jump="practice">我与旅途</a><a href="#world-notebook" data-world-jump="notebook">行前手帐</a><a href="#world-observations" data-world-jump="observations">在地观察</a><a href="#world-gallery" data-world-jump="gallery">世界切片</a><a href="#world-thoughts" data-world-jump="thoughts">一点感悟</a></nav>
    <section id="world-practice" class="world-section"><div class="world-section-head"><div><p class="eyebrow">01 / MEET THE UNKNOWN</p><h3>旅途里的我，<span>也在认真做事。</span></h3></div><span class="world-section-mark" aria-hidden="true">↗</span></div><div class="world-practice-grid">${c.cards.map((card,i)=>`<article class="world-practice-card world-tint-${i}"><span class="eyebrow">${esc(card.label)}</span><h4>${esc(card.title)}</h4><p class="world-card-subtitle">${esc(card.subtitle)}</p>${card.points.map(p=>`<div class="world-point"><h5>${esc(p.title)}</h5><p>${esc(p.body)}</p></div>`).join('')}</article>`).join('')}</div></section>
    <section id="world-notebook" class="world-section"><div class="world-section-head"><div><p class="eyebrow">02 / BEFORE THE JOURNEY</p><h3>${esc(n.title)}</h3></div><span class="world-section-mark" aria-hidden="true">⌁</span></div><p class="world-section-intro">${esc(n.intro)}</p><div class="world-notebook"><div class="world-notebook-top"><span class="world-notebook-title">JINYU'S TRAVEL NOTEBOOK</span><span class="world-rebuild-badge">AI 辅助重建</span></div><div class="world-tabs" role="tablist" aria-label="旅行手帐">${n.tabs.map((tab,i)=>`<button id="world-tab-${esc(tab.id)}" role="tab" data-world-tab="${esc(tab.id)}" aria-selected="${i===0}" aria-controls="world-panel-${esc(tab.id)}" tabindex="${i===0?0:-1}">${esc(tab.label)}</button>`).join('')}</div>${n.tabs.map((tab,i)=>`<section id="world-panel-${esc(tab.id)}" class="world-notebook-panel" role="tabpanel" aria-labelledby="world-tab-${esc(tab.id)}" ${i===0?'':'hidden'}><div class="world-notebook-heading"><span class="world-note-number">0${i+1}</span><div><h4>${esc(tab.heading)}</h4><p>${esc(tab.intro)}</p></div></div><div class="world-note-table"><div class="world-table-labels" aria-hidden="true"><span>调研 / 决策项</span><span>要问的问题</span><span>我的整理方式</span></div>${tab.rows.map(row=>`<div class="world-note-row"><h5>${esc(row.topic)}</h5><p>${esc(row.question)}</p><p>${esc(row.action)}</p></div>`).join('')}</div><p class="world-notebook-foot">${esc(tab.footer)}</p></section>`).join('')}<div class="world-rebuild-note"><p>${esc(n.disclosure)}</p><a href="${esc(n.download)}" download="金鱼旅行手帐_AI辅助重建.md">下载可填写手帐 ↓</a></div></div></section>
    <section id="world-observations" class="world-section"><div class="world-section-head"><div><p class="eyebrow">03 / LOOK A LITTLE CLOSER</p><h3>风景之外，<span>我还想再问一句。</span></h3></div></div><p class="world-section-intro world-scope">${esc(c.observationNote)}</p><div class="world-observation-grid">${c.observations.map(o=>`<article class="world-observation"><span class="eyebrow">${esc(o.tag)}</span><h4>${esc(o.title)}</h4><p>${esc(o.body)}</p><div class="world-question"><span aria-hidden="true">↳</span><p>${esc(o.question)}</p></div></article>`).join('')}</div></section>
    <section id="world-gallery" class="world-section"><div class="world-section-head"><div><p class="eyebrow">04 / COLLECT MOMENTS</p><h3>世界的切片，<span>生活的证据。</span></h3></div><span class="world-gallery-count">08 FRAMES</span></div><div class="world-photo-grid">${c.gallery.map((p,i)=>photo(p,'world-frame-'+i)).join('')}</div><p class="world-caption">${esc(c.galleryNote)}</p></section>
    <section id="world-thoughts" class="world-section"><div class="world-section-head"><div><p class="eyebrow">05 / LITTLE THOUGHTS, STILL GROWING</p><h3>带回日常的，<span>不只有照片。</span></h3></div></div><p class="world-section-intro world-scope">${esc(c.reflectionNote)}</p><div class="world-reflections">${c.reflections.map(r=>`<article class="world-reflection"><div class="world-reflection-image"><img src="${esc(r.image)}" alt="旅行照片配图" loading="lazy"><span>${esc(r.index)} / A NOTE TO MYSELF</span></div><div class="world-reflection-copy"><h4>${esc(r.title)}</h4><p>${esc(r.body)}</p></div></article>`).join('')}</div></section>
    <footer class="world-closing"><span class="world-closing-spark" aria-hidden="true">✳</span><p>${esc(c.closing).replace(/\n/g,'<br>')}</p><span>CURIOSITY SETS MY RADIUS.</span></footer>
  </article>`;
};
function selectTab(button,focus=false){
  const scope=button.closest('.world-notebook');if(!scope)return;
  scope.querySelectorAll('[data-world-tab]').forEach(b=>{const active=b===button;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;const panel=document.getElementById(b.getAttribute('aria-controls'));if(panel)panel.hidden=!active;});
  if(focus)button.focus({preventScroll:true});
}
document.addEventListener('click',e=>{
  const tab=e.target.closest('[data-world-tab]');if(tab){selectTab(tab);return;}
  const jump=e.target.closest('[data-world-jump]');if(jump){e.preventDefault();$('#world-'+jump.dataset.worldJump)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});}
});
document.addEventListener('keydown',e=>{
  const b=e.target.closest('[data-world-tab]');if(!b||!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
  e.preventDefault();const tabs=Array.from(b.closest('[role="tablist"]').querySelectorAll('[role="tab"]')),index=tabs.indexOf(b);
  selectTab(tabs[e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length],true);
});
})();
