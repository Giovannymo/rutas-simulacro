export async function setData(URL,obj){
    try{
        const response = await fetch(`http://localhost:3000/${URL}`,{
            method: "POST",
            //Es tipo json
            headers: {'Content-Type': 'application/json'},
            //Convierto lo guardado en json
            body: JSON.stringify(obj)
        })

        if(response.ok){
            const jsonResponse = await response.json();
            const {nomRuta, id} = jsonResponse;
            console.log(nomRuta, id);
        }

    }catch(e){
        console.log(e);
    }



}