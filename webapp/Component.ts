import UIComponent from "sap/ui/core/UIComponent";
import models from "./model/models";


/**
 * @namespace com.dardan.rrafshi.adventurogram
 */
export default class AppComponent extends UIComponent {

	public static metadata = {
		manifest: "json"
	};

	public init()
	{
		super.init();
		
		this.setModel(models.createDeviceModel(), "device");
		
		this.getRouter().initialize();
	}
}
