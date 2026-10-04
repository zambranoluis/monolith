// A classic deferred script also works when this page is opened directly.
(() => {
  const study = document.querySelector('.balance-study');
  const button = document.querySelector('#rebalance');
  const status = document.querySelector('#arrangement-status');
  const weights = [...document.querySelectorAll('.work-weight')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const arrangements = [
    ['translate(80px, 150px) rotate(-8deg)', 'translate(370px, 210px) rotate(7deg)', 'translate(240px, 375px) rotate(-4deg)'],
    ['translate(340px, 330px) rotate(8deg)', 'translate(140px, 140px) rotate(-6deg)', 'translate(380px, 150px) rotate(6deg)'],
    ['translate(110px, 290px) rotate(-4deg)', 'translate(360px, 140px) rotate(9deg)', 'translate(300px, 365px) rotate(-8deg)'],
  ];
  let current = 0;
  const animations = new Map();

  function settle() {
    for (const weight of weights) {
      animations.get(weight)?.cancel();
      animations.delete(weight);
    }
  }

  button.addEventListener('click', () => {
    current = (current + 1) % arrangements.length;
    weights.forEach((weight, index) => {
      // Capture the in-flight frame before canceling; the latest target wins.
      const from = getComputedStyle(weight).transform;
      animations.get(weight)?.cancel();
      const to = arrangements[current][index];
      weight.style.transform = to;
      if (!reduced.matches && weight.animate) {
        const animation = weight.animate([{ transform: from }, { transform: to }], {
          duration: 450,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        });
        animations.set(weight, animation);
        animation.onfinish = () => {
          if (animations.get(weight) === animation) animations.delete(weight);
        };
      }
    });
    study.dataset.arrangement = String(current + 1);
    status.textContent = `Arrangement ${current + 1} of 3`;
  });
  reduced.addEventListener('change', () => { if (reduced.matches) settle(); });
  button.hidden = false;
})();
