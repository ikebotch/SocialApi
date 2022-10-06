import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ServiceModule } from './service/service.module';
import { SubServiceModule } from './sub-service/sub-service.module';
import { IncidentModule } from './incident/incident.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { SubServiceEntity } from './entities/sub-service.entity';
import { IncidentEntity } from './entities/incident.entity';
import { AuthEntity } from './entities/auth.entity';
import { ServiceEntity } from './entities/service.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ServiceModule,
    SubServiceModule,
    IncidentModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),

    // Database
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      logging: false,
      synchronize: process.env.CONSTANT_TYPEORM_SYNC === 'true',
      entities: [
        UserEntity,
        ServiceEntity,
        SubServiceEntity,
        IncidentEntity,
        AuthEntity,
      ],
      autoLoadEntities: true,
      retryAttempts: 5,
      retryDelay: 500,
    } as TypeOrmModuleOptions),
  ],
  // controllers: [AppController],
  // providers: [ {provide: APP_INTERCEPTOR,
  //   useClass: LoggingInterceptor}],
})
export class AppModule {}
