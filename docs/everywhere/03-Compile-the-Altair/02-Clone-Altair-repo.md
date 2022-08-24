---
sidebar_position: 3
---

# Clone the Altair repo

For Windows users, you must clone the project into the WSL2 filesystem. Not the Windows filesystem.

Run the following commands to clone the Altair8800 emulator repo to your computer.

1. Clone the repo

    ```bash
    git clone https://github.com/gloveboxes/Altair_8800_POSIX.git Altair8800
    ```

1. Initialize the repo submodules

    ```bash
    cd Altair8800 && git submodule update --init --recursive
    ```
