//
//  CalendarManager.m
//  TestBridge
//
//  Created by wz on 2017/8/3.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"


@implementation CalendarManager

RCT_EXPORT_MODULE(RTCFFPayEvent);

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"FFPayResponse"];
}


- (void)calendarEventReminderReceived:(NSNotification *)notification
{
    NSString *eventCode = notification.userInfo[@"code"];
    NSString *eventMessasge = notification.userInfo[@"message"];
    [self sendEventWithName:@"FFPayResponse" body:@{@"code": eventCode, @"message": eventMessasge}];
}

@end
