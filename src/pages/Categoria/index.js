import Header from "components/Header";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Categoria.module.css";
import Item from "components/Item";
import { decrementar, incrementar } from "store/reducers/contador";

const Categoria = () => {
  const { nomeCategoria } = useParams();
  const { categoria, item, contador } = useSelector((state) => {
    const regexp = new RegExp(state.busca, "i");
    return {
      categoria: state.categorias.find(
        (categoria) => categoria.id === nomeCategoria
      ),
      item: state.itens.filter((item) => item.categoria === nomeCategoria && item.titulo.match(regexp)),
      contador: state.contador,
    };
  });

  const dispatch = useDispatch();

  const estadoTotal = useSelector((state) => state);
  const apenasCategorias = useSelector((state) => state.categorias);
  const apenasItens = useSelector((state) => state.item);

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <h2>Nosso contador: {contador}</h2>
      <button
        onClick={() => {
          dispatch(incrementar());
        }}
      >
        Aumentar
      </button>
      <button
        onClick={() => {
          dispatch(decrementar());
        }}
      >
        diminuir
      </button>
      <div className={styles.itens}>
        {item?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categoria;
