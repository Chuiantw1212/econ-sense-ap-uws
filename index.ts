// 效能計時開始
const time = new Date().getTime()
import uWS from 'uWebSockets.js'
// adapters
import firebase from './adapters/firebase.out'
import googleCloud from './adapters/googleCloud.out'
import chatGpt from './adapters/chatGpt.out'
import centralBank from './adapters/centralBank.out'
import ishares from './adapters/ishares.out'
// 
const port = 9001;

const app = uWS./*SSL*/App({
    key_file_name: 'misc/key.pem',
    cert_file_name: 'misc/cert.pem',
    passphrase: '1234'
}).get('/*', (res) => {
    res.end('Hello World!');
}).listen(port, (token) => {
    if (token) {
        console.log('Listening to port ' + port);
    } else {
        console.log('Failed to listen to port ' + port);
    }
});