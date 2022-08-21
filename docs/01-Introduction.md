---
sidebar_position: 1
slug: /
---

# Introduction

Welcome to the Altair 8800 emulator repo. If you're interested in [retrocomputing](https://en.wikipedia.org/wiki/Retrocomputing), software development, AI, cloud services, and climate monitoring you've arrived at the right repo.

The [Altair 8800](https://en.wikipedia.org/wiki/Altair_8800?azure-portal=true) kick-started the personal computer revolution. Microsoft's first product was [Altair BASIC](https://en.wikipedia.org/wiki/Altair_BASIC?azure-portal=true) written for the Altair 8800 by Bill Gates and Paul Allen. At the time, Altair BASIC was a huge step forward as it allowed people to write programs using a high-level programming language.

The Altair project can run standalone and is a fantastic safe way to explore machine-level programming, Intel 8080 Assembly programming, along with C and BASIC development.

Optionally, the project integrates free weather and pollution cloud services from [Open Weather Map](http://openweathermap.org), along with [Azure IoT Central](https://azure.microsoft.com/en-au/services/iot-central/), and [Azure Anomaly Detection Cognitive Service](https://azure.microsoft.com/services/cognitive-services/anomaly-detector/). The following reports were generated from data published by the Altair emulator using data sourced from Open Weather Map.

| IoT Central Sydney pollution report | Azure Anomaly Detection report|
|------|-----|
| ![The images shows pollution report for Sydney](../static/img/iot_central_pollution_report.png) | ![The following images shows temperature based anomalies](../static/img/univariate-anomalies.png) |

## Retro computing with Dave Glover and the Altair 8800

<iframe width="560" height="315" src="https://www.youtube.com/embed/fSz5lTaXS0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

![](../static/img/azure-sphere.png)

- **Azure Sphere–certified chips** from hardware partners include built-in Microsoft security technology to provide connectivity and a dependable hardware root of trust.
- **Azure Sphere OS** adds layers of protection and ongoing security updates to create a trustworthy platform for new IoT experiences.
- **Azure Sphere Security Service** brokers trust for device-to-cloud communication, detects threats and renews device security.

## Altair on Azure Sphere

The Altair emulator is supported on Azure Sphere devices from Avnet and Seeed Studio. If an Azure Sphere device is paired with the [Altair front panel kit](https://github.com/AzureSphereCloudEnabledAltair8800/AzureSphereAltair8800.Hardware) or the [Mikroe Altair Retro Click](https://www.mikroe.com/blog/8800-retro-click), the Altair address and data bus activity are displayed.

| Azure Sphere with the Altair front panel kit | MikroE Retro Click |
|--|--|
| ![The gif shows the Altair on Azure Sphere with the Altair front panel](../static/img/altair_on_sphere.gif) | ![The gif shows the address and data bus LEDs in action](./../static/img/avnet_retro_click.gif) |

## Altair 8800 emulator architecture

The Altair solution is deployed across all three custom app cores on Azure Sphere, including two workloads on the low-power real-time cores. The Altair emulator runs on the high-level Cortex A7 core, a continuous movement classification TinyML model runs on one of the real-time cores, and the other real-time core runs storage services.

![The following diagram summarizes the Altair emulator architecture.](../static/img/Altair_8800_Application_Architecture.png)

Starting from the bottom left and moving up and then to the right.

- **POSIX Compatible OS:**. The Altair 8800 emulator runs on [POSIX](https://en.wikipedia.org/wiki/POSIX) compatible operating systems, including Linux, macOS, [Windows WSL 2](https://docs.microsoft.com/windows/wsl), and Raspberry Pi OS.
- **WebSocket & Azure IoT C:** These communication libraries connect the Altair emulator to the web terminal and cloud services. The Altair terminal IO messages are routed over [WebSockets](https://en.wikipedia.org/wiki/WebSocket), and the Azure IoT C SDK connects the Altair to Azure IoT Central.
- **Event loop:** The Altair coordinates activities on the main thread using the built-in Event loop library.
- **EdgeDevX:** This library simplifies access to Azure IoT services, and provides event-timer services, along with several useful utilities.
- **Terminal IO & Cloud Services:** The Intel 8080 CPU provides 256 input ports and 256 output ports. The Intel 8080 ports were used to integrate peripherals such as disk drives, printers, and modems. However, for the Altair emulator, these ports are used to integrate communications and cloud services. Terminal input and output ports are routed over WebSockets, other ports are used for timing services, access to weather and pollution data, plus Azure IoT services.
- **Intel 8080 emulator:** This is an open-source software implementation of the Intel 8080 CPU. The Intel 8080 emulator executes Intel 8080 applications including the CP/M operating system, compilers, apps, and games.
- **CPU Monitor:** The CPU monitor implements the virtual Altair front panel, along with memory disassembler, tracer, and Altair emulator reset.
- **CP/M:** CP/M originally stood for Control Program/Monitor. Later, CP/M became known as Control Program for Microcomputers. It was a mass-market operating system created in 1974 for Intel 8080/85-based microcomputers by Gary Kildall of Digital Research, Inc.
- **Programming languages:** Included on the main disk image are the Microsoft BASIC interpreter, the BDS C compiler, and the Intel and Microsoft assemblers and linkers.
- **Altair BASIC:** By default the Altair emulator boots CP/M, but it is easy to boot the original Altair BASIC program.
- **Altair Web Terminal:** Provides a web-browser-hosted Altair terminal. The web terminal is built using the Xterm library. Xterm.js provides a web browser-hosted terminal, a WebSocket integrates Xterm with the Altair emulator.
- **Open Weather Map**: Open Weather Map provides planet-scale weather and pollution data services. Open Weather Map provides free access to weather and pollution data by geographic location.
- **Azure IoT Central:** [Azure IoT Central](https://azure.microsoft.com/services/iot-central?azure-portal=true) is a customizable cloud-based Internet of Things (IoT) application platform. You can report, analyze, and export IoT data.
