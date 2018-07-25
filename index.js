exports.getUserDetails = async (req, res) => {
    const fetch = require('node-fetch')

    const response = await fetch('https://randomuser.me/api/')
    const userObj = await response.json()

    res.json({
        generator: 'google-cloud-function',
        ...userObj.results[0]
    })
}