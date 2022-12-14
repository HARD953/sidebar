import { cinet_pay } from "../../Components/cinet_pay_config";

export const CinetPay = window.CinetPay

export function makePayment(amount) {
    CinetPay.setConfig({
        apikey: cinet_pay.API_KEY,
        site_id: cinet_pay.SITE_ID,
        notify_url: cinet_pay.NOTIFY_URL,
        mode: 'PRODUCTION'
    });
    CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(), // YOUR TRANSACTION ID
        amount: amount,
        currency: 'XOF',
        channels: 'ALL',
        description: 'Test de paiement',   
         //Fournir ces variables pour le paiements par carte bancaire
        customer_name:"Joe",//Le nom du client
        customer_surname:"Down",//Le prenom du client
        customer_email: "down@test.com",//l'email du client
        customer_phone_number: "088767611",//l'email du client
        customer_address : "BP 0024",//addresse du client
        customer_city: "Antananarivo",// La ville du client
        customer_country : "CM",// le code ISO du pays
        customer_state : "CM",// le code ISO l'état
        customer_zip_code : "06510", // code postal

    });
    // CinetPay.waitResponse(function(data) {
    //     if (data.status === "REFUSED") {
    //         if (alert("Votre paiement a échoué")) {
    //             window.location.reload(); 
    //         }
    //     } else if (data.status === "ACCEPTED") {
    //         if (alert("Votre paiement a été effectué avec succès")) {
    //             window.location.reload();
    //         }
    //     }
    // });
    // CinetPay.onError(function(data) {
    //     console.log(data);
    // });
}