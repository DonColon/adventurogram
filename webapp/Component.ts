import UIComponent from "sap/ui/core/UIComponent";
import { models } from "./model/models";


/**
 * @namespace com.dardan.rrafshi.adventurogram
 */
export default class AppComponent extends UIComponent
{
	public static metadata = {
		manifest: "json"
	};

	public async init()
	{
		super.init();

		const serviceModel = await models.createServiceModel(this);
		this.setModel(serviceModel, "serviceModel");

		this.setModel(models.createDeviceModel(), "deviceModel");
		this.setModel(models.createConfigModel(), "configModel");
		this.setModel(models.createDataModel(), "dataModel");
		this.setModel(models.createManifest(this), "manifest");

		const router = this.getRouter()
		router.initialize();
	}
}
