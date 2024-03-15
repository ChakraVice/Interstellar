let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}

if (!inFrame && !navigator.userAgent.includes('Firefox')) {
  const doc = document;
  const iframe = doc.createElement('iframe');
  const style = iframe.style;
  const link = doc.createElement('link');

  const name = localStorage.getItem('name') || 'My Drive - Google Drive';
  const icon = localStorage.getItem('icon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png';

  doc.title = name;
  link.rel = 'icon';
  link.href = icon;

  iframe.src = location.href;
  style.position = 'fixed';
  style.top = style.bottom = style.left = style.right = 0;
  style.border = style.outline = 'none';
  style.width = style.height = '100%';

  doc.head.appendChild(link);
  doc.body.appendChild(iframe);

  // NASAのサイトにリダイレクトするのではなく、現在のページをそのまま表示する
} else {
  document.addEventListener('DOMContentLoaded', function (event) {
    if (window.localStorage.getItem('v4Particles') === 'true') {
      const scr = document.createElement('script');
      scr.src = '/assets/scripts/particles.js';
      document.body.appendChild(scr);
    }
  });

  let splashtext = ['　'];

  document.getElementById('splash').innerText = splashtext[Math.floor(Math.random() * splashtext.length)];
}
