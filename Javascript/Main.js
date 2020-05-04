let employees = '';
fetch('https://mock-io.herokuapp.com/users')
.then(function(response){
    return response.json()
})
.then(function(data1){
    employees = data1;
    employees.forEach(function(userdata)
    {
        let city=document.createElement('p');
        city.innerHTML='<b>City</b>:'+''+userdata.address.city;    
        city.style.margin='10px'; 

        let country=document.createElement('p');
        country.innerHTML='<b>Country</b>:'+''+userdata.address.country;    
        country.style.margin='10px';

        let state=document.createElement('p');
        state.innerHTML='<b>State</b>:'+''+userdata.address.state;    
        state.style.margin='10px';

        let email=document.createElement('p');
        email.innerHTML='<b>email</b>:'+''+userdata.email;    
        email.style.margin='10px';

        let image=document.createElement('img');
        image.src=userdata.profileImage;
        image.style.width='270px';
        image.style.height='230px';
        image.style.marginRight='10px';

        let phone=document.createElement('p');
        phone.innerHTML='<b>Phone</b>:'+''+userdata.phone ;
        phone.style.textDecoration='none';
        phone.style.textAlign='justify';
        phone.style.color='black';
        phone.style.margin='10px'; 
        

        let Name=document.createElement('h4');
        Name.innerHTML='<b>Name</b>: '+''+userdata.firstName +' '+ userdata.lastName;
        Name.style.margin='10px'; 
        

        let display =document.createElement('div');
        display.appendChild(image);
        display.appendChild(Name);  
        display.appendChild(phone);
        display.appendChild(country);
        display.appendChild(state);
        display.appendChild(city);
        display.appendChild(email);
        // display.style.padding='5px';
        display.style.alignItems='center';
        display.style.width='270px';
        display.style.height='420px';
        display.style.float='left';
        display.style.display='table-caption';
        display.style.margin='10px';
        display.style.backgroundColor='#ffd1bd'
        document.body.appendChild(display);
    })
})