import logo from "../imagens/react.jpg"

function Titulo({data}) {
    let nome = "Gabrielle Soares"
    let caminho = "https://pt.wikipedia.org/wiki/React_%28JavaScript%29"
    return (
        <div> 
            <img src= { logo } width={150}></img>
            <h2>Seja bem-vinda, { nome }</h2>        
            <p>
                <h4>Data do último acesso { data ? data: "01/01/2100"} </h4>
            </p>     
        </div>

    )

}    

export default Titulo
