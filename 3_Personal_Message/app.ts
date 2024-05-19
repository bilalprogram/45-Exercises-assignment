let personName :string = '';

personName = prompt('what is your favorite dish?') || '';

if(personName !== null && personName !== ''){
    alert(`hello ${personName},would you like to have some chicken biryani?`)
}
else{
    alert('you have to choose only one dish!')
}