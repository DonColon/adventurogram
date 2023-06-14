export namespace formatter
{   
    export function formatServiceMetadata(data: any)
    {
        const metadata: any = {};

        for(const [ entityName, entity ] of Object.entries(data)) {
            const serviceEntity: any = entity;

            if(serviceEntity.$kind === "EntityType") {
                const entityType: any = {
                    keys: serviceEntity.$Key || [],
                    properties: [],
                    navigationProperties: []
                };

                for(const [ propertyName, property ] of Object.entries(serviceEntity)) {
                    let serviceProperty: any = property;

                    if(!propertyName.includes("$")) {
                        const propertyType = serviceProperty.$kind;
                        serviceProperty = formatServiceProperty(propertyName, serviceProperty);

                        if(propertyType === "Property") {
                            entityType.properties.push(serviceProperty);
                        }
                        else if(propertyType === "NavigationProperty") {
                            entityType.navigationProperties.push(serviceProperty);
                        }
                    }
                }

                const parts = entityName.split(/\./),
                    name = parts.at(parts.length - 1);

                metadata[name] = entityType;
            }
        }

        return metadata;
    }

    function formatServiceProperty(propertyName: string, property: any)
    {
        const newProperty: any = {};

        delete property.$kind;
        for(const [ key, value ] of Object.entries(property)) {
            let name = key.replace("$", "");
            name = name.charAt(0).toLowerCase() + name.slice(1);
            
            newProperty[name] = value;
        }

        newProperty.name = propertyName;
        return newProperty;
    }
}