import React, { useEffect } from 'react';
import { getUsers } from '../actions/users';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
  } from '@chakra-ui/react'
  
const Users=(props)=>{
    useEffect(()=>{
        props.getUsers();
    },[])
    return(
        <div>
            <TableContainer p="10">
                <Table variant='simple'>
                    <TableCaption></TableCaption>
                    <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th >Username</Th>
                        <Th >Website</Th>
                        <Th >Phone</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {props.user.users.map((user, uid)=>{
                            return(
                                <Tr key ={uid}>
                                    <Td>{user.id}</Td>
                                    <Td>{user.name}</Td>
                                    <Td>{user.username}</Td>
                                    <Td>{user.website}</Td>
                                    <Td>{user.phone}</Td>
                                    <Td>
                                    <Link
                            
                            to={`/post/${user.id}`}
                            key={uid}
                        >
                            <Button onClick={()=>{

                }} colorScheme='teal' variant='link'>
                    Show Posts
                </Button>
                        </Link></Td>
                                </Tr>
                            )
                        })}
                    
                    </Tbody>
                    
                </Table>
            </TableContainer>
        </div>
    )
}
const  mapStateToProps =state=>({
    user: state.user
  });
export default connect(mapStateToProps, {getUsers})(Users);

