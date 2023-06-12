import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";
import * as Device from "sap/ui/Device";


export default {

	createDeviceModel: () => {
		const deviceModel = new JSONModel(Device);
		deviceModel.setDefaultBindingMode(BindingMode.OneWay);
		return deviceModel;
	},

	createConfigModel: () => {
		const configModel = new JSONModel({
			serviceTiles: [{
				id: "customer-service",
				title: "Customer Service",
				subtitle: "Maintain Customer Information",
				icon: "sap-icon://edit",
			}]
		});

		configModel.setDefaultBindingMode(BindingMode.OneWay);
		return configModel;
	},

	createDataModel: () => {
		const dataModel = new JSONModel({

		});

		dataModel.setDefaultBindingMode(BindingMode.TwoWay);
		return dataModel;
	}

};