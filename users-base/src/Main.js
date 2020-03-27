import React from "react"

export default function Main(data){
    // data es un array, se trabaja cada dato con map, se carga para una tabla
    const dataCargada=   <ul id="column-data"> {data.map(a=>{
                        return (<ul id="column-line" ><li>{a.name}</li><li>{a.email}</li></ul>)
                        })}</ul>;
    return (<main>
        {dataCargada}
    </main>)

}