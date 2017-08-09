import { NativeModules, NativeAppEventEmitter } from "react-native";
const { NativeAddressSelected } = NativeModules;

const ADDRESS_SELECTED_EVENT_NAME = "OnAddressSelectedListener";

export default {
  init(options) {
    NativeAddressSelected.init(
      options.areas,
      options.selectedArea
    );
    this.listener && this.listener.remove();
    this.listener = NativeAppEventEmitter.addListener(
      ADDRESS_SELECTED_EVENT_NAME,
      options.onPickerEvent
    );
  },
  show() {
    NativeAddressSelected.show();
  }
};
