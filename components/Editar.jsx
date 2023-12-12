import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"
import { FaPen } from "react-icons/fa6";
import axios from "axios";
import Formulario from "./Formulario";

function Editar({id}) {

    const [show, setShow] = useState(false)
    const [funcionario, setFuncionario] = useState([])
    
    // function editarDados(){
    //     axios.put("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
    //     .then(() => location.reload())
    //     .catch(() =>{
    //         console.log("Erro ao editar.")
    //     })
    // }

    useEffect(() =>{
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then((resposta) =>{
            setFuncionario(resposta.data)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}>
                <FaPen size={20} className="text-success"/>
            </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario funcionario={funcionario} setShow={setShow}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editar