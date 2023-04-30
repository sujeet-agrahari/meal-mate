import { User } from '../user.entity';

export type AuthenticatedRequest = Request & { user: User };
