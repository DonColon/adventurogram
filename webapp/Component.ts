import UIComponent from "sap/ui/core/UIComponent";
import models from "./model/models";


/**
 * @namespace com.dardan.rrafshi.adventurogram
 */
export default class AppComponent extends UIComponent
{
	public static metadata = {
		manifest: "json"
	};

	public init()
	{
		super.init();

		this.setModel(models.createDeviceModel(), "deviceModel");
		this.setModel(models.createConfigModel(), "configModel");
		this.setModel(models.createDataModel(), "dataModel");

		const router = this.getRouter()
		router.initialize();
	}
}
