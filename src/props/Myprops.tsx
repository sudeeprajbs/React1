import a from "../babuji/1.jpg"
import b from "../babuji/2.jpeg"
import c from "../babuji/3.jpeg"

export const Huha:React.FC<{}>=()=>{

let Toe=[a,b,c]
return <>
<img height={'300px'} src={a} alt="" />
<img  height={'300px'} src={b} alt="" />
<img  height={'300px'} src={c} alt="" />
<h1>Using Loop In html</h1>

<Goli/>
{Goli()}

<h1>Using maped function</h1>
{Toe.map(()=>{
    return <Goli/>
})

}

</>

}


var Goli=()=>{
    return <>
    <img src={b} height={'400px'} alt="" />
    </>
}