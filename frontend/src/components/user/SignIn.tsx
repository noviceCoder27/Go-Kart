import UserCredentials from "../navbar/UserCredentials"

interface UserCred {
    credentialsPopup: boolean,
    setCredentialsPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const SignIn = ({credentialsPopup,setCredentialsPopup}: UserCred) => {
    
  return (
    <UserCredentials credentialsPopup = {credentialsPopup} setCredentialsPopup = {setCredentialsPopup} heading = {'Sign In'} para = {"Don't have an account"}/>
  )
}

export default SignIn
