window.onload = function() {
    var supportedFlag = $.keyframe.isSupported();
    let rotatingWrapper = document.querySelector('.arrow-wrapper');   
    let popUp = document.querySelector('.pop-up');
    let popUpCrossSvg = document.querySelector('.pop-up-cross-icon')
    let popUpText = document.querySelector('.pop-up-text');
    let wheelArrow = document.querySelector('.wheel-arrow');
    let button = document.getElementById('startSpin')
    let fifty = 50;
    let twenty = 20;
    popUpCrossSvg.addEventListener('click', function(){
        popUp.style.opacity = 0;
        setTimeout(() => {
          popUp.style.display = 'none'
        }, 1600);
      })
      function setNameOfPopUp(name){
        popUp.style.display = 'block';
        popUpText.textContent = 'Ваша категория -' + ' ' + name
        setTimeout(() => {
          popUp.style.opacity = 1;
        }, 500);
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min + 2040; //Максимум не включается, минимум включается
        
      }

      function getRotationDegrees(obj) {
        var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
        if(matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else { var angle = 0; }
        return (angle < 0) ? angle + 360 : angle;
    }
      
    
    button.addEventListener(('click'), function () {
        let getRandomNumbers = getRandomInt(0, 360)
        $.keyframe.define({
            name: 'moving_wrapper',
            '0%': {
                'transform': 'rotate(0deg)'
            },
            '5%': {
                'transform': 'rotate(360deg)'
            },
            '10%': {
                'transform': 'rotate(720deg)'
            },
            '15%': {
                'transform': 'rotate(1080deg)'
            },
            '20%': {
                'transform': 'rotate(1440deg)'
            },
            '25%': {
                'transform': 'rotate(1620deg)'
            },
            '30%': {
                'transform': 'rotate(1800deg)'
            },
            '35%': {
                'transform': 'rotate(1900deg)'
            },
            '40%': {
                'transform': 'rotate(1970deg)'
            },
            '45%': {
                'transform': 'rotate(2040deg)'
            },

            '70%': {
                'transform': 'rotate(' + getRandomNumbers + 'deg)'
            },
            '80%': {
                'transform': 'rotate(' + parseInt(getRandomNumbers + fifty) + 'deg)'
            },


            '100%': {
                'transform': 'rotate(' + parseInt(getRandomNumbers + fifty + 25)+ 'deg)'
            }
          }
          );

          $('.arrow-wrapper').playKeyframe({
            name: 'moving_wrapper',
            duration: '7s',
            delay: '0s',
            iterationCount: '1',
            timingFunction: 'linear',
            complete: function () {
                let degree = getRotationDegrees($('.arrow-wrapper'))
                if (degree <= 25){
                    setNameOfPopUp(name = 'память')
                } else if(degree <= 51){
                    setNameOfPopUp(name = 'кругозор')
                } else if(degree <= 83){
                    setNameOfPopUp(name = 'общее развитие')
                } else if(degree <= 103){
                    setNameOfPopUp(name = 'социальность')
                } else if(degree <= 128 ){
                    setNameOfPopUp(name = 'личностные качества')
                } else if(degree <= 153){
                    setNameOfPopUp(name = 'самооценка')
                } else if(degree <= 179){
                    setNameOfPopUp(name = 'эрудиция')
                } else if(degree <= 214){
                    setNameOfPopUp(name = 'медитация')
                } else if(degree <= 237){
                    setNameOfPopUp(name = 'хобби')
                } else if(degree <= 261){
                    setNameOfPopUp(name = 'outdoor')
                } else if(degree <= 294){
                    setNameOfPopUp(name = 'планирование')
                } else if(degree <= 320){
                    setNameOfPopUp(name = 'отдых')
                } else if(degree <= 345){
                    setNameOfPopUp(name = 'дисциплина')
                } else if(degree <= 359){
                    setNameOfPopUp(name = 'спорт')
                }
                
            }
          })
        
        
  
      })
};