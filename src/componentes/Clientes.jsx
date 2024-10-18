import React from "react";
import { Table, Button } from "react-bootstrap";

class Clientes extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ListaDeClientes : []
        }
    }

    // metodo do OBJ COMPONENT que monta um componente
    componentDidMount() {
        fetch("http://localhost:3333/Clientes")
        .then(resposta => resposta.json())
        .then(dadosVindoDaAPI => {
            this.state({ ListaDeClientes: dadosVindoDaAPI })
        })
    }

    // metodo do OBJ COMPONENT que desmonta um componente
    componentWillUnmount() {
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <th>Nº</th>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>email</th>
                    <th>Data Aniversário</th>
                    <th>Opções</th>
                </thead>
                <tbody>
                    {
                        this.state.ListaDeClientes.map((cliente) => 
                            <tr>
                                <td>{ cliente.idClie }</td>
                                <td>{ cliente.cpfClie }</td>
                                <td>{ cliente.nomeClie }</td>
                                <td>{ cliente.emailClie }</td>
                                <td>{ cliente.dataNiverClie }</td>
                                <td>
                                    <Button variant="primary">Atualizar</Button>
                                    <Button variant="danger">Excluir</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}

export default Clientes;