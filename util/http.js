import axios from "axios";

const stkInitiate = (stkRequest) => {
    const consumerKey = 'XtLZcwkA5XaJM6qmnJ2YkNdh5KGjUAF2';
    const consumerSecret = 'eJ3eeUtGArTaGAS4';
    const headers = {
        "Authorization": `Bearer + ${token}`,
        "Content-Type": "application/json"
    };
    const token = axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',{ headers }, { consumerKey: consumerSecret } ).then(res => console.log(res)).catch(err => console.log(err));
    console.log(`token - ${token}`);
    axios
        .post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', stkRequest, {headers})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export default stkInitiate