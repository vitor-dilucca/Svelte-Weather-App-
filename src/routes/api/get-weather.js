export function get(event){
    console.log(event);
    return {
        status:200,
        body:{
            location:{
                country:'Argentina',
                localtime:'2020-03-04 17:00',
                name:'Buenos Aires'
            }
        }
    }
}