import { Model } from 'mongoose';
import { User } from './user.schema';
import { RegisterDto } from './dto/register.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    register(dto: RegisterDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
