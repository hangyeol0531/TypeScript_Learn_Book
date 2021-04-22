export const init = (callback : () => void):void =>{
    console.log('deafult initialzation finisehed')
    callback()
    console.log('all initialization finished')
}