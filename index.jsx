import Cookies from 'js-cookies';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protectedroute = (props)=>{
    const {Components} = props
    const token = Cookies.getItem("jwtToken");
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(token===null){
            navigate("/login")
        }
    },[])
    
    return (
        <Components/>
    )
}



export default Protectedroute;
