function clearContent() {
    console.log('Clearing content...')
    const dw1 = document.getElementById('dw1');
    const dw2 = document.getElementById('dw2');
    const dw3 = document.getElementById('dw3'); 
    const dw4 = document.getElementById('dw4');

    dw1.innerHTML = '';
    dw2.innerHTML = '';
    dw3.innerHTML = '';
    dw4.innerHTML = '';

    if (dw1) dw1.remove();
    if (dw2) dw2.remove();
    if (dw3) dw3.remove();
    if (dw4) dw4.remove();
}

document.getElementById('au').addEventListener('click', function() {
    clearContent();
    let auP = 
    `
        <div class="tit">Privacy and Policy</div>
        <div class="bb"></div>
        <div class="sbb"></div>
        <div class="btB"></div>
        <div class="btT">By Rolex 2024</div>
        <div class="btTT">Cookie References</div>
        <div class="titC">
            <span class="phrase">- Please read the Privacy Policy which governs the manner in which Rolex will handle any personal information that you provide.</span>
            <span class="phrase">- Rolex is not responsible for the content of any site linked to or from the Website.</span>
            <span class="phrase">- Linking to any other website is entirely at a user's own risk.</span>
            <span class="phrase">- While Rolex may provide links on the Website to other sites, the inclusion of such links is solely for the convenience of the user.</span>
            <span class="phrase">- Rolex makes no representations and disclaims all warranties, express and implied, as to the accuracy, validity, suitability, legality or otherwise of any materials or information contained on such sites.</span>
            <span class="phrase">- Rolex may at any time revise the terms and conditions contained in the Terms of Use Agreement by updating this posting.</span>
            <span class="phrase">- You accept any revisions and should periodically visit this page to review the current terms and conditions which apply to your use of the Website.</span>
        </div>
        <div class="eed">Excellence in Every Detail</div>
        <div class="rae">
            <span class="phrase1">- Rolex, a name synonymous with luxury and precision, not only offers world-class timepieces but also provides unparalleled services to ensure your watch remains a masterpiece for generations. This article delves into the various services offered by Rolex, highlighting their commitment to quality and customer satisfaction.</span>
            <span class="phrase1">- Rolex's dedication to excellence extends beyond the creation of their iconic watches. The company offers a range of services designed to maintain the performance and aesthetics of your timepiece. </span>
            <span class="phrase1">- Rolex's service process is meticulous and designed to guarantee the highest level of care and precision. Here's a step-by-step overview of what you can expect.</span>
            <span class="phrase1">- Rolex's commitment to excellence is evident not only in their timepieces but also in the comprehensive services they offer. Whether you need routine maintenance, a complete overhaul, or specialized restoration, Rolex ensures your watch remains a symbol of luxury and precision. Trusting your Rolex to an authorized service center guarantees that it will be cared for by experts dedicated to maintaining its performance and beauty for generations to come.</span>
        </div>
        <div class="atj">A Timeless Journey</div>
        <div class="dsg">
            <span class="phrase2">- Rolex, a name synonymous with luxury stands as one of the most prestigious watchmakers in the world. This article delves into the rich history, iconic models, and enduring legacy of Rolex.</span>
            <span class="phrase2">- The story of Rolex began in 1905 when Hans Wilsdorf and his brother-in-law Alfred Davis founded "Wilsdorf and Davis" in London. The company initially focused on the distribution of timepieces, but Wilsdorf had a vision to create precise and reliable wristwatches.</span>
            <span class="phrase2">- In 1910, Rolex achieved a significant milestone when one of its watches received the Swiss Certificate of Chronometric Precision from the Official Watch Rating Centre in Bienne. This marked the first time a wristwatch received such an accolade.</span>
            <span class="phrase2">- Rolex's commitment to excellence extends beyond its products. The company is known for its philanthropic efforts, particularly through the Rolex Awards for Enterprise and the Rolex Mentor and Protégé Arts Initiative.</span>
            <span class="phrase2">- Rolex also has a strong presence in the world of sports, serving as the official timekeeper for prestigious events such as Wimbledon, the 24 Hours of Le Mans, and the Rolex Sydney Hobart Yacht Race. This association with high-performance and precision underscores the brand's dedication to excellence.</span>
        </div>
    `
    document.getElementById('auP').innerHTML = auP;
});

