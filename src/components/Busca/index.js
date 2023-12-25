import { useDispatch, useSelector } from "react-redux";
import "./Busca.css";
import { mudarBusca, resetarBusca } from "store/reducers/busca";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Busca() {
  
  // state.busca é uma string, definido no reducer
  const busca = useSelector(state => state.busca);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca())
  },[location.pathname, dispatch])

  return (
    <div className="busca">
      <input value={busca} onChange={(e) => dispatch(mudarBusca(e.target.value))} className="input" placeholder="O que você procura?" />
    </div>
  );
}
