//
//  ProvinceModel.h
//  TestLocationChoose
//
//  Created by wz on 2017/8/7.
//  Copyright © 2017年 wz. All rights reserved.
//

#import "BaseModel.h"

@interface ProvinceModel : BaseModel
@property (nonatomic,copy) NSNumber * parentId;
@property (nonatomic,copy) NSNumber * areaId;
@property (nonatomic,copy) NSString * areaName;
@property (nonatomic,assign) BOOL  isSelected;
@end
