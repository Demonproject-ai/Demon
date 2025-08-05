document.getElementById("root").innerHTML = `
  <h1>Demon Bokföringssystem</h1>
  <p>Denna version visar ett förenklat gränssnitt.</p>
  <ul>
    <li><button onclick="alert('Klient: AB Blåbär')">AB Blåbär</button></li>
    <li><button onclick="alert('Klient: Kalles Städservice')">Kalles Städservice</button></li>
    <li><button onclick="alert('Klient: Redovisning & Co')">Redovisning & Co</button></li>
  </ul>
  <p>Funktioner för filuppladdning och verifikationer kräver en serverplattform (t.ex. Vercel eller Netlify).</p>
`;