// import { Cripto } from "../../dto/cripto";
// import { CriptoRepository } from "../../repositories/cripto-repository";

// export class FindByIdCripto {
//     constructor( private readonly criptoRepository: CriptoRepository){}

//     async run(criptoId: number): Promise<Cripto | null>{
//         const cripto = await this.criptoRepository.getById(criptoId);
//         if(cripto?.id){
//             return new Cripto(cripto.id, cripto?.name, cripto?.currentPrice, cripto?.previousPrice)
//         }
//     }
// }
