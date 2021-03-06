/* tslint:disable */
import {
  Account,
  Room
} from '../index';

declare var Object: any;
export interface RoomAccountInterface {
  id?: number;
  accountId?: number;
  roomId?: number;
  createdAt: Date;
  updatedAt: Date;
  account?: Account;
  room?: Room;
}

export class RoomAccount implements RoomAccountInterface {
  id: number = 0;
  accountId: number = 0;
  roomId: number = 0;
  createdAt: Date = new Date(0);
  updatedAt: Date = new Date(0);
  account: Account = null;
  room: Room = null;
  constructor(data?: RoomAccountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RoomAccount`.
   */
  public static getModelName() {
    return "RoomAccount";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RoomAccount for dynamic purposes.
  **/
  public static factory(data: RoomAccountInterface): RoomAccount{
    return new RoomAccount(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'RoomAccount',
      plural: 'room-accounts',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
        accountId: {
          name: 'accountId',
          type: 'number'
        },
        roomId: {
          name: 'roomId',
          type: 'number'
        },
        createdAt: {
          name: 'createdAt',
          type: 'Date'
        },
        updatedAt: {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account'
        },
        room: {
          name: 'room',
          type: 'Room',
          model: 'Room'
        },
      }
    }
  }
}
