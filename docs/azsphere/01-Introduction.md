---
sidebar_position: 1
---

# Introduction



## Altair emulator version 2

This is version 2 of the Azure Sphere Altair Emulator and shares the same code base as the [Altair 8800 Emulator Everywhere](https://github.com/gloveboxes/Altair8800.Emulator.Everywhere) project that runs on Windows, Linux, macOS, and Raspberry Pi.

## Documentation and source code

- The Altair documentation is available [here](https://aka.ms/AltairDocs).
- The Altair source code is maintained at [AI-and-Cloud-Powered-Altair-8800-on-Azure-Sphere](https://github.com/AzureSphereCloudEnabledAltair8800/AI-and-Cloud-Powered-Altair-8800-on-Azure-Sphere)
- The Altair documentation is maintained at [AltairDocsSource](https://github.com/AzureSphereCloudEnabledAltair8800/AltairDocsSource).
- All the source code is provided under an MIT License, and contributions are very welcome.

## Azure Sphere

[Azure Sphere](https://azure.microsoft.com/services/azure-sphere/) is a secure embedded platform that is ideal for quickly developing an IoT system. By providing a platform meeting all [7 properties of highly secured devices](https://www.microsoft.com/en-us/research/uploads/prod/2020/11/Seven-Properties-of-Highly-Secured-Devices-2nd-Edition-R1.pdf), Azure Sphere eliminates the need to be a hardware, OS, and security expert. These seven properties make Azure Sphere ideal for running Intelligent Edge solutions.

Azure Sphere consists of the following components: 

![](img/azure-sphere.png)

- **Azure Sphere–certified chips** from hardware partners include built-in Microsoft security technology to provide connectivity and a dependable hardware root of trust.
- **Azure Sphere OS** adds layers of protection and ongoing security updates to create a trustworthy platform for new IoT experiences.
- **Azure Sphere Security Service** brokers trust for device-to-cloud communication, detects threats and renews device security.

## Altair on Azure Sphere

The Altair emulator is supported on Azure Sphere devices from Avnet and Seeed Studio. If an Azure Sphere device is paired with the [Altair front panel kit](https://github.com/AzureSphereCloudEnabledAltair8800/AzureSphereAltair8800.Hardware) or the [Mikroe Altair Retro Click](https://www.mikroe.com/blog/8800-retro-click), the Altair address and data bus activity are displayed.

| Azure Sphere with the Altair front panel kit | MikroE Retro Click |
|--|--|
| ![The gif shows the Altair on Azure Sphere with the Altair front panel](img/altair_on_sphere.gif) | ![The gif shows the address and data bus LEDs in action](img/avnet_retro_click.gif) |

