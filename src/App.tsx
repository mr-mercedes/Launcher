import React, {useEffect, useState} from 'react';
import styles from './App.module.scss'
import News from "./components/News/News";

const App = () => {
    const [news, setNews] = useState<TPhoto[]>([])
    const getData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
      try {
          return await data.json();
      } catch (e) {
          throw Error()
      }
    }
    useEffect(() => {
        const data = getData();
        data.then(resp => setNews(resp.splice(6)))
    }, []);
    return (
        <div className={styles.wrapper}>
            <h2>Новости и Обновления</h2>
            <div className={styles.news}>
                {news.map(ne => {
                    return (
                        <News item={ne}/>
                    )
                })}
            </div>

        </div>
    );
}

export default App;


export type TPhoto = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
