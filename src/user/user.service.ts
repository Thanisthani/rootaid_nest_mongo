import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
    User,
    UserDocument
} from 'database/models/user.schema';
import { Model } from 'mongoose';
import { userCreatedto } from './dto/userCreate.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel : Model<UserDocument>
    ) { }

     // createUser

     createUser(createUserDTO:userCreatedto): Promise<User> {
        const newUser = new this.userModel(createUserDTO);

        return newUser.save();
    
     }
    
     // get by email id

     findUserByEmail(email: string)
     {
         return this.userModel.findOne(
             {
             email
             }
         );
     }  

}
