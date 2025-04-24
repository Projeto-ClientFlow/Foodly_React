import Categoria from "./Categoria";

export default interface Produto {
  id?: number|null;
  nomeProduto: string;
  descricaoProduto: string;
  precoProduto: number;
  tamanhoPorcao: string;
  categoria?: Categoria | null;
}