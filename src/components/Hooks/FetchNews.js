import { useEffect, useState } from 'react';
const useNews = () => {
    // fetch news from news json file
    const [news, setNews] = useState([]);
    //console.log(products)
    useEffect(() => {
        fetch('./news.JSON')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);
    return [news, setNews];
}
export default useNews;