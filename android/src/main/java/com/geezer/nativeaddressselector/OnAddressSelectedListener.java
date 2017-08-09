package com.geezer.nativeaddressselector;


import com.geezer.nativeaddressselector.model.GeneralData;

public interface OnAddressSelectedListener {
    void onAddressSelected(GeneralData province, GeneralData city, GeneralData county, GeneralData street);
}
