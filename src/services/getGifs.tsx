


const APIKey = '2LYom4zQFJcxCyLAqExR3npiqm9K8Hk1';

export default function getGifs(keyword: string = 'morty'):any {

    const APIUrl = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(APIUrl).then(res => res.json()
    ).then(response => {
        const { data } = response
        const gifs = data.map((image: { images: any; title?: any; id?: any; url?: any;}) => {
            const url = image.images.downsized_medium.url;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { images, title, id } = image;
            return { title, id, url }
        })
        return gifs;
        //setGifs(gifs);
    });
}
