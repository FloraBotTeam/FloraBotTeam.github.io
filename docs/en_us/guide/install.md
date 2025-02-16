# Getting Started
::: warning Note
This documentation is applicable to FloraBot v1.1x versions.
:::

## Installation Environment
::: tip Pre-installation Requirements
FloraBot requires Python 3.11 or higher. If already installed, proceed to the [`Installation Procedure`](#installation-procedure) section.
:::
### Windows
Visit the [`Python official website`](https://www.python.org/downloads) and download a version of Python that is not lower than `Python 3.11`, then install it.
### Linux
Run the command to install:
```Shell
sudo apt install python3
```

## Installation Procedure
### Downloading the Program
**Download the program from the [`Github`](https://github.com/FloraBotTeam/FloraBot) repository or via the link provided below:**
```link
https://github.com/FloraBotTeam/FloraBot/archive/refs/tags/v1.01.zip
```
Extract the program into an empty folder.

`Or`

**Use git to download the program locally:**
```Shell
git https://github.com/FloraBotTeam/FloraBot.git
```

### Installing Dependencies
* **Automatic Installation**

Open a terminal, navigate to the program folder, and enter the following command:
```Shell
pip install -r requirements.txt
```
* **Manual Installation**

Open a terminal and install the following dependencies:
1. **`flask`**
```Shell
pip install flask
```
2. **`requests`**
```Shell
pip install requests
```
3. **`websocket-server`**
```Shell
pip install websocket-server
```
## Running the Program
In the terminal located in the program folder, enter the following command:
```Shell
python FloraBot.py
```
or
```Shell
python3 FloraBot.py
```
**The first startup will fail, at which point a `Config.json` file will be generated in the same directory as `FloraBot.py`. Edit it.**
::: details Configuration File Explanation
**`Config.json`:**  
```Json
{
    "AutoInstallLibraries": true,
    "ConnectionType": "HTTP",
    "FloraHost": "127.0.0.1",
    "FloraPort": 3003,
    "FrameworkAddress": "127.0.0.1:3000",
    "BotID": 0,
    "Administrator": [0]
}
```
**Key-Value Pairs in `Config.json`:**  
* **`AutoInstallLibraries`: Whether to automatically install third-party libraries required by pip, default value: `true`**  
* **`ConnectionType`: The connection method between the Bot and the framework, options include `HTTP` and `WebSocket`, default value: `HTTP`**  
**(The Bot only supports reverse WebSocket)**  
* **`FloraHost`: The IP address the Bot listens on, default value: `127.0.0.1`**  
* **`FloraPort`: The port number the Bot listens on, default value: `3003`**  
**(For HTTP protocol configuration, please turn on HTTP reporting in the framework and add the reporting address as: `http://FloraHost:FloraPort`)**  
**(For reverse WebSocket protocol configuration, please turn on the reverse WebSocket service in the framework and add the address as: `ws://FloraHost:FloraPort`)**  
* **`FrameworkAddress`: The HTTP protocol listening address of the framework, format: `IP address:port number`, default value: `127.0.0.1:3000`**  
* **`BotID`: The ID of the Bot account to log in, default value: `0`**  
* **`Administrator`: List of administrator/owner/master IDs, some special functions require the account ID to be in this list to trigger, format: `[ID, ID, ...], default value: `[0]`**  
6. **Restart again, if there are no issues, it should now work normally.**  
:::
