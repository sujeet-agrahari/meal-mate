import { Injectable } from '@nestjs/common';
import {
  DataSource,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { User } from './user.entity';
import { PasswordService } from './password.service';

@Injectable()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(
    datasource: DataSource,
    private readonly passwordService: PasswordService,
  ) {
    datasource.subscribers.push(this);
  }
  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>): Promise<void> {
    if (event.entity.password) {
      event.entity.password = await this.passwordService.generateHash(
        event.entity.password,
      );
    }
  }

  async beforeUpdate(event: UpdateEvent<User>): Promise<void> {
    if (event.entity.password) {
      event.entity.password = await this.passwordService.generateHash(
        event.entity.password,
      );
    }
  }
}
