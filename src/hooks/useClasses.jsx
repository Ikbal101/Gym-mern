import { useEffect } from "react";
import { useState } from "react";


const useClasses = () => {
    const [classData, setClassData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      // Fetch class data from classes.json
      fetch("classes.json")
        .then((response) => response.json())
        .then((data) => {
            setClassData(data);
            setLoading(false)
        })
        .catch((error) => console.log(error));
    }, []);
    return[classData,loading]
}

export default useClasses;