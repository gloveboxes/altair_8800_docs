---
sidebar_position: 4
---

# Build from Visual Studio Code

## Install Visual Studio Code

1. Install [Visual Studio Code](https://code.visualstudio.com&azure-portal=true).

You need to pass the IoT Central and derived device key to your application.

1. Open a Terminal command prompt.
    If you are using Windows Subsystem for Linux then open a WSL command prompt.
1. Go to the *Altair8800/AltairHL_emulator* folder
1. Run the following command to open the folder with VS Code.

    ```bash
    code .
    ```

1. Install the following Visual Studio Code extensions:
    - If using WSL, then install the [Visual Studio Code Remote-WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl&azure-portal=true).
    - [Visual Studio Code CodeLLDB extension](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)
    - [CMake Tools extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)
    - [C/C++ extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

1. Open the .vscode/launch.json file in VS Code.
1. Update the [args] json property for the build configuration.
1. Add the following information.

    - DPS or IoT Central ID Scope.
    - Device ID.
    - Derived device key.
    - Network interface, eg wlan0, eth0.

    **"args": ["-s", "<YOUR_SCOPE_ID>", "-d", "<YOUR_DEVICE_ID>", "-k", "<YOUR_DERIVED_DEVICE_KEY>", "-n", "<YOUR_NETWORK_INTERFACE>", "-o", "<YOUR_OPEN_WEATHER_MAP_API_KEY>"],**

1. Save the launch.json file.
1. Select the **GCC** or **Clang** Kit.
1. Press <kbd>F5</kbd> to compile and launch the Altair emulator.





### Build the Altair 8800 docker image

You can use a prebuilt Altair 8800 docker image. Run the following command to pull the prebuilt Docker image.

#### For AMD64 or ARM64 platforms

```bash
docker pull glovebox/altair8800
```

#### For Raspberry Pi ARM64 with Pi Sense HAT

```bash
docker pull glovebox/altair8800-pisense
```

### Build Docker image from source

From a Terminal window, run the following commands.

1. Clone the repo

    ```bash
    git clone https://github.com/gloveboxes/Altair8800.Emulator.UN-X.git Altair8800
    ```

1. Go to the Altair repo folder on your computer.

    ```bash
    cd Altair8800/Docker
    ```

1. Raspberry Pi Sense HAT user. Enable the Pi Sense HAT.

   ```bash
   sed -i 's/#<REMOVE_THIS_COMMENT_TO_ENABLE_PI_SENSE_HAT>//g' dockerfile
   ```

1. If running the emulator as a shared service, then enable cloud service.

   ```bash
   sed -i 's/#<REMOVE_THIS_COMMENT_TO_ENABLE_CLOUD>//g' dockerfile
   ```

## Trouble shooting Raspberry Pi issues

1. Ensure strong WiFi connection
1. Disabling the WiFi power management can improve stability

    ```bash
    sudo iw wlan0 set power_save off
    ```
