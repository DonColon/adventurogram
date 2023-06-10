import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";
import * as Device from "sap/ui/Device";


export default {

	createDeviceModel : () => {
		const deviceModel = new JSONModel(Device);
		deviceModel.setDefaultBindingMode(BindingMode.OneWay);
		return deviceModel;
	}

};