(() => {
    let lastImage = null;
    const cardList = {
        'Magician of Black Chaos': 'https://static.wikia.nocookie.net/yugioh/images/0/06/MagicianofBlackChaos-SBTK-EN-UR-1E.png/revision/latest?cb=20191207202615',
        'Dark Magician Girl': 'https://static.wikia.nocookie.net/yugioh/images/9/96/DarkMagicianGirl-STAX-EN-C-1E.png/revision/latest?cb=20240216023835',
        'Dark Magician': 'https://static.wikia.nocookie.net/yugioh/images/a/ae/DarkMagician-STAX-EN-C-1E.png/revision/latest?cb=20240216022504',
    };

    function getRandomEntry() {
        const keys = Object.keys(cardList);
        let randomKey = null;

        while (randomKey === null) {
            let index = Math.floor(Math.random()*keys.length);
            let tmp = keys[index];
            if (lastImage === null || lastImage !== tmp) {
                randomKey = tmp;
            }
        }

        lastImage = randomKey;
        return lastImage;
    }

    function changeImage(imageKey) {
        const imageTag = document.getElementById('card-image');
        imageTag.src = cardList[imageKey];
        imageTag.alt = imageKey;
    }

    function fadeInOut() {
        console.log('fade in/out');
        document.getElementById('card-image').classList.toggle('hide');
    }

    document.getElementById('trigger').addEventListener('click', () => {
        const isHidden = document.getElementById('card-image').classList.contains('hide');
        if (isHidden) {
            const entryKey = getRandomEntry();
            changeImage(entryKey);
        }
        fadeInOut();
    });
})();