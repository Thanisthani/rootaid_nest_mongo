import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { logindto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService : JwtService
    ) { }


    async validateUser(loginDTO : logindto) {
        const user = await this.userService.findUserByEmail(loginDTO.email);

        if (user)
        {
            if (user.password == loginDTO.password)
            {
                const payload = { email: user.email, id: user.id, name:user.name };
                const token = this.jwtService.sign(payload);
            
            return {
                access_token: token,
                user,
                message:"Sucessfully Login"
            };
            }

            return {
                user:null,
                message:"Incorrect password"
            };
            
        }
        return {
            user:null,
            message:"User not exists"
        };


    }
    
}
