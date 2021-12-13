
export const getData = (url='') => 
(fetch(url)
.then(rsp => {
    if(!rsp.ok){
        throw Error("There was a problem fetching data.")
    }
    return rsp.json();
}))


export const postData = async (url = '', data = {}) => {
    const rsp = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return rsp.json();
}

