---
sidebar_position: 1
---

# Introduction

This is version 2 of the Altair 8800 emulator project and it shares the same code base as the [Azure Sphere Cloud-Enabled Altair 8800](https://github.com/AzureSphereCloudEnabledAltair8800/AltairOnAzureSphere) as featured on the Register "[Microsoft adds cloud enablement to 1970s Altair 8800 tech](https://www.theregister.com/2021/07/16/altair_redux/)".

## Source code

- The Altair Everywhere source code is maintained at [AI and Cloud powered Altair 8800 Everywhere](https://github.com/gloveboxes/Altair_8800_Everywhere).
- All the source is provided under an MIT License, and contributions are very welcome.

## Run the Altair

The Altair emulator runs in Docker and on desktop and device operating systems. There are extended experiences when you run the Altair emulator on a device.

## Docker

The **fastest** way to run the Altair emulator is on a computer, including Raspberry Pi, with Docker.

## Desktop operating systems

The Altair emulator also runs on [POSIX](https://en.wikipedia.org/wiki/POSIX) compatible operating systems including, Linux, Windows with [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install), macOS on Apple Silicon and Intel.

## Raspberry Pi

The more **interesting** way to run the Altair emulator is on a device, the Altair emulator has been tested on the following devices:

1. [Raspberry Pi](https://www.raspberrypi.org/), models, Zero 1 W & 2 W, 2B, 3A, 3B, and 4 running Raspberry Pi OS 32-bit and 64-bit (recommended).

## Raspberry Pi Sense HAT

If you pair a Raspberry Pi with a [Pi Sense HAT](https://www.raspberrypi.com/products/sense-hat/), the Altair address and data bus activity is displayed on the 8x8 LED panel.

| Raspberry Pi with Pi Sense HAT  | Raspberry Pi Sense HAT |
|--|--|
| ![The image shows the address and data bus LEDs](img/raspberry_pi_sense_hat_map.png) | ![The gif shows the address and data bus LEDs in action](img/raspberry_pi_sense_hat.gif) |
