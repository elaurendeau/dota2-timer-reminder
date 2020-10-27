import { EventTimeTypeEnum } from "./server/enums/events";
import { TimedEventModel } from "./server/model/timed-event-model";

export interface ISettings {
  customEvents: TimedEventModel[]
}

export const settings: ISettings = {
  customEvents: [
    { recurring: true, length: 300, notificationLength: 25, name: "Bounty Runes", eventTimeType: EventTimeTypeEnum.Relative, soundFileName: "bounty.wav" },
    { recurring: true, length: 600, notificationLength: 45, name: "Shrines exp event", eventTimeType: EventTimeTypeEnum.Relative, soundFileName: "outpost.wav" }
  ]
};
