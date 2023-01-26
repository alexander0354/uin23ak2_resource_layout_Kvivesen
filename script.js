const resources = [
    {
        category: "KATEGORI 1",
        text1:"HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "KATEGORI 2",
        text1: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "KATEGORI 3",
        text1: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "KATEGORI 4",
        text1: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "KATEGORI 5",
        text1: "Sanity",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


let Menu = ``;

      resources.map((resources) => {
        
        let subMenu = ``;
        resources.sources.forEach((item) => {
          subMenu += `
        <li><a target="_blank" href=${item.url}>${item.title}</a></li>`;

        });
        
        Menu += `
        <seaction class="MenuItem">
        <button oneclick="Menu()">${resources.category}</button>
          <div class="open">
          <p class="text1">${resources.text1}</p> 
          <p class="text">${resources.text}</p>
          <ul class="subMenu">
                ${subMenu}
          </ul>
          </div>
      </seaction>`;
   
      })
     
        menu.innerHTML = `
    <ul>
      
        ${Menu}
    </ul>`;

   
    /*let menu = document.querySelector('#menu');
    let Menu = ``;
    
    resources.map((resources) => {
        let subMenu = ``;
        resources.sources.forEach((item) => {
            subMenu += `
            <li><a target="_blank" href=${item.url}>${item.title}</a></li>`;
        });
    
        Menu += `
        <section class="MenuItem">
            <button onclick="Menu()">${resources.category}</button>
            <div class="open">
                <p class="text1">${resources.text1}</p> 
                <p class="text">${resources.text}</p>
                <ul class="subMenu">${subMenu}</ul>
            </div>
        </section>`;
    });
    
    menu.innerHTML = `
        <ul>
            ${Menu}
        </ul>`;*/