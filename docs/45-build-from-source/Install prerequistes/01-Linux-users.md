# Linux

Follow these steps to install the required packages.

1. Open a Terminal window.
1. Run the following command to install the required packages

    ```bash
    sudo apt-get install -y libuv1-dev cmake build-essential gdb curl libcurl4-openssl-dev libssl-dev uuid-dev ca-certificates git libi2c-dev libgpiod-dev gpiod
    ```

## Installing libgpiod v2.x on Debian/Ubuntu

The Altair Emulator requires libgpiod v2.x to interface with GPIO pins and successfully build the project.

Verify if you have libgpiod v1.x or v2.x installed. This guide helps you install libgpiod v2.x from source, which is required for projects using the v2.x API.

### Problem this Solves

This fixes compiler errors when building projects that use libgpiod v2.x API functions:

```plaintext
warning: implicit declaration of function 'gpiod_request_config_new'
warning: implicit declaration of function 'gpiod_line_config_new' 
error: variable 'value' has initializer but incomplete type
error: 'GPIOD_LINE_VALUE_ACTIVE' undeclared
error: 'GPIOD_LINE_VALUE_INACTIVE' undeclared
```

These errors occur because the project code uses libgpiod v2.x API, but the system has libgpiod v1.x installed (common on Debian 12/Ubuntu 22.04).

### Version Verification

If you're unsure which version is installed, run these commands:

```bash
# Primary method - pkg-config
pkg-config --modversion libgpiod

# Check linked libraries in your system
ldconfig -p | grep gpiod

# Check installed packages
dpkg -l | grep libgpiod

# Check header files (v1 vs v2 have different structures)
find /usr/include /usr/local/include -name "gpiod.h" 2>/dev/null

# Check library file directly
strings /usr/local/lib/libgpiod.so.2 2>/dev/null | grep -i version
```

### Prerequisites

Install required build dependencies:

```bash
sudo apt update
sudo apt install -y build-essential cmake pkg-config autotools-dev autoconf libtool git
```

### Installation Steps

#### 1. Remove existing libgpiod v1.x (if installed)

```bash
sudo apt remove libgpiod2 libgpiod-dev
```

#### 2. Download and build libgpiod v2.x

```bash
# Create temporary build directory
cd /tmp
wget https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/snapshot/libgpiod-2.1.tar.gz
tar -xzf libgpiod-2.1.tar.gz
cd libgpiod-2.1

# Configure and build
./autogen.sh --enable-tools --enable-bindings-cxx --prefix=/usr/local
make -j$(nproc)
sudo make install
```

#### 3. Update library path

```bash
# Add to library path
echo '/usr/local/lib' | sudo tee /etc/ld.so.conf.d/libgpiod.conf
sudo ldconfig
```

#### 4. Verify installation

```bash
pkg-config --modversion libgpiod
# Should output: 2.1.0 (or similar v2.x version)

# Verify library location
ldconfig -p | grep gpiod
```
