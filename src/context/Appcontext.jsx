
import { createContext,useState,useEffect } from 'react'
import { dummyCourses } from '../../src/assets/assets'
import { useNavigate } from "react-router-dom"; 

export const Appcontext= createContext();

export const AppContextProvider=(props)=>{
 
    const [allCoursesDetails, setAllCoursesDetails] = useState([]);
    const [isEducator,setEducator]=useState(true);
    const navigate = useNavigate();
    
    // Fetch All Courses 

    const fetchCourses = async()=>{
          setAllCoursesDetails(dummyCourses);     
    }

    //Average Star Rating Function
    

    useEffect(() => {
      fetchCourses();
    }, [])
    
    

    const value={
          navigate,allCoursesDetails,isEducator,setEducator
    }
    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}
