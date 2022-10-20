import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {connect} from 'react-redux'


import {
    Box, 
    Text,
    Image,
    SimpleGrid,
    Flex
  } from '@chakra-ui/react'

import { getPosts } from '../actions/posts';

const Posts = (props)=>{
    let params = useParams();
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const u = props.user.users.filter(fi=>fi.id==params.id);
        console.log(u);
        if(u.length>0){
            setUser(u[0])
        }
        props.getPosts(params.id);
        return ()=>{
            setUser(null)
        }
    },[])
    return(
        <div>
            <Flex direction={"column"} wrap="normal" color='gray.600'>
                {user!==null&&<Box  flex="1"  p="10" bg='gray.50'>
                    <Box display='flex'  boxShadow='xs' p='6' rounded='md' bg='white'>
                        
                            <Image  boxSize='120px'
                            objectFit='cover' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='Dan Abramov' />

                            <Box display="flex" pl="6" flexDirection={"column "}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text fontSize='sm'>{user?.name}</Text>
                                <Text fontSize='sm'>{user?.username}</Text>
                            </Box>
                            
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text fontSize='sm'>{user?.email}</Text>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text fontSize='xs'>{user?.phone}</Text>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text fontSize='sm'>{user?.website}</Text>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text fontSize='sm'>{user?.company.name}</Text>
                            </Box>
                           
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text fontSize='xs'>{user?.address.city} {user?.address.street} {user?.address.suit}</Text>
                            </Box>
                            </Box>
                        
                            
                    </Box>
                </Box>}
  
                <Box  minWidth={"300px"} bg='gray.50'>
                <SimpleGrid
                    bg='gray.50'
                    columns={{ sm: 2, md: 3, lg: 3 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
                    color='gray.400'
                    >
                        {props.post.posts.map((post, pid)=>{
            return(
                <Box key ={pid} boxShadow='sm' p='6' rounded='md' bg='white'>
                     <Text noOfLines={[1,2]} color="gray.800" isTruncated>
                        {post.title}
                        </Text>
                        <Text noOfLines={[1,4]} isTruncated >
                            {post.body}
                        </Text>
                </Box>
            )
        })}
                    
                    </SimpleGrid>
                    
                </Box>
            </Flex>
        </div>
    )
}
const  mapStateToProps =state=>({
    post: state.post,
    user: state.user
  });
export default connect(mapStateToProps, {getPosts})(Posts);