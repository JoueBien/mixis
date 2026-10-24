# Mixis

An electron app to communicate with an X32 and several RTP MIDI controllers. MeterBridge and GetStarted.

# About the electron template used.

The code base is based on [Electron Forge](https://www.electronforge.io/guides/framework-integration/react-with-typescript).

Last installed with node `v24.13.0`. Requires python 3.6.0 and C/C++ compiler (Windows build tools or xCode) as there are packages that need to be recompiled with node-gyp. The project should auto compile native modules with the right headers when `npm install` is run.

# Install

You should be able to just install this project normally

```
npm install
```

then the project can be run in develop mode with

```
npm start
```

> Note: if you are on Linux or Raspberry Pi you will need to comment out `new MakerSquirrel({}),` in `forge.config.ts` to avoid the build hanging due to a bug where Electron Forge tries to load a Windows exe.

# Building

This project uses Electron Forge as a base and as such you can build this project by following the [Electron Forge's documentation](https://www.electronforge.io/guides/framework-integration/react-with-typescript).

# Known issues

## Outstanding

N/A

## Resolved

N/A
