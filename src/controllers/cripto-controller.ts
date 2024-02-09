// import { Request, Response } from 'express';
// // import { User, UserNotFound } from './user.model'; // Adjust path based on your file structure
// // import { UserByIdFinder } from './user-finder.service'; // Adjust path based on your file structure

// interface UserGetControllerDependencies {
//   userByIdFinder: UserByIdFinder;
// }

// class UserGetController {
//   constructor(private readonly dependencies: UserGetControllerDependencies) {}

//   async run(req: Request, res: Response): Promise<void> {
//     const { id } = req.params;

//     try {
//       const user: User = await this.dependencies.userByIdFinder.run(id);
//       res.status(200).send(user);
//     } catch (error: unknown) { // Use 'unknown' for comprehensive error handling
//       if (error instanceof UserNotFound) {
//         res.status(404).send();
//       } else {
//         console.error('Unexpected error:', error); // Log full error for debugging
//         res.status(500).send();
//       }
//     }
//   }
// }

// export { UserGetController };
