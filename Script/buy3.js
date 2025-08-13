document.getElementById('SecondWatch').addEventListener('click', function () {
        const basePrice = 47200;
        const selectedValue = parseInt(this.value);
        const totalPrice = basePrice * selectedValue;

        updatePrice(totalPrice);
    });

    function updatePrice(newPrice) {
        const priceElement = document.getElementById('WatchPrice2');
        const currentPriceText = priceElement.textContent;
        const currentPrice = parseInt(currentPriceText.replace(/[^0-9]/g, ''));
        
        const duration = 1000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        const priceDiff = newPrice - currentPrice;
        let currentFrame = 0;

        const counter = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const animatedPrice = Math.round(currentPrice + priceDiff * progress);

            priceElement.textContent = `Price: $${animatedPrice.toLocaleString()}`;

            if (currentFrame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    }

    const spt = document.getElementById('spt');
    const SecondBuy = document.getElementById('SecondBuy');

    SecondBuy.addEventListener('click', function () {
        const priceDiv = document.getElementById('WatchPrice2');
        const priceText = priceDiv.textContent;
        const privacyPolicy = document.getElementById('privacy-policy');

        let s = ``;
        document.getElementById('privacy-policy').innerHTML = s;

        spt.innerHTML = `You have purchased Rolex Sky-Dweller whith the ${priceText}`;
        spt.classList.add(`show`);
        privacyPolicy.classList.add('hidden');
        privacyPolicy.innerHTML = ``;
        
        setTimeout(() => {
            privacyPolicy.innerHTML = 
            `
            <p>- We may collect, use, store, and transfer data we have grouped together as follows:</p>
                <p><strong>- Identity Data</strong> includes first name, maiden name, title, date of birth, and gender.</p>
                <p><strong>- Contact Data</strong> includes address, email address, and telephone numbers.</p>
                <p><strong>- Technical Data</strong> includes internet protocol devices you use to access this website.</p>
                <p><strong>- Usage Data</strong> includes information about how you use our website.</p>
                <p><strong>- Marketing and Communications Data</strong> includes your communication preferences.</p>
            `;
            privacyPolicy.classList.remove('hidden')
            privacyPolicy.classList.add('visible');
        }, 5500);
        
        setTimeout(() => {
            spt.classList.remove('show');
            spt.classList.add('hide');
        }, 5000 );
    });