//
//  CalendarManager.h
//  TestBridge
//
//  Created by wz on 2017/8/3.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>


@interface CalendarManager : RCTEventEmitter <RCTBridgeModule>
- (void)calendarEventReminderReceived:(NSNotification *)notification;
@end
