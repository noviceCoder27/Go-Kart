import UserCredentials from "../navbar/UserCredentials"

interface UserCred {
    credentialsPopup: boolean,
    setCredentialsPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp = ({credentialsPopup,setCredentialsPopup}: UserCred) => {
  return (
    <UserCredentials credentialsPopup = {credentialsPopup} setCredentialsPopup = {setCredentialsPopup} heading = {'Sign Up'} para = {"Already have an account"}/>
  )
}

export default SignUp
