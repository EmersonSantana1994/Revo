import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao: string
    public tipo: string
    public postagem: Postagem[]
}