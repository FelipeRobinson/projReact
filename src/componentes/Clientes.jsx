import React from "react";
import { Table } from "react-bootstrap";

class Clientes extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ListaDeClientes : [
            {
                idClie: 1,
                cpfClie: "11111111111",
                nomeClie: "Ana Beatriz Cardoso",
                emailClie: "cardoso@gmail.com",
                dataNiverClie: "05/12/1298",
            },
            {
                idClie: 2,
                cpfClie: "11111111112",
                nomeClie: "Alexia Cardoso",
                emailClie: "cardosinho@gmail.com",
                dataNiverClie: "23/09/2009",
            },
            {
                idClie: 3,
                cpfClie: "11111111113",
                nomeClie: "Pedro Viniccius",
                emailClie: "vini@gmail.com",
                dataNiverClie: "12/12/1212",
            },
            ]
        }
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
                                <td>Atualizar       Excluir</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}

export default Clientes;