import Header from "components/Header";
import React from "react";
import relogio from "assets/inicial.png";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  let navigate = useNavigate();

  // O useSelector esepra uma arrow function, e essa arrow function
  // recebe um estado
  // Esse state.categorias é o nome dado no próprio reducer que eu dei no arquivo index.js do store.
  const categorias = useSelector(state => state.categorias);

  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil"
        imagem={relogio}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
