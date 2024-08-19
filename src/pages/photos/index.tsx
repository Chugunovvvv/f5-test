import { FC, useEffect, useState } from "react";
import { type Photos } from "../../types";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";
import PhotoItem from "../../components/photos";
import "./index.scss";

const Photos: FC = () => {
  const url = "https://jsonplaceholder.typicode.com/photos?limit=20";
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPhotos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
      }
      const data: Photos[] = await response.json();
      setPhotos(data);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const getItemSize = (index: number) => 120;
  //** Вариант для mui accordion списка  */
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const photo = photos[index];
    return (
      <div style={style}>
        <PhotoItem
          url={photo.url}
          title={photo.title}
          nestedTitle={"Вложенный аккордеон"}
          nestedContent={"Содержимое вложенного аккордеона"}
        />
      </div>
    );
  };
  return (
    <div className="photos">
      <h1 className="photos__title">Photo Album</h1>
      {/* {photos && (
        <ul className="photos__list">
          {photos.map((photo: Photos) => (
            <PhotoItem url={photo.url} title={photo.title} key={photo.id} />
          ))}
        </ul>
      )} */}
      {/* <div className="photo__list">
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="List"
              height={height}
              itemCount={photos.length}
              itemSize={400}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div> */}
      {
        //** Вариант для простого списка  */
      }
      {photos && (
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={photos.length}
              width={width}
              itemSize={getItemSize}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      )}
    </div>
  );
};

export default Photos;
