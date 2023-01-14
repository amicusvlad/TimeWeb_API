async function fetchHandlerAccount(){
    try {
        const response = await fetch('https://api.timeweb.cloud/api/v1/account/status', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': apiToken
            }
        });
        const data = await response.json();
        console.log('Company name: ', data.status.company_info.name);
        console.log('is_blocked: ', data.status.is_blocked);
        console.log('last_password_changed_at: ', data.status.last_password_changed_at);

        let name = data.status.company_info.name;
        let isBlocked = data.status.is_blocked;
        let lastPasswordChangedAt = data.status.last_password_changed_at;

        document.getElementById('name').innerHTML = name;
        document.getElementById('is_blocked').innerHTML = isBlocked;
        document.getElementById('last_password_changed_at').innerHTML = lastPasswordChangedAt;
        
    } catch (error) {
        console.log(error);
    };
};

	