<<<<<<< HEAD
axios.get('https://github.com/p3hndrx/MLBB-API/blob/main/v1/hero-meta-final.json ')
=======
axios.get('https://bymykel.github.io/CSGO-API/api/en/all.json')
>>>>>>> ac991cf19e9781f53876c63843fec4a177c21883
    .then(response => {
        const skins = response.data;
        const skinsGrid = document.querySelector('.skins-grid');

        skins.forEach(skin => {
            const skinCard = document.createElement('div');
            skinCard.classList.add('skin-card');

            const image = document.createElement('img');
            image.src = skin.image;
            skinCard.appendChild(image);

            const name = document.createElement('div');
            name.classList.add('skin-name');
            name.textContent = skin.name_original;
            skinCard.appendChild(name);

            const details = document.createElement('div');
            details.classList.add('skin-details');
            details.innerHTML = `
        <p>ID: ${skin.id}</p>
        <p>Description: ${skin.description}</p>
        <p>Weapon: ${skin.weapon}</p>
        <p>Pattern: ${skin.pattern}</p>
        <p>Rarity: ${skin.rarity}</p>
        <p>StatTrak: ${skin.stattrak ? 'Yes' : 'No'}</p>
      `;
            skinCard.appendChild(details);

            skinsGrid.appendChild(skinCard);
        });
    })
    .catch(error => console.error('Error fetching skins:', error));