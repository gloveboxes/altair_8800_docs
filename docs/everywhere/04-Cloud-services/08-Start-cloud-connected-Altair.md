# Add cloud services

The following steps assume you have followed the [Deploy the Altair](../50-Deploy-Altair.md) guide and you are currently running the Altair Docker image in standalone mode.

## Stop the Altair docker container

First, stop the Altair Docker container. From a terminal window, run the following command.

```bash
docker stop altair8800
```

## Create the Altair docker environment file

1. Go to the *Altair8800* folder that you cloned to your computer.
1. Using Visual Studio Code or a text editor of your choice, open the docker *altair.env* environment file.
1. Update the values with your data.

    > **IMPORTANT**
    >
    > - If you don't use a service then leave the key-value blank.
    > - Don't include any speech marks in key-values.
    > - Replace the Australia/Sydney time zone with your local time zone.

    ```env
    ID_SCOPE=
    DEVICE_ID=
    DERIVED_KEY=
    OPEN_WEATHER_MAP_API_KEY=
    TZ=Australia/Sydney
    ```

1. **Save As** the file as **~/altair.env**. The commands below assume you have saved the Altair environment file to your computer's home directory.

## Start the Altair Docker image

There are two Altair Docker images. The first is for general use on 64-bit [Linux, macOS, Windows, and Raspberry Pi operating systems](#general-linux-macos-windows-and-raspberry-pi-users). The second image is for a Raspberry Pi running [Raspberry Pi OS with a Pi Sense HAT](#raspberry-pi-with-pi-sense-hat-users). Be sure to run the Docker image that matches your system.

### General Linux, macOS, Windows, and Raspberry Pi users

Run the following command to start the Altair emulator Docker image. This command will load the environment file and map the ports for the web terminal.

```bash
docker run -d --env-file ~/altair.env -p 8082:8082 -p 80:80 --name altair8800 --rm glovebox/altair8800:latest
```

### Raspberry Pi with Pi Sense HAT users

If you have a Raspberry Pi with a Pi Sense HAT, run the following commands.  These commands will:

- enable I2C hardware access,
- start the Altair Docker image.

From the command prompt, run the following command to enable I2C support for the Pi Sense HAT.

```bash
sudo raspi-config nonint do_i2c 0
```

From the command prompt, run the following command to download and run the Docker image with Pi Sense HAT support. Replace the Australia/Sydney time zone with your local time zone.

```bash
docker run -d --env-file ~/altair.env --privileged -p 8081:8081 -p 8082:8082 -p 80:80 --name altair8800 --rm glovebox/altair8800-pisense:latest
```

## Open the Web Terminal

Open the Web Terminal to access the Altair emulator. Follow these steps.

1. Familiarize yourself with the [Web Terminal](../start/20-Web-Terminal.md) and the CP/M operating system.
1. To start the web terminal, from your web browser:
    * Navigate to `http://localhost` if you deployed the Altair emulator on your local computer.
    * Navigate to `http://hostname_ip_address` if you deployed the Altair emulator on a remote computer.
1. Enter the Altair hostname or IP Address in the textbox and select **Connect**. If you are running the Altair on your local computer, then the hostname will be **localhost**. Otherwise enter the hostname of IP address of the system running the Altair emulator.
1. Once connected, you will be greeted by the CP/M command prompt.

    ![The image shows the web terminal](img/web_terminal.png)
