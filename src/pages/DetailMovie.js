import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Components
import Detail from "../components/cardDetail";
import Modal from "../components/modal";

export default function DetailMovie() {
  let { detailId } = useParams();
  const [data, setData] = useState(detailId);
  const [detail, setDetail] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Modal
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://imdb8.p.rapidapi.com/title/get-plots",
          {
            params: { tconst: data },
            headers: {
              "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
              "X-RapidAPI-Key": "ee4ea94c99mshb4dcf3716227e3fp1fd465jsna385dd04617c", // Ganti dengan kunci API yang valid
            },
          }
        );

        if (response.status === 200) {
          setDetail(response.data);
          setisLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    if (!isLoaded) {
      fetchDetail();
    }
  }, [data, isLoaded]); // Tambahkan dependensi data dan isLoaded ke useEffect

  const handleClick = () => {
    setModalShow(!modalShow);
    setModalItem(detail); // Menggunakan detail sebagai item
  };

  return (
    <main>
      <div className="detail-container">
        {!detail || isLoading ? (
          <p>Loading...</p>
        ) : (
          <Detail data={detail} onClick={handleClick} />
        )}
      </div>
      <Modal
        data={modalItem}
        isShow={modalShow}
        onCancel={() => setModalShow(false)}
      />
    </main>
  );
}
