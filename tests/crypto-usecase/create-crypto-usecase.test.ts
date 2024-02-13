// import { CreateCryptoUseCase } from "../../src/crypto/application/create-usecase/create-crypto-usecase";
// import { CryptoRepository } from "../../src/crypto/domain/crypto-repository";
// import { CreatePriceUseCase } from "../../src/price/application/create-usecase/create-price-usecase";
// // import { Price } from "../../src/price/domain/price";
// import { PriceRepository } from "../../src/price/domain/price-repository";

// describe("CreateCryptoUseCase", () => {
//   const createdCrypto = {
//     name: "Bitcoin",
//     currentPrice: 50000,
//     previousPrice: undefined,
//     id: "1",
//   };

//   const updatedCrypto = {
//     name: "Bitcoin",
//     currentPrice: 60000,
//     previousPrice: 50000,
//     id: "1",
//   };

//   const mockGetAllCrypto = [
//     {
//       name: "Bitcoin",
//       currentPrice: 50000,
//       previousPrice: undefined,
//       id: "1",
//     },
//   ];

//   const mockCryptoRepository: CryptoRepository = {
//     getByName: jest.fn().mockImplementation(async (name: string) => null),
//     create: jest.fn().mockResolvedValue(createdCrypto),
//     update: jest.fn().mockResolvedValue(updatedCrypto),
//     getAll: jest.fn().mockResolvedValue(mockGetAllCrypto),
//     getById: jest.fn().mockImplementation(async (id: number) => createdCrypto),
//   };

//   const createPryceDto = {
//     price: "50000",
//     cryptoId: 1,
//   };

//   const mockPricesByCryptoId = [
//     {
//       price: 42000,
//       cryptoId: 1,
//       createdAt: "2024-02-12 19:26:48.541",
//       id: 1,
//     },
//     {
//       price: 34000,
//       cryptoId: 1,
//       createdAt: "2024-02-12 20:12:36.568",
//       id: 21,
//     },
//   ];

//   const mockLastPrice = {
//     price: 34000,
//     cryptoId: 1,
//     createdAt: "2024-02-12 20:12:36.568",
//     id: 21,
//   };

//   const mockPriceRepository: PriceRepository = {
//     create: jest.fn().mockResolvedValue(createPryceDto),
//     getPricesByCryptoId: jest.fn().mockResolvedValue(mockPricesByCryptoId),
//     getLastPriceFromACrypto: jest
//       .fn()
//       .mockImplementation(async (id: number) => mockLastPrice),
//   };

//   const mockCreatePriceUseCase = new CreatePriceUseCase(mockPriceRepository);

//   const createCryptoUseCase = new CreateCryptoUseCase(
//     mockCryptoRepository,
//     mockCreatePriceUseCase
//   );

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should create a new crypto successfully", async () => {
//     const createCryptoDto = {
//       name: "Bitcoin",
//       currentPrice: 50000,
//     };

//     const result = await createCryptoUseCase.run(createCryptoDto);
//     expect(result).toBe("Crypto created successfully");
//     // expect(mockCryptoRepository.getByName).toHaveBeenCalledWith('Bitcoin');
//     expect(mockCryptoRepository.create).toHaveBeenCalledWith(
//       expect.objectContaining({
//         name: "Bitcoin",
//         currentPrice: 50000,
//       })
//     );
//     expect(mockCreatePriceUseCase.run).toHaveBeenCalledWith({
//       price: 50000,
//       cryptoId: 1,
//     });
//   });
// });
