const servicios = document.getElementById('servicios');
const serviciosList = servicios.querySelector('ul');

serviciosList.style.display = 'none';

servicios.addEventListener('click', () => {
    if (serviciosList.style.display === 'none') {
        serviciosList.style.display = 'block';
    } else {
        serviciosList.style.display = 'none';
    }
});