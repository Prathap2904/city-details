const button = document.querySelector('button')
    button.addEventListener('click',displaystats)
    function displaystats(){
        
        const input = document.getElementById("input")
        let city = input.options[input.selectedIndex].value
        let population=0 ;
        let language='' ;
        let rate=0 ;
          switch (city) {
            case "Chennai":
                population = 6,407,999
                language = "Tamil"
                rate =90.18
                 break;
            case 'Erode':
            population = 676,999
                language = 'Tamil'
                rate =88.29
               break;
            case 'Coimbatore':
            population = 3,999,999
                language='Tamil'
                rate = 91.30
               break;
            case 'Salem':
            population =1,263,999
                language='Tamil'
                rate =84.42
               break;

        }
        let text = `The Indian city of ${city} has population of ${population}.Language spoken is ${language} and the literacy rate is ${rate}%.`
        let resultdiv = document.createElement('div')
        resultdiv.id='result'
        document.getElementById('wrapper').appendChild(resultdiv)
        document.getElementById('result').innerHTML = text}
