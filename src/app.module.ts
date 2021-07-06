import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SprintModule } from './sprint/sprint.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
      useCreateIndex: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    SprintModule,
    TeamModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
