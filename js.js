let xOffset = 0;
        let isMouseIn = false;
        const slides = document.getElementById("slides-woman");

        setInterval(translate1, 0);

        function translate1() {
            let offsetIncrementor = isMouseIn ? 0.03 : 0.1;
            if (xOffset >= 258 * 7) xOffset = 0;
            else xOffset = xOffset + offsetIncrementor;
            slides.style.transform = "translateX(-" + xOffset + "px)";
        }

        slides.addEventListener("mouseover", function (event) {
            isMouseIn = true;
        });

        slides.addEventListener("mouseout", function (event) {
            isMouseIn = false;
        });




        let xOffsetM = 0;
            let isMouseIn2 = false;
            const slides2 = document.getElementById("slides-woman2");

            setInterval(translate, 0);

            function translate() {
                let offsetIncrementor2 = isMouseIn2 ? 0.03 : 0.1;
                if (xOffsetM  >= 258 * 7) xOffsetM  = 0;
                else xOffsetM  = xOffsetM  + offsetIncrementor2;
                slides2.style.transform = "translateX(-" + xOffsetM  + "px)";
            }

            slides2.addEventListener("mouseover", function (event) {
                isMouseIn2 = true;
            });

            slides2.addEventListener("mouseout", function (event) {
                isMouseIn2 = false;
            });
 