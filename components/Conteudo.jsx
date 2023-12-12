function Conteudo({children}){
    return(
        <div className={styleContainer}>
            {children}
        </div>
    )
}

const styleContainer = "mt-5 bg-white p-5 rounded shadow container"

export default Conteudo