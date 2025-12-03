import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(dto: RegisterDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
