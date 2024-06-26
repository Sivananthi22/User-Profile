async function fetchUsers() {
    const profilesContainer = document.getElementById('cards');
    const usersTable = document.getElementById('usersTable');

    try {
        profilesContainer.innerHTML = '';                                           // Inorder to clear previous profiles
        usersTable.innerHTML = '';

        const response = await fetch('https://randomuser.me/api/?results=5');       // To Fetch the random five users
        const data = await response.json();
        const users = data.results;

        users.forEach(user => {                                                     // Inorder to display profiles in cards
            const profileCard = document.createElement('div');
            profileCard.className = 'profile-card';
            profileCard.innerHTML = `
                <img src="${user.picture.medium}" alt="${user.name.first}">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.email}</p>
            `;
            profilesContainer.appendChild(profileCard);
        });

        users.forEach(user => {                                                   // To include table with lots of users
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name.first} ${user.name.last}</td>
                <td>${user.email}</td>
            `;
            usersTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching user profiles:', error);
    }
}

fetchUsers();
