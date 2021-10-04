import { useEffect, useState } from 'react';
const useServices = () => {
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