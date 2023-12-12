import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

function Excluir({id}) {

    const [show, setShow] = useState(false)
    
    function excluirDados(){
        axios.delete("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then(() => location.reload())
        .catch(() =>{
            console.log("Erro ao excluir.")
        })
    }

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}>
                <RiDeleteBin6Line size={20} className="text-danger"/>
            </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Excluir</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>Deseja realmente excluir?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={excluirDados} variant="danger">Excluir</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Excluir