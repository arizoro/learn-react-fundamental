import { useState  } from "react"

function Search (props){
    const [result, setResult] = useState('') //result= nama variabel nya tdk dapat di ubh setResult= varibel yang dapat diubah
    const changeShearch = (e) => {
        setResult(e.target.value)
        // console.log(e.target.value)
    }
    
    const btnHendle = () => {
        props.onResultSearch(result)
        // console.log('test')
    }

    const btnKey = (e) => {
        if(e.key === "Enter"){
            btnHendle();
        }
    }



    return (
        <>
        <div>
        Cari posts : <input type="text" onChange={changeShearch} onKeyDown={btnKey} />
        <button onClick={btnHendle}  >Cari</button>
        </div>
        <small>Ditemukan {props.totalPost} data dengan key pencarian : {result} </small>
        </>
    )
}

export default Search