import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://authify-ms.romalice.com/user`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, firstName, lastName) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
    }

    const getData = (email) => {
        axios.get(`https://authify-ms.romalice.com/`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (email) => {
        axios.delete(`https://authify-ms.romalice.com/`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            {/* <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row class="text-white">
                                <Table.Cell  class="text-white">{data.telephone}</Table.Cell>
                                <Table.Cell  class="text-white">{data.first_name}</Table.Cell>
                                <Table.Cell  >{data.last_name}</Table.Cell>
                                
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.id, data.firstName, data.lastName)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.email)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table> */}
        </div>
    )
}