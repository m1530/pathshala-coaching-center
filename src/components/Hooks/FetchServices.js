import { useEffect, useState } from 'react';
const useServices = () => {
    // fetch all services form services json file
    const [services, setServices] = useState([]);
    //console.log(products)
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices];
}
export default useServices;