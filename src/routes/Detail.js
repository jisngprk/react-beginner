import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState();
    const get_detail = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        

        console.log('aa', json.data);
        setDetailMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        get_detail();
    }, []);
    console.log(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    console.log(detailMovie);

    if (!loading) {
        console.log(detailMovie.title);
    }

    return <div>
        {loading ? <strong>Loading</strong> : <div>
            <h2>{detailMovie.title}</h2>
            <img src={detailMovie.medium_cover_image} />
            <h3>Description: {detailMovie.description_intro}</h3>
            <p>Description full: {detailMovie.description_full}</p>
        </div>}
    </div>;


    // return <div>
    //     <img src={detailMovie.medium_cover_image} alt={detailMovie.title} />
    //     <h2>
    //         <title>{detailMovie.title}</title>
    //     </h2>
    // </div>;
}

export default Detail;