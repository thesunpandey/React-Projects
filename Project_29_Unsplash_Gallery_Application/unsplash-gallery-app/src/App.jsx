/* eslint-disable */

import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Photo from "./Photo/Photo.jsx";

const clientID = `?client_id=2H6jkmvU_RhO8RPpH49iIw78fwcoSXJp_ulrfLSyUdM`;

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false); //loading
  const [photos, setPhotos] = useState([]); //photos
  const [page, setPage] = useState(1); //page
  const [query, setQuery] = useState(""); ///query

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhoto) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhoto, ...data.results];
        } else {
          return [...oldPhoto, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchImages();
  };
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;