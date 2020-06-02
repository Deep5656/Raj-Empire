let selectedCity = document.getElementById('selectedCity');
let selectedproperty = document.getElementById('selectedproperty');
let selectedstatus = document.getElementById('selectedstatus');
let search = document.getElementById('search');

search.addEventListener('click', () => {
    if (selectedCity.value === 'kanpur' && selectedproperty.value === 'residential' && selectedstatus.value === 'forsale') {
        console.log('kanpur with residential  and for sale is selected 1');
        let alertcontainer = document.getElementById('alertcontainer');
        alertcontainer.style = 'display:none';


    } else if (selectedCity.value === 'kanpur' && selectedproperty.value === 'commercial' && selectedstatus.value === 'forsale') {
        console.log('kanpur with commercial and for sale is selected 2');
          let alertcontainer = document.getElementById('alertcontainer');
    alertcontainer.style = 'display:none';

    } else if (selectedCity.value === 'kanpur' && selectedproperty.value === 'commercial' && selectedstatus.value === 'forcontract') {
        console.log('kanpur with commercial and for sale is selected 3');
          let alertcontainer = document.getElementById('alertcontainer');
    alertcontainer.style = 'display:none';

    } else if (selectedCity.value === 'lucknow' && selectedproperty.value === 'residential' && selectedstatus.value === 'forsale') {
        console.log('kanpur with commercial and for sale is selected 4');
          let alertcontainer = document.getElementById('alertcontainer');
    alertcontainer.style = 'display:none';

    } else if (selectedCity.value === 'lucknow' && selectedproperty.value === 'residential' && selectedstatus.value === 'forcontract') {
        console.log('kanpur with commercial and for sale is selected 5');
          let alertcontainer = document.getElementById('alertcontainer');
    alertcontainer.style = 'display:none';

    } else if (selectedCity.value === 'lucknow' && selectedproperty.value === 'commercial' && selectedstatus.value === 'forsale') {
        console.log('kanpur with commercial and for sale is selected 6');
          let alertcontainer = document.getElementById('alertcontainer');
    alertcontainer.style = 'display:none';

    } else if (selectedCity.value === 'lucknow' && selectedproperty.value === 'commercial' && selectedstatus.value === 'forcontract') {
        console.log('kanpur with commercial and for sale is selected 7');
          let alertcontainer = document.getElementById('alertcontainer');
    alertcontainer.style = 'display:none';

    } else if (selectedCity.value === 'kanpur' && selectedproperty.value === 'residential' && selectedstatus.value === 'forcontract') {
        console.log('kanpur with commercial and for sale is selected 8');
          let alertcontainer = document.getElementById('alertcontainer');
    alertcontainer.style = 'display:none';

    }else{
        console.log('choose all the option');
       let alertcontainer = document.getElementById('alertcontainer');
       alertcontainer.style = 'display:block';   
    
    }
});

let close = document.getElementById('close');
close.addEventListener('click',()=>{
    let alertcontainer = document.getElementById('alertcontainer');
    alertcontainer.style = 'display:none';
})