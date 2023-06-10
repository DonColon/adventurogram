import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import AppComponent from "../Component";
import Model from "sap/ui/model/Model";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Router from "sap/ui/core/routing/Router";
import History from "sap/ui/core/routing/History";


/**
 * @namespace com.dardan.rrafshi.adventurogram.controller
 */
export default abstract class BaseController extends Controller
{
	public getOwnerComponent(): AppComponent
	{
		return super.getOwnerComponent() as AppComponent;
	}

	public getRouter() : Router
	{
		return UIComponent.getRouterFor(this);
	}

	public getResourceBundle(): ResourceBundle | Promise<ResourceBundle>
	{
		const model = this.getOwnerComponent().getModel("i18n") as ResourceModel;
		return model.getResourceBundle();
	}

	public getModel(name?: string) : Model
	{
		return this.getView().getModel(name);
	}

	public setModel(model: Model, name?: string) : BaseController
	{
		this.getView().setModel(model, name);
		return this;
	}

	public navTo(name: string, parameters?: object, replace?: boolean)
	{
		this.getRouter().navTo(name, parameters, undefined, replace);
	}

	public onNavBack()
	{
		const previousHash = History.getInstance().getPreviousHash();

		if (previousHash !== undefined) {
			window.history.go(-1);
		} else {
			this.getRouter().navTo("main", {}, undefined, true);
		}
	}
}
