import ImageContent from "sap/m/ImageContent";
import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
import Context from "sap/ui/model/Context";
import TileContent from "sap/m/TileContent";
import GenericTile from "sap/m/GenericTile";


/**
 * @namespace com.dardan.rrafshi.adventurogram.controller
 */
export default class Main extends BaseController
{
	public createServiceTiles(id: string, context: Context)
	{
		const serviceID = context.getProperty("id"),
			title = context.getProperty("title"),
			subtitle = context.getProperty("subtitle"),
			icon = context.getProperty("icon");
	
		const imageContent = new ImageContent({
			src: icon
		});
	
		const tileContent = new TileContent();
		tileContent.setContent(imageContent);
		
		const tile = new GenericTile(serviceID, {
			header: title,
			subheader: subtitle
		});
		tile.addTileContent(tileContent);
		tile.attachPress(this.onServiceSelect, this);
		
		return tile;
	}

	public onServiceSelect(event: Event)
	{
		const serviceID = event.getParameter("id");
		this.navigateTo(serviceID);
	}
}
