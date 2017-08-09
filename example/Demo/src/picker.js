import { NativeModules, NativeAppEventEmitter, NativeEventEmitter, Platform } from "react-native";
const { NativeAddressSelected, EventEmitterManager } = NativeModules;

const NativeEvent = null;
if (Platform.OS == 'ios') {
  NativeEvent = new NativeEventEmitter(EventEmitterManager);
} else {
  NativeEvent = NativeAppEventEmitter;
}

const ADDRESS_SELECTED_EVENT_NAME = "OnAddressSelectedListener";


export default {

  /**
   *
   * @param {object} options
   * @param {string} options.pickerData : All of the picker information.
   * @param {string} options.selectedValue : Previously selected picker information.
   * @param {function} options.onPickerEvent : Select to complete the listener event
   *
   */
  init(options) {
    NativeAddressSelected.init(
      options.pickerData,
      options.selectedValue
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
