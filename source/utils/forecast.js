const request = require('postman-request')


const forecast= (latitude, longitude, callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=b2816eac8ce53ef0c8dcfea8142c240c&query=' + latitude + ',' + longitude

    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if(response.body.error){
            callback('unable to find location!',undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.' + ' The wind speed currently is: ' + response.body.current.wind_speed + ' kmh'
            )
        }
    })
}
module.exports = forecast