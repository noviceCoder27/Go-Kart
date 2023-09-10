import { Flex, Modal, PasswordInput, TextInput } from '@mantine/core';
import { useDisclosure,useMediaQuery } from '@mantine/hooks';
import {useForm} from '@mantine/form';
import { useEffect } from 'react';

interface UserCred {
    credentialsPopup: boolean,
    setCredentialsPopup: React.Dispatch<React.SetStateAction<boolean>>
    heading: string,
    para: string
}


const UserCredentials = ({credentialsPopup,setCredentialsPopup,heading,para}: UserCred) => {

    const [opened, { open, close }] = useDisclosure(credentialsPopup);
    useEffect(() => {
        if(credentialsPopup) {
            open();
        }
    },[credentialsPopup,open]);

    const form = useForm({
        initialValues: {
          email: '',
          name: '',
          password: ''
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          name: (value) => (value.length > 5 ? null : 'Enter a proper name'),
          password: (value) => (value.length > 5 ? null : 'Enter a better password')
        },
      });

    const enable = useMediaQuery("(max-width: 768px)")

    const closePopup = () => {
        setCredentialsPopup(false);
        close();
    }

    return (
        <Flex >
            <Modal 
            size= "calc(40vw)"
            fullScreen = {enable}
            opened={opened} 
            onClose={closePopup}
            sx = {{fontFamily: "sans-serif"}}
            radius="lg"
            >
                <form style = {{padding: '2rem 1rem'}}>
                    <Flex direction="column" >
                        <h2 style = {{marginTop: "0"}}>{heading}</h2>
                        <TextInput 
                        mt="md" 
                        label="Name" 
                        placeholder="Enter Your Name" 
                        {...form.getInputProps('email')}/>   
                        <TextInput 
                        mt="md" 
                        label="Email" 
                        placeholder="Enter Your Email" 
                        {...form.getInputProps('email')}/>   
                        <PasswordInput
                        mt="md"   
                        label="Password"
                        placeholder="Enter Your Password"
                        {...form.getInputProps('password')}/>  
                        <button style = {{marginTop: "2rem", marginRight: "auto", background: "#0AAD0A",color:"white",border: "none", padding: "0.8rem 1.5rem",fontSize: "120%",borderRadius: "8px",cursor: "pointer"}}>{heading}</button>
                        <p style = {{marginTop: "3rem", marginLeft: "auto",marginRight: "auto"}}>{para}? <span style = {{color: "#0AAD0A",cursor: "pointer"}}>{heading === 'Sign In' ? 'Sign Up' : 'Sign In'}</span></p> 
                    </Flex>
                </form>
                    
            </Modal>
        </Flex>
    )
}

export default UserCredentials
