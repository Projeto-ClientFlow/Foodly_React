

export default interface Tema {
    id: number;
    descricao: string;
    produto?: Produto[] | null;
}