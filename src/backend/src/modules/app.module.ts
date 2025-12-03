import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";
import { HealthController } from './health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const uri = config.get<string>("MONGODB_URI");
        if (!uri) {
          throw new Error(
            "MONGODB_URI is not set. Please configure it in .env"
          );
        }
        const dbName = config.get<string>("MONGODB_DB_NAME");
        return {
          uri,
          dbName,
        };
      },
    }),
  controllers: [HealthController],
    UserModule,
  ],
})
export class AppModule {}
