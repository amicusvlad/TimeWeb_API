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
    } catch (error) {
        console.log(error);
    };
};

	