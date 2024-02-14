const projectcontainer = document.getElementById('container');
        const jsonUrl = 'informatie.json';

        // Gebruik de fetch API om de JSON-gegevens op te halen
        fetch(jsonUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Netwerkfout: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            // Nu heb je toegang tot de JSON-gegevens
            console.log(data);

            // Hier kun je de ontvangen gegevens verwerken en weergeven in je HTML
            projectcontainer.textContent = JSON.stringify(data, null, 2);
          })
          .catch(error => {
            console.error('Fout bij het ophalen van JSON:', error);
          });