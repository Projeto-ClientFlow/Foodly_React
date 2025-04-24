import Categoria from "./Categoria";

export default interface Produto {
  id?: number|null;
  nome: string;
  descricao: string;
  preco: number;
  tamanhoPorcao: string;
  categoria?: Categoria | null;
}