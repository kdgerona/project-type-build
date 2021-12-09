import { MovementApprovalV4Entity } from '@dnamicro/gorentals-schema-core/build/src/movement_approval_v4';

export default interface IMovementApprovalV4 extends MovementApprovalV4Entity {
  attribute?: IMovementApprovalV4Attr;
}

export interface IMovementApprovalV4Attr {}
