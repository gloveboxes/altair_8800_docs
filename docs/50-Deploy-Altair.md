---
sidebar_position: 5
---

# Deploy the Altair

The easiest way to run the Altair 8800 emulator is with Docker. You need to install Docker on your Linux, macOS, Windows, or Raspberry Pi computer.

If you prefer, you can compile the Altair code from the source code and run it as a native application on your computer. For more information, refer to [Compiling the Altair emulator](03-Compile-the-Altair/01-Introduction.md).

## Install Docker

Install Docker on your computer.

- [Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/)
- [Install Docker Desktop on Mac](https://docs.docker.com/desktop/mac/install/)

- Install Docker on Linux and Raspberry Pi

    Docker has a [script](https://docs.docker.com/engine/install/debian/) to install Docker on Debian, Ubuntu, and Raspberry Pi OS. Run this script using the following command.

    ```bash
     curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh
    ```

    Review the [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user) document.

    1. Grant the current user Docker rights

        ```bash
        sudo usermod -aG docker $USER
        ```

    1. Reboot the system.

## Start the Altair emulator Docker container

The Docker Altair image runs on 64 bit Linux, macOS, Windows, and Raspberry Pi OS.

## Pi Sense HAT or Retro Click LED panels

If you have a Raspberry Pi and a Pi Sense HAT, then the 8x8 LED panels can display:

1. The Altair 8800 front panel address and data bus information. The address and data bus LEDs give you a visual indication of the state of the Intel 8080 CPU.
1. The Pi Sense HAT and Retro Click 8x8 LED panels can also be switched to *Font* mode. When *Font* is enabled, you can display characters on the LED panels.

## Start the Altair Docker image

There are two Altair Docker images. The first is for general use on 64-bit [Linux, macOS, Windows and Raspberry Pi operating systems](#general-linux-macos-windows-and-raspberry-pi-users). The second image is for a Raspberry Pi running [Raspberry Pi OS with a Pi Sense HAT](#raspberry-pi-with-pi-sense-hat-users). Be sure to run the Docker image that matches your system.

### General Linux, macOS, Windows, and Raspberry Pi users

Run the following command to start the Altair emulator. This command will:

1. Map the ports for the web terminal.
1. Set the Docker container time zone. Replace the Australia/Sydney time zone with your local time zone.

```bash
docker run -e TZ=Australia/Sydney -d -p 8082:8082 --name altair8800 --rm glovebox/altair8800:latest
```

### Raspberry Pi with Pi Sense HAT users

If you have a Raspberry Pi with a Pi Sense HAT, run the following commands.  These commands will:

- enable I2C hardware access,
- map the ports for the web terminal,
- and enables Docker privileged mode required to access the Raspberry Pi Sense HAT.

From the command prompt, run the following command to enable I2C support for the Pi Sense HAT.

```bash
sudo raspi-config nonint do_i2c 0
```

Run the following command to start the Altair emulator. This command will:

1. Map the ports for the web terminal.
1. Set the Docker container time zone. Replace the Australia/Sydney time zone with your local time zone.
1. Starts the Docker container in privileged mode so the emulator can control the Pi Sense HAT panel LEDs.

```bash
docker run -e TZ=Australia/Sydney -d --privileged -p 8082:8082 --name altair8800 --rm glovebox/altair8800-pisense:latest
```

## Open the Web Terminal

Open the Web Terminal to access the Altair emulator. Follow these steps.

1. Familiarize yourself with the [Web Terminal](20-Web-Terminal.md) and the CP/M operating system.
1. To start the web terminal, from your web browser open the following link [http://aterminal.z8.web.core.windows.net/](http://aterminal.z8.web.core.windows.net/).
1. To connect to the Altair emulator, enter the IP address or hostname of the computer or device running the Altair emulator. If you are running the Altair emulator on your local computer, then connect to address **localhost**. Then select **Connect**.

    ![The following image is of the web terminal command prompt](../static/img/web_terminal.png)

    When connected, press the Enter key, and the [CP/M](#introduction-to-cpm) **A>** command prompt will be displayed. CP/M is ready for your first command. For information on rebooting CP/M or loading Altair Basic, refer to [rebooting the Altair](30-Rebooting-the-Altair.md).

    ![The following image is of the web terminal connected to the Altair emulator](../static/img/web_terminal_connected.png)

<!-- 1. Enter the Altair hostname or IP Address in the textbox and select **Connect**. If you are running the Altair on your local computer, then the hostname will be **localhost**. Otherwise enter the hostname of IP address of the system running the Altair emulator.
1. Once connected, you will be greeted by the CP/M command prompt.

    ![The image shows the web terminal](./../static/img/web_terminal.png) -->

## Stop the Altair emulator Docker container

Use the following command to stop the Altair emulator Docker container.

```bash
docker stop altair8800
```

## Restart the Altair emulator Docker container

Use the following command to start the Altair emulator Docker container that you previously stopped.

```bash
docker start altair8800
```

## Delete the Altair emulator Docker container

First, stop the Altair emulator Docker container, then delete the Altair emulator container.

**WARNING** Deleting the Altair emulator Docker container will also delete any data and programs you have stored on the Altair.

Use the following command to delete the Altair Docker container.

```bash
docker container rm altair8800
```
