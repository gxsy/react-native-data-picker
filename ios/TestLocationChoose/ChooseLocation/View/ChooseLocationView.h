//
//  ChooseLocationView.h
//  ChooseLocation
//
//  Created by Sekorm on 16/8/22.
//  Copyright © 2016年 HY. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ChooseLocationView : UIView

@property (nonatomic, copy) NSString * address;

@property (nonatomic, copy) void(^chooseFinish)();

@property (nonatomic,copy) NSString * areaCode;

@property (nonatomic,strong)NSMutableArray *backArr;//返回数据数组

@property (nonatomic,strong)NSMutableDictionary *totalDict;//返回数据数组
@end
