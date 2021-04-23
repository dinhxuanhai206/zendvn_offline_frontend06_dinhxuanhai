let inputName = document.getElementById('texts');
let inputSlug = document.getElementById('slug');

inputName.addEventListener('input', function(){
    inputSlug.value = inputName.value;
})