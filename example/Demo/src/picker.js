import { NativeModules, NativeAppEventEmitter, NativeEventEmitter, Platform } from "react-native";
const { NativeAddressSelected } = NativeModules;

const NativeEvent = null;
if (Platform.OS == 'ios') {
  NativeEvent = new NativeEventEmitter(IOSEventName);
} else {
  NativeEvent = NativeAppEventEmitter;
}

const ADDRESS_SELECTED_EVENT_NAME = "OnAddressSelectedListener";

export default {
  init(options) {
    NativeAddressSelected.init(
      options.areas,
      options.selectedArea
    );
    this.listener && this.listener.remove();
    this.listener = NativeEvent.addListener(
      ADDRESS_SELECTED_EVENT_NAME,
      options.onPickerEvent
    );
  },
  show() {
    NativeAddressSelected.show();
  }
};
