let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const angle = parseFloat(document.getElementById('angle').value);
    const ground = parseFloat(document.getElementById('ground').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(angle === '' || isNaN(angle) || (angle <= 0)){
        document.getElementById('angle_error').innerHTML = 'Please provide a valid angle';
    }else{
        document.getElementById('angle_error').innerHTML = '';
        angle_status=true;
    }
    if(ground === '' || isNaN(ground) || (ground <= 0)){
        document.getElementById('ground_error').innerHTML = 'Please provide a valid ground clearance';
    }else{
        document.getElementById('ground_error').innerHTML = '';
        ground_status=true;
    }

    if(height_status && angle_status){
        
        const Lot = (height*Math.cos(angle*0.0174555)).toFixed(2);
        const Lar=((height-ground)*Math.sin(angle*0.0174555)).toFixed(2);
        
        
        result.innerHTML = 'Length of the outrigger = ' + Lot+' mm'+ '<br><br> Length of the angle adjusting rod = '+Lar +' mm';
        


       
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});