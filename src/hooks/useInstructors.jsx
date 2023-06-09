import { useEffect } from "react";
import { useState } from "react";


const useInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      fetch('instructors.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setInstructors(data);
          setLoading(false)
        })
        .catch((error) => {
          console.error("Error fetching instructors:", error);
        });
    }, []);
    return[instructors,loading]
}

export default useInstructors;