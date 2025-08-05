document.getElementById("root").innerHTML = `
  <h1>Demon Bokföringssystem</h1>
  <p>Den här versionen visar en förenklad visning av klienter och verifikationer.</p>
  <ul>
    <li><button onclick="alert('Klient: AB Blåbär')">AB Blåbär</button></li>
    <li><button onclick="alert('Klient: Kalles Städservice')">Kalles Städservice</button></li>
    <li><button onclick="alert('Klient: Redovisning & Co')">Redovisning & Co</button></li>
  </ul>
  <p>För full funktion (PDF-uppladdning, React-komponenter), krävs deploy till plattform med Node.js-stöd.</p>
`;