import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApplicationLogger } from './common/logger/logger.service';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.useLogger(app.get(ApplicationLogger));
  await app.listen(environment.httpPort);
  ApplicationLogger.log(
    `Application started on port ${environment.httpPort}`,
    NestApplication.name);
}
bootstrap();
