const ngrok = require('ngrok');
const url = async()=>{
    const url = await ngrok.connect(3000);
    console.log({url});
};
module.exports = {
    url,
}