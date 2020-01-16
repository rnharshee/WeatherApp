
const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/d47edb479c0e88a9645b358702f44fd3/'+latitude+','+longitude+'?units=si'
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
        const currently=body.currently
        const data=body.daily.data[0].summary+' It is currently '+ currently.temperature+' degrees out.There is a '+currently.precipProbability +'% chance of rain.'+
        'Temperature high today is '+body.daily.data[0].temperatureHigh+' degrees. Temperature low today is '+body.daily.data[0].temperatureLow+' degrees.'
        callback(undefined,data)
    }

    })

}
module.exports=forecast