# Export data from Azure IoT Central

Follow these steps to export data from Azure IoT Central.

1. Navigate to the [Azure IoT Central web portal](https://azure.microsoft.com/services/iot-central?azure-portal=true).
1. Select **Data export** from the sidebar menu.
1. Select **+ New export**.

## Create a data filter

1. Name the data export **Weather**.
1. Select **+ Filter**.
1. Select **Device Template** from the **name** dropdown list.
1. Select the **Climate Monitor** from the device template dropdown list.
1. Select **+ Message property filter**.
1. Name the filter **type**. Note, this must be lowercase.
1. Select the **Equals** operator
1. Set the value to **custom**. Again, this must be lowercase.

## Create an enrichment

1. Select **+ Property**.
1. Set the key to **deviceName**. Note the case of the letters.
1. Select **Device name** value from the dropdown list.

## Create a destination

1. In the **Destinations** section on the data export form, select **create a new one**

1. Name the destination **WeatherStg**
1. Select **Azure Blob Storage** from the Destination type.
1. Select authorization type **Connection string**.
1. Paste the weather storage account connection string
1. Name the container **weather**
1. Select **Create**.

## Save the Data export

1. Select **Save**.

    This will start the data exporter.
