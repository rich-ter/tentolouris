const serviceData = [
    {
        title: 'Παχυσαρκία',
        description: 'Ο σακχαρώδης διαβήτης είναι ένα συχνό μεταβολικό νόσημα που χαρακτηρίζεται από υψηλά επίπεδα γλυκόζης (σακχάρου) στο αίμα. Στο διαβήτη, ο οργανισμός παράγει λιγότερη ή και καθόλου ινσουλίνη ή χρησιμοποιεί την ινσουλίνη με τρόπο μη αποτελεσματικό.',
        src: './organs.png'
    },
    {
        title: 'Σακχαρώδης Διαβήτης',
        description: 'Ο σακχαρώδης διαβήτης είναι ένα συχνό μεταβολικό νόσημα που χαρακτηρίζεται από υψηλά επίπεδα γλυκόζης (σακχάρου) στο αίμα. Στο διαβήτη, ο οργανισμός παράγει λιγότερη ή και καθόλου ινσουλίνη ή χρησιμοποιεί την ινσουλίνη με τρόπο μη αποτελεσματικό.',
            src: './blood.png'

    },
    {
        title: 'Παθολογία',
        description: 'Ο σακχαρώδης διαβήτης είναι ένα συχνό μεταβολικό νόσημα που χαρακτηρίζεται από υψηλά επίπεδα γλυκόζης (σακχάρου) στο αίμα. Στο διαβήτη, ο οργανισμός παράγει λιγότερη ή και καθόλου ινσουλίνη ή χρησιμοποιεί την ινσουλίνη με τρόπο μη αποτελεσματικό.',
        src: './organs.png'

    },
    {
        title: 'Διαβητικό πόδι',
        description: 'Ο σακχαρώδης διαβήτης είναι ένα συχνό μεταβολικό νόσημα που χαρακτηρίζεται από υψηλά επίπεδα γλυκόζης (σακχάρου) στο αίμα. Στο διαβήτη, ο οργανισμός παράγει λιγότερη ή και καθόλου ινσουλίνη ή χρησιμοποιεί την ινσουλίνη με τρόπο μη αποτελεσματικό.',
        src: './microscope.png'

    },
]

function renderServices(serviceData){

  // <script type="module" src='./data/serviceData'></script>
  const html = serviceData.map (service=> {
    console.log(service.title)
    console.log(service)
          return `
            <div data-w-id="32bfdd65-662d-8660-4f63-b95111d5f9a6" role="listitem" class="w-dyn-item">
              <div class="card"><img width="246" src=${service.src} alt="" class="icon-card">
                <h2 class="header-h3" id="service-title">${service.title}</h2>
                <p class="paragraph-default" id="service-description">${service.description}</p>
              </div>
            </div>
          `;
      })
      .join("")
  document.querySelector('#service-render').innerHTML = ("afterbegin", html);
    
};

    
renderServices(serviceData);