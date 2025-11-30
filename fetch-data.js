async function fetchUserData() {
    // 1. API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 2. Select the container
    const dataContainer = document.getElementById('api-data');

    try {
        // 3. Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 4. Clear loading message
        dataContainer.innerHTML = '';

        // 5. Create a <ul> list
        const userList = document.createElement('ul');

        // 6. Loop and display each user's name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // 7. Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 8. Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run the function after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
