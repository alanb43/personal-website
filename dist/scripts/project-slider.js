var counter = 0;
    function nextSlide() {
        var nextSlide = counter + 1 ;
        if (nextSlide <= 3) {
            document.getElementById('panel'+counter).style.display = 'none';
            document.getElementById('panel'+nextSlide).style.display = 'block';
            counter++;
        } else {
            counter = 0;
            document.getElementById('panel3').style.display = 'none';
            document.getElementById('panel0').style.display = 'block';
        }
    }
counter = 0;
    function previousSlide() {
        var nextSlide = counter - 1 ;
        if (nextSlide >= 0) {
            console.log('counter',counter);
            console.log('nextSlide',nextSlide);
            document.getElementById('panel'+counter).style.display = 'none';
            document.getElementById('panel'+nextSlide).style.display = 'block';
            counter--;
        } else {
            counter = 3;
            document.getElementById('panel3').style.display = 'block';
            document.getElementById('panel0').style.display = 'none';
        }
    }