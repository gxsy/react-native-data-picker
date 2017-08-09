package com.geezer.nativeaddressselector;

import com.geezer.nativeaddressselector.model.GeneralData;

public class DefaultAddressProvider implements AddressProvider {

    @Override
    public void provideProvinces(AddressReceiver<GeneralData> addressReceiver) {

    }

    @Override
    public void provideCitiesWith(String provinceId, AddressReceiver<GeneralData> addressReceiver) {

    }

    @Override
    public void provideCountiesWith(String cityId, AddressReceiver<GeneralData> addressReceiver) {

    }

    @Override
    public void provideStreetsWith(String countyId, AddressReceiver<GeneralData> addressReceiver) {

    }
}
