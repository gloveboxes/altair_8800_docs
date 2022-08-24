# Create Azure resources

We need to create the following resources:

1. Azure Event Hub that will receive data from Azure IoT Central.
1. Azure Stream Analytics Service to process and normalize the data from IoT Central.
1. Azure Storage to store the data.

For more information, refer to [Create a storage account](https://docs.microsoft.com/azure/storage/common/storage-account-create?tabs=azure-cli).

## Install the Azure CLI tools

If you haven't installed the Azure CLI tools then follow the [How to install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) guide to install the Azure CLI on your computer.

## Login into your Azure subscription

From a command prompt, run the following command to login to your Azure account.

```bash
az login
```

### Generate list of Azure locations

List the Azure Locations to determine the location closest to you.

```bash
az account list-locations -o table
```

### Create a resource group

The following command will create a resource group at location **westus**. Replace this location with your preferred location from the location list. A resource group is an administrative unit that keeps all related services together.

```bash
az group create --name ClimateMonitor --location westus
```

## Create an Azure Storage account

Climate data from the Altair emulator will be stored in an Azure Storage Account for analysis.

### Create an Azure Storage account environment variable

An Azure Storage Account must have a globally unique name. Append lower case characters to the end of **weatherstorage**. For example, a unique Azure Storage Account name could be **weatherstoragedng**.

### Create the Azure Storage Account

```bash
az storage account create -n weatherstorage<append_unique_letters> -g ClimateMonitor --sku Standard_LRS
```

## Get the Azure Storage Account connection string

```bash
az storage account show-connection-string -n <REPLACE_WITH_NAME_OF_STORAGE_ACCOUNT_CREATED> -g ClimateMonitor 
```

Save the Azure Storage Account connection string somewhere safe as you'll need it when exporting data from IoT Central.

## Create an Azure Storage Account Container

```bash
az storage container create --name weather --account-name  weatherstorage<append_unique_letters> --connection-string "REPLACE_WITH_STORAGE_ACCOUNT_CONNECTION_STRING"
```

<!-- ## Create a namespace environment variable

Several resources to be created must be globally unique. Create an environment variable to be appended to resource names to make them unique. For example you could use the first part of your email address, a nickname, random numbers.

From the command prompt, create an environment variable. This environment variable is used for creating Azure resources. The text you choose must be made up of **lowercase** letters or numbers only.

```bash
export APPEND=<email, nickname, random numbers>
``` -->

<!-- ## Create a weather Event Hub namespace

From the command prompt, create an Event Hub namespace. Note, this command could take up to **five minutes** to complete.

```bash
az eventhubs namespace create --name weather-eh-$APPEND --resource-group ClimateMonitor
```

### Create a weather Event Hub

Create an Event Hub in the Event Hub namespace you just created.

```bash
az eventhubs eventhub create --name weather-hub --resource-group ClimateMonitor --namespace-name weather-eh-$APPEND
```

### Create an weather Event hub access policy

```bash
az eventhubs eventhub authorization-rule create --eventhub-name weather-hub --name iot-central --namespace-name weather-eh-$APPEND --resource-group ClimateMonitor --rights Send
``` -->


<!-- ## Create an Azure Stream Analytics Job

For more information, refer to the [Azure Stream Analytics documentation](https://docs.microsoft.com/azure/stream-analytics/)

```bash
az stream-analytics job create --resource-group ClimateMonitor --name weather-asa
```

## List the resources you created

Run the following command, to display the services you created in the ClimateMonitor resource group.

```bash
az resource list --resource-group ClimateMonitor -o table
```

There should be three resources listed

- weather-asa
- weather-eh
- weatherstg

## Get the Event Hub connection string

1. From the command line, run the following command to get the Event Hub primary connection string.

    ```bash
    az eventhubs eventhub authorization-rule keys list --resource-group ClimateMonitor --namespace-name weather-eh-$APPEND --eventhub-name weather-hub --name iot-central --query primaryConnectionString
    ```

1. Save the weather-hub primary connection string somewhere safe as you'll need it when exporting data from IoT Central. -->
