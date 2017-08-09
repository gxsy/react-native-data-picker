//
//  CitiesDataTool.h
//  ChooseLocation
//
//  Created by Sekorm on 16/10/25.
//  Copyright © 2016年 HY. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CitiesDataTool : NSObject
+ (instancetype)sharedManager;
-(void)requestGetData:(NSString *)locationStr;
-(NSArray *)QqueryAllRecordWithProviceID:(NSNumber *)ID;
-(NSArray *)QqueryAllRecordWithCityID:(NSNumber *)ID;
-(NSArray *)QqueryAllRecordWithTownID:(NSNumber *)ID;
-(NSArray *)QqueryAllRecordWithStreetID:(NSNumber *)ID;
- (NSString *)queryAllRecordWithAreaCode:(NSString *) areaCode;
@end
