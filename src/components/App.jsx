import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from '../helpers/pixabayApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(totalHits);

  useEffect(() => {
    setIsLoading(true);
    fetchImages(query, page)
      .then(data => {
        setImages(images => {
          console.log(images);
          if (page === 1) {
            return data.hits;
          } else {
            return [...images, ...data.hits];
          }
        });
        setTotalHits(totalHits => {
          if (page === 1) {
            return data.totalHits - data.hits.length;
          } else {
            return totalHits - data.hits.length;
          }
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const handleSubmitForm = query => {
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmitForm} />

      <ImageGallery images={images} />

      {!!totalHits &&
        (!isLoading ? <LoadMore onLoadMore={handleLoadMore} /> : <Loader />)}
    </>
  );
}
