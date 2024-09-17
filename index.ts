/**
 * 官方說明文件
 * https://github.com/uNetworking/uWebSockets.js/tree/master/examples
 * 
 * In Memory Cached
 * https://github.com/uNetworking/uWebSockets.js/blob/master/examples/CachedHelloWorld.js
 * 
 * Parse JSON Body
 * https://github.com/uNetworking/uWebSockets.js/blob/master/examples/JsonPost.js
 * 
 * 路由範例
 * https://github.com/uNetworking/uWebSockets.js/blob/master/examples/Router.js
 */
// 效能計時開始
const time = new Date().getTime()
import uWS from 'uWebSockets.js'
// adapters
import firebase from './adapters/firebase.out'
import googleCloud from './adapters/googleCloud.out'
import chatGpt from './adapters/chatGpt.out'
import centralBank from './adapters/centralBank.out'
import ishares from './adapters/ishares.out'
// controllers
import rootController from './adapters/blog.in/root.ctrl'

(async () => {
    const port = 9001;
    global.test = ''
    const app = uWS.App()
    app.get('/*', (res) => {
        res.end('Hello World!');
    })

    app.listen(port, (token) => {
        if (token) {
            console.log('Listening to port ' + port);
        } else {
            console.log('Failed to listen to port ' + port);
        }
    });
})()