async function fetchHandlerFinances(){
    try {
        const response = await fetch('https://api.timeweb.cloud/api/v1/account/finances', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': apiToken
            }
        });
        const data = await response.json();
        console.log('Balance: ', ( Math.floor(data.finances.balance * 100) / 100 )); //round to two decimal places
        console.log('currency: ', data.finances.currency);
        console.log('discount_end_date_at: ', data.finances.discount_end_date_at);
        console.log('discount_percent: ', data.finances.discount_percent);
        console.log('hourly_cost: ', ( Math.floor(data.finances.hourly_cost * 100) / 100 ));
        console.log('monthly_cost: ', ( Math.floor(data.finances.monthly_cost * 100) / 100 ));
        console.log('total_paid: ', data.finances.total_paid);
    } catch (error) {
        console.log(error);
    };
};