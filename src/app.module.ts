import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: '.env',
        isGlobal: true
    }
  ),
  MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
