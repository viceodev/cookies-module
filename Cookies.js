let cookies = document.cookie.split(";");

let getCookie = function(query){
    
    let value = false;

    cookies.forEach((cookie) => {
        let splittedArray = cookie.split('=');
        let name = splittedArray[0];
        
        if(name == query){
            value = splittedArray[1];
        }
    })

    return value;
}


let setCookie =  function(name, value){
    cookies.forEach((cookie) => {
        let splittedArray = cookie.split('=');
        let current_cookie_name = splittedArray[0];
        
        if(name == current_cookie_name){
            document.cookie = `${current_cookie_name} =; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        }

        document.cookie = `${name}=${value}`
    })

    return true
}

let deleteCookie = function(name){
    cookies.forEach((cookie) => {
        let splittedArray = cookie.split('=');
        let current_cookie_name = splittedArray[0];
        
        if(name == current_cookie_name){
            document.cookie = `${current_cookie_name} =;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        }
    })

    return true
}

export {getCookie, setCookie, deleteCookie};