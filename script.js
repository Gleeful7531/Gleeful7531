document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('users.json')
            .then(response => response.json())
            .then(data => {
                const user = data.find(user => user.username === username && user.password === password);

                if (user) {
                    alert('Connexion réussie !');
                    window.location.href = 'welcome.html';
                } else {
                    alert('Pas les bonnes informations...');
                }
            })
            .catch(error => {
                console.error('Erreur de chargement du fichier JSON :', error);
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const submitAnswerButton = document.getElementById('submitAnswer');
    
    submitAnswerButton.addEventListener('click', function () {
        const userAnswer = document.getElementById('answer').value.toLowerCase(); 

        if (userAnswer === 'rue_clement_ader') {
            alert('BRAVOOOOOOOO');
            window.location.href = 'resultat.html';
        } else {
            alert("Tu racontes n'importe quoi ! ");
        }
    });
});

// 