import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";


/**
 * @namespace com.dardan.rrafshi.adventurogram.controller
 */
export default class Main extends BaseController
{
	public sayHello()
	{
		MessageBox.show("Hello World!");
	}
}
