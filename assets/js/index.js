const formStudent = document.getElementById('form-student');
var correo = document.getElementById('correo').value;
formStudent.addEventListener('submit', e =>{
    e.preventDefault();
    const nombre = formStudent['nombre'].value;
    const apellido = formStudent['apellido'].value;
    const tipoDoc = formStudent['tDoc'].value;
    const documento = formStudent['documento'].value;

    console.log(nombre, apellido, tipoDoc, documento);
})
