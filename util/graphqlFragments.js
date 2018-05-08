export default {
    CampaignFields: `
        fragment CampaignFields on Campaign 
        {
            _id,
            start,
            end,
            price,
            discount,
            cashback,
            currency,
            quota,
            supporters 
            {
                username
            },
            item 
            {
                _id,
                name,
                brief,
                description,
                images
                {
                    url
                }
            }
        }`
};