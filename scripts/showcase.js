/* Progressive enhancement: no network requests, record writes, or persistence. */
const picker = document.querySelector('#source-picker');
const responses = {
  both: {meta:'Based on 2 selected sources', text:'Focus on confirming the shelving layout, due 12 October, then prepare the volunteer rota, due 19 October. The opening brief is approved. These tasks support the planned 18 November opening.', sources:[['Opening brief','#opening-brief'],['Project tasks','#project-records']]},
  brief: {meta:'Based on 1 selected source · Opening brief', text:'Focus on the shelving layout and volunteer rota before the planned 18 November opening. This page explains the purpose and priorities; it does not tell you task owners, due dates, or current status.', sources:[['Opening brief','#opening-brief']]},
  records: {meta:'Based on 1 selected source · Project tasks', text:'Maya Ellis is confirming the shelving layout, due 12 October. Leo Grant needs to prepare the volunteer rota by 19 October. The opening brief is marked done. These records do not describe the library’s purpose or planned opening date.', sources:[['Project tasks','#project-records']]},
  none: {meta:'No sources selected', text:'Choose at least one source to see an example explanation. Without selected information, this example has no project context.', sources:[]}
};
if (picker) {
  picker.disabled = false;
  picker.addEventListener('change', () => {
    const values = [...picker.querySelectorAll('input:checked')].map(input => input.value);
    const key = values.length === 2 ? 'both' : values[0] || 'none';
    const response = responses[key];
    document.querySelector('#response-meta').textContent = response.meta;
    document.querySelector('#response-text').textContent = response.text;
    const sources = document.querySelector('#response-sources');
    sources.replaceChildren(...response.sources.map(([name,href]) => {
      const link = document.createElement('a'); link.href = href; link.textContent = name; link.tabIndex = 0;
      return link;
    }));
  });
}
const workspace = document.querySelector('#workspace-preview');
const themeControl = document.querySelector('.theme-control');
if (workspace && themeControl) {
  themeControl.hidden = false;
  themeControl.addEventListener('click', event => {
    const button = event.target.closest('button[data-theme]'); if (!button) return;
    workspace.dataset.theme = button.dataset.theme;
    for (const item of themeControl.querySelectorAll('button')) item.setAttribute('aria-pressed', String(item === button));
    workspace.querySelector('.workspace-rail>img').src = `assets/logo/monolith-lockup-${button.dataset.theme === 'dark' ? 'reversed' : 'primary'}.svg`;
    workspace.querySelector('.context-note>img').src = `assets/logo/monolith-symbol-${button.dataset.theme === 'dark' ? 'reversed' : 'primary'}.svg`;
  });
}
if ('IntersectionObserver' in window) {
  const navigation = [...document.querySelectorAll('.site-header nav a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigation) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      }
    }
  }, {rootMargin:'-10% 0px -65% 0px',threshold:0});
  for (const section of document.querySelectorAll('main>.chapter')) observer.observe(section);
}
