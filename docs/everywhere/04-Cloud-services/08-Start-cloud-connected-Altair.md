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

Run the following command to start the Altair emulator. This command will:

1. Create a Docker persistent storage volume.
1. Map the ports for the web terminal.
1. Set the Docker container time zone. Replace the Australia/Sydney time zone with your local time zone.

#### Create a new persistent storage volume

```bash
docker volume create altair-disks
```

#### Start the Altair emulator

```bash
docker run -d --env-file ~/altair.env -p 8082:8082 -p 80:80 -v altair-disks:/AltairEverywhere/AltairHL_emulator/Disks --name altair8800 --rm glovebox/altair8800:latest
```

### Raspberry Pi with Pi Sense HAT users

Run the following command to start the Altair emulator. This command will:

1. Enable I2C hardware access.
2. Create a Docker persistent storage volume.
3. Map the ports for the web terminal.
4. Set the Docker container time zone. Replace the Australia/Sydney time zone with your local time zone.
5. Starts the Docker container in privileged mode so the emulator can control the Pi Sense HAT panel LEDs.

#### Enable I2C hardware access

From the command prompt, run the following command to enable I2C support for the Pi Sense HAT.

```bash
sudo raspi-config nonint do_i2c 0
```

#### Create a new persistent storage volume

```bash
docker volume create altair-disks
```

#### Start the Altair emulator

```bash
docker run -d --env-file ~/altair.env --privileged -p 8081:8081 -p 8082:8082 -p 80:80 -v altair-disks:/AltairEverywhere/AltairHL_emulator/Disks --name altair8800 --rm glovebox/altair8800-pisense:latest
```

### Managing the Docker persistent storage volume

1. Inspect the persistent storage volume

    ```bash
    docker volume inspect altair-disks
    ```

2. Check the data in the persistent storage volume

    ```bash
    sudo ls /var/lib/docker/volumes/altair-disks/_data -all
    ```

3. To remove the persistent storage volume.

   ```bash
   docker volume rm azure-sql-edge-data
   ```

## Open the Web Terminal

Open the Web Terminal to access the Altair emulator. Follow these steps.

1. Familiarize yourself with the [Web Terminal](../../start/20-Web-Terminal.md) and the CP/M operating system.
1. Open your web browser:
    * Navigate to `http://localhost` if you deployed the Altair emulator on your local computer.
    * Navigate to `http://hostname_or_ip_address` if you deployed the Altair emulator on a remote computer.
1. Connect to the Altair emulator, enter the `localhost`, the `Hostname` or the `IP address` of the computer running the Altair emulator.
1. Select **Connect**. Once connected, you will be greeted by the CP/M command prompt.

    ![The image shows the web terminal](img/web_terminal.png)
