import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./compomentes/Menu";
import Rodape from "compomentes/Rodape";
import PaginaPadrao from "compomentes/PaginaPadrao";
import Post from "paginas/Post";



export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<SobreMim />} />
          <Route path='Posts/:id' element={<Post />} />

        </Route>

        <Route path='*' element={<div> <h2>Página não encontrada</h2> </div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