document.getElementById('eu').addEventListener('click', function() {
    clearContent()
    let euP = 
    `
    <div class="dbb"></div>
    <div class="fbb"></div>
    <div class="btB"></div>
    <div class="btT">By Rolex 2024</div>
    <div class="btTT">Cookie References</div>
    <div class="ci">Contact Information</div>
    <div class="wtw">
        <span class="phrase3">- We take website accessibility seriously for all users of our website. </span>
        <span class="phrase3">- Our ongoing accessibility efforts work toward conforming to the Web Content Accessibility Guidelines (WCAG).</span>
        <span class="phrase3">- We welcome any feedback you may have. When providing feedback as to accessibility, we ask that you provide us with as many specific details as possible so we may research your specific concerns.</span>
        <span class="phrase3">- You can contact us via email at accessibility@rolex.com</span>
    </div>
    `
    document.getElementById('euP').innerHTML = euP;
});

document.getElementById('t5').addEventListener('click', function() {
    clearContent();
    let S1 =
        `
        <div class="s1">- Rolex Deepsea</div>
        <div class="ss1">- The Rolex Deepsea meets the most exacting requirements of professional divers in its resistance to pressure, precision and reliability.</div>
        <div class="sss1">- The Deepsea Challenge is a divers' watch of unique qualities, designed to resist pressures at the greatest depths and push the limits of the unknown.</div>
        <div class="ssss1" id="totalPrice">Price: $16,499</div>
        <div class="select-container">
            <label for="priceSelect">Choose quantity:</label>
            <select name="much" id="priceSelect" class="much">
                <option value="1" class="first">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <button class="sssssss1" id="sssssss1">BUY</button>
        <div class="ph1"></div>
        <div class="ph2"></div>
        <div class="ph3"></div>
        <div class="ph4"></div>
        <div class="btB"></div>
        <div class="btT">By Rolex 2024</div>
        <div class="btTT">Cookie References</div>
        <div class="privacy-policy" id="privacy-policy">
        <p>- We may collect, use, store, and transfer data we have grouped together as follows:</p>
        <p><strong>- Identity Data</strong> includes first name, maiden name, title, date of birth, and gender.</p>
        <p><strong>- Contact Data</strong> includes address, email address, and telephone numbers.</p>
        <p><strong>- Technical Data</strong> includes internet protocol devices you use to access this website.</p>
        <p><strong>- Usage Data</strong> includes information about how you use our website.</p>
        <p><strong>- Marketing and Communications Data</strong> includes your communication preferences.</p>
        </div>
        <div class="spt" id="spt"></div>
    `;
    document.getElementById('S1').innerHTML = S1;

    document.getElementById('priceSelect').addEventListener('change', function() {
        const basePrice = 16499;
        const selectedValue = parseInt(this.value);
        const totalPrice = basePrice * selectedValue;

        updatePrice(totalPrice);
    });

    function updatePrice(newPrice) {
        const priceElement = document.getElementById('totalPrice');
        const currentPriceText = priceElement.textContent;
        const currentPrice = parseInt(currentPriceText.replace(/[^0-9]/g, '')); // Extract numeric value

        const duration = 1000; // Duration of the transition in milliseconds
        const frameDuration = 1000 / 60; // 60 frames per second
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
    const buyButton = document.getElementById('sssssss1');
    
    buyButton.addEventListener('click', function() {
        const priceDiv = document.getElementById('totalPrice');
        const priceText = priceDiv.textContent;
        const privacyPolicy = document.getElementById('privacy-policy');

        let s = ``
        document.getElementById('privacy-policy').innerHTML = s;

        // Update the spt content with the priceText
        spt.innerHTML = `You have purchased Rolex Deepsea with the ${priceText}`;

        // Show the banner
        spt.classList.add('show');

        privacyPolicy.classList.add('hidden');

        privacyPolicy.innerHTML = '';
        setTimeout(() => {
            privacyPolicy.innerHTML = `
                <p>- We may collect, use, store, and transfer data we have grouped together as follows:</p>
                <p><strong>- Identity Data</strong> includes first name, maiden name, title, date of birth, and gender.</p>
                <p><strong>- Contact Data</strong> includes address, email address, and telephone numbers.</p>
                <p><strong>- Technical Data</strong> includes internet protocol devices you use to access this website.</p>
                <p><strong>- Usage Data</strong> includes information about how you use our website.</p>
                <p><strong>- Marketing and Communications Data</strong> includes your communication preferences.</p>
            `;
            privacyPolicy.classList.remove('hidden');
            privacyPolicy.classList.add('visible');
        }, 5500);

        // Hide the banner after 3 seconds
        setTimeout(() => {
            spt.classList.remove('show');
            spt.classList.add('hide');
        }, 5000);
    });
});

document.getElementById('y5').addEventListener('click', function () {
    clearContent();
    let D1 = `
                <div class="NameTitle">- Day-Date 40</div>
                <div class="ContentNr1">- The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case.</div>
                <div class="ContentNr2">- It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools.</div>
                <div class="WatchPrice" id="WatchPrice">Price: $57,500</div>
                <div class="ContanierSel">
                    <label for="ThePriceCh">
                        <select name="watch" id="ThePriceCh" class="watch">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </div>
                <button class="BuyButton" id="BuyButton">BUY</button>
                <div class="FirstPhoto"></div>
                <div class="SecondPhoto"></div>
                <div class="ThirdPhoto"></div>
                <div class="FourthPhoto"></div>
                <div class="btB" id="BottomBar"></div>
                <div class="btT">By Rolex 2024</div>
                <div class="btTT">Cookie Reference</div>
                <div class="privacy-policy" id="privacy-policy">
                    <p>- We may collect, use, store, and transfer data we have grouped together as follows:</p>
                    <p><strong>- Identity Data</strong> includes first name, maiden name, title, date of birth, and gender.</p>
                    <p><strong>- Contact Data</strong> includes address, email address, and telephone numbers.</p>
                    <p><strong>- Technical Data</strong> includes internet protocol devices you use to access this website.</p>
                    <p><strong>- Usage Data</strong> includes information about how you use our website.</p>
                    <p><strong>- Marketing and Communications Data</strong> includes your communication preferences.</p>       
                </div>
                <div class="spt" id="spt"></div>
            `;
            document.getElementById('D1').innerHTML = D1;

    document.getElementById('ThePriceCh').addEventListener('click', function () {
        const basePrice = 57500;
        const selectedValue = parseInt(this.value);
        const totalPrice = basePrice * selectedValue;

        updatePrice(totalPrice);
    });

    function updatePrice(newPrice) {
        const priceElement = document.getElementById('WatchPrice');
        const currentPriceText = priceElement.textContent;
        const currentPrice = parseInt(currentPriceText.replace(/[^0-9]/g, ''));

        const duration = 1000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        const  priceDiff = newPrice - currentPrice;
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
    const BuyButton = document.getElementById('BuyButton');
     
    BuyButton.addEventListener('click', function() {
        const priceDiv = document.getElementById('WatchPrice');
        const priceText = priceDiv.textContent;
        const privacyPolicy = document.getElementById('privacy-policy');

        let s = ``;
        document.getElementById('privacy-policy').innerHTML = s;

        spt.innerHTML = `You have purchased Rolex Day Date 40 whith the ${priceText}`;

        spt.classList.add('show')

        privacyPolicy.classList.add('hidden');

        privacyPolicy.innerHTML = '';
        setTimeout(() => {
            privacyPolicy.innerHTML = `
                <p>- We may collect, use, store, and transfer data we have grouped together as follows:</p>
                <p><strong>- Identity Data</strong> includes first name, maiden name, title, date of birth, and gender.</p>
                <p><strong>- Contact Data</strong> includes address, email address, and telephone numbers.</p>
                <p><strong>- Technical Data</strong> includes internet protocol devices you use to access this website.</p>
                <p><strong>- Usage Data</strong> includes information about how you use our website.</p>
                <p><strong>- Marketing and Communications Data</strong> includes your communication preferences.</p>
            `;
            privacyPolicy.classList.remove('hidden');
            privacyPolicy.classList.add('visible');
        }, 5500);

        setTimeout(() => {
            spt.classList.remove('show');
            spt.classList.add('hide');
        }, 5000);
    });
});

document.getElementById('u5').addEventListener('click', function () {
    clearContent();
    let F1 = 
    `
        <div class="NameTitle2">- Sky-Dweller</div>
        <div class="ContentNr3">- A fixed inverted red triangle on the dial points to the chosen reference time - the time at home or at the traveller's usual workplace - on the off-centre 24-hour disc.</div>
        <div class="ContentNr4">- A deep red rectangle in one of the 12 windows around the dial indicates the current month, a striking characteristic of the Saros annual calendar.</div>
        <div class="WatchPrice2" id="WatchPrice2">Price: £47,200</div>
        <div class="ContanireNr2">
         <label for="ThePriceWatch2">
                <select name="SecondWatch" id="SecondWatch" class="SecondWatch">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
        </div>
        <button class="SecondBuy" id="SecondBuy">BUY</button>
        <div class="w1"></div>
        <div class="w2"></div>
        <div class="w3"></div>
        <div class="w4"></div>
        <div class="btB" id="BottomBar"></div>
        <div class="btT">By Rolex 2024</div>
        <div class="btTT">Cookie Reference</div>
        <div class="privacy-policy" id="privacy-policy">
            <p>- We may collect, use, store, and transfer data we have grouped together as follows:</p>
            <p><strong>- Identity Data</strong> includes first name, maiden name, title, date of birth, and gender.</p>
            <p><strong>- Contact Data</strong> includes address, email address, and telephone numbers.</p>
            <p><strong>- Technical Data</strong> includes internet protocol devices you use to access this website.</p>
            <p><strong>- Usage Data</strong> includes information about how you use our website.</p>
            <p><strong>- Marketing and Communications Data</strong> includes your communication preferences.</p>       
        </div>
        <div class="spt" id="spt"></div>
    `;
    document.getElementById('F1').innerHTML = F1;

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
});

document.getElementById('i5').addEventListener('click', function () {
    clearContent();
    let H1 = 
    `
    <div class="NameTitle3">- 1908</div>
    <div class="ContentNr5">- The ice blue dial features a guilloché rice-grain motif. Repeating geometric pattern of the dial starting from the small seconds counter at 6 o'clock.</div>
    <div class="ContentNr6">- This exclusive dial bears the same Arabic numerals 3, 9 and 12. This exclusive dial colour the Cosmograph Daytona and the Perpetual 1908.</div>
    <div class="WatchPrice3" id="WatchPrice3">Price: $25,000</div>
    <div class="ContanireNr3">
        <label for="ThePriceWatch3">
            <select name="ThirdWatch" id="ThirdWatch" class="ThirdWatch">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </label>
    </div>
    <button class="ThirdBuy" id="ThirdBuy">BUY</button>
    <div class="h1"></div>
    <div class="h2"></div>
    <div class="h3"></div>
    <div class="h4"></div>
    <div class="btB" id="BottomBar"></div>
        <div class="btT">By Rolex 2024</div>
        <div class="btTT">Cookie Reference</div>
        <div class="privacy-policy" id="privacy-policy">
            <p>- We may collect, use, store, and transfer data we have grouped together as follows:</p>
            <p><strong>- Identity Data</strong> includes first name, maiden name, title, date of birth, and gender.</p>
            <p><strong>- Contact Data</strong> includes address, email address, and telephone numbers.</p>
            <p><strong>- Technical Data</strong> includes internet protocol devices you use to access this website.</p>
            <p><strong>- Usage Data</strong> includes information about how you use our website.</p>
            <p><strong>- Marketing and Communications Data</strong> includes your communication preferences.</p>       
        </div>
        <div class="spt" id="spt"></div>
    `;
    document.getElementById('H1').innerHTML = H1;

    document.getElementById('ThirdWatch').addEventListener('click', function () {
        const basePrice = 25000;
        const selectedValue = parseInt(this.value);
        const totalPrice = basePrice * selectedValue;

        updatePrice(totalPrice);
    });

    function updatePrice(newPrice) {
        const priceElement = document.getElementById('WatchPrice3');
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
    const ThirdBuy = document.getElementById('ThirdBuy');

    ThirdBuy.addEventListener('click', function () {
        const priceDiv = document.getElementById('WatchPrice3');
        const priceText = priceDiv.textContent;
        const privacyPolicy = document.getElementById('privacy-policy');

        let s = ``;
        document.getElementById('privacy-policy').innerHTML = s;

        spt.innerHTML = `You have purchased Rolex 1908 whith the ${priceText}`;
        spt.classList.add('show');
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
});