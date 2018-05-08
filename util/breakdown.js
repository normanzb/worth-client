export default function(campaign){
    var discountPC = Math.round(campaign.discount / campaign.price * 10000) / 100;
    var cashbackPC = Math.round(campaign.cashback / campaign.price * 10000) / 100;
    var actualPay = campaign.price - campaign.cashback - campaign.discount;
    var actualPayPC = Math.round(actualPay / campaign.price * 10000) / 100;
    var quotaAvailablePC = Math.round((campaign.quota - campaign.taken) / campaign.quota * 10000) / 100;
    var quotaTakenPC = Math.round(campaign.taken / campaign.quota * 10000) / 100;
    var downPayment = actualPay * 1 + campaign.cashback * 1;

    return Object.assign({
        discountPC,
        cashbackPC,
        actualPay,
        actualPayPC,
        quotaAvailablePC,
        quotaTakenPC,
        downPayment
    }, campaign);
};