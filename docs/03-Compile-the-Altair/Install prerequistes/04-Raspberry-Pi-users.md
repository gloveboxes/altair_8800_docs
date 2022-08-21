# Raspberry Pi users

## Install Raspberry Pi OS

The easiest way to install Raspberry Pi OS is to use the latest version of the [Raspberry Pi Imager](https://www.raspberrypi.com/software/).

1. Check which version of Raspberry Pi OS your Raspberry Pi is [compatible](https://www.raspberrypi.com/software/operating-systems/) with.
1. If compatible, then install Raspberry Pi OS 64 bit **no desktop** to maximize memory for the Altair emulator build process.
1. Learn how to use the [Raspberry Pi Imager](https://youtu.be/ntaXWS8Lk34).
1. Select the Raspberry Pi Imager Settings icon to configure the operating system installation, wifi settings and more.

### Connect to your Raspberry Pi

1. From your desktop computer, start an SSH session to your Raspberry Pi.
1. From the SSH session, run the following command to install the required packages

    ```bash
    sudo apt-get install -y libuv1-dev cmake build-essential gdb curl libcurl4-openssl-dev libssl-dev uuid-dev ca-certificates git libi2c-dev
    ```

## Raspberry Pi Sense HAT support

If you are building the Altair project on a Raspberry Pi with a [Raspberry Pi PI Sense HAT](https://www.raspberrypi.com/products/sense-hat/) then you need to enable the I2C bus.

1. Open a Terminal window
1. Run the following command to start the Raspberry Pi config utility.

    ```bash
    sudo raspi-config
    ```

1. Select **Interface options**
1. Select **I2C**
1. Select **Yes**
1. Press <kbd>ENTER</kbd>
1. Press <kbd>ENTER</kbd>
1. Select **Finish**
1. Press <kbd>ENTER</kbd>
