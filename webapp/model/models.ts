import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";
import * as Device from "sap/ui/Device";
import UIComponent from "sap/ui/core/UIComponent";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import { ModelFormatter } from "./formatter";


export default {

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
	},

	createServiceModel: async (component: UIComponent) => {
		const serviceMetadata: any = {};

		for(const [ name, model ] of Object.entries(component.getOwnModels())) {
			if(model instanceof ODataModel) {
				const metaModel = model.getMetaModel();

				const data = await metaModel.requestData();
				const metadata = ModelFormatter.formatServiceMetadata(data);

				serviceMetadata[name] = metadata;
			}
		}

		const serviceModel = new JSONModel(serviceMetadata);
		serviceModel.setDefaultBindingMode(BindingMode.OneWay);
		return serviceModel;
	},

	createDeviceModel: () => {
		const deviceModel = new JSONModel(Device);
		deviceModel.setDefaultBindingMode(BindingMode.OneWay);
		return deviceModel;
	},

	createManifest: (component: UIComponent) => {
		const manifest = new JSONModel(component.getManifest());
		manifest.setDefaultBindingMode(BindingMode.OneWay);
		return manifest;
	}

};