const projectcontainer = document.getElementById('container');
        const jsonUrl = 'informatie.json';

        async function fetchData() {
          try {
            const response = await fetch(jsonUrl);

            if (!response.ok) {
              throw new Error(`Netwerkfout: ${response.status}`);
            }

            const data = await response.json();
            console.log(data.projecten);

            // Hier kun je de ontvangen gegevens verwerken en weergeven in je HTML
            //projectcontainer.textContent = JSON.stringify(data, null, 2);
          } catch (error) {
            console.error('Fout bij het ophalen van JSON:', error);
          }
        }

        fetchData();